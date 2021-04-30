import { randomBytes } from 'crypto';
import { IHasher } from '../Adapters/IHasher';
import { IAuthService } from './../Ports/IAuth.service';
import { IUsersRepository } from 'Core/Ports/IUsers.repository';
import {
  CreateUserRequestDto,
  LoginUserRequestDto,
} from 'Core/Dtos/User/User.dtos';
import { UserMapper } from 'Config/Mappers/User.mapper';
export interface IAuthServiceOptions {
  usersRepository: IUsersRepository;
  hasher: IHasher;
}
export class AuthService implements IAuthService {
  private readonly _usersRepo: IUsersRepository;
  private readonly _hasher: IHasher;
  constructor({ usersRepository, hasher }: IAuthServiceOptions) {
    this._usersRepo = usersRepository;
    this._hasher = hasher;
  }
  async login(data: LoginUserRequestDto) {
    const user = await this._usersRepo.findOneByUsername(data.username);
    if (!user) {
      throw new Error('User not registered');
    }
    const validPassword = await this._hasher.verify(
      user.password,
      data.password
    );
    if (!validPassword) throw new Error('Invalid password');
    return UserMapper.toWeb(user);
  }
  async register(data: CreateUserRequestDto) {
    const hashedPassword = await this._hasher.hash(data.password, {
      salt: this.createSalt(),
      raw: false,
    });

    const user = await this._usersRepo.save({
      ...data,
      password: hashedPassword,
    });
    return UserMapper.toWeb(user);
  }
  private createSalt(total = 32) {
    return randomBytes(total);
  }
}
