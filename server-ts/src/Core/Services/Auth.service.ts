import { randomBytes } from 'crypto';
import { AuthMapper } from 'Config/Mappers/Auth.mapper';
import { LoginRequestDto, RegisterRequestDto } from './../Dtos/Auth/Auth.dto';
import { IHasher } from '../Adapters/IHasher';
import { IAuthService } from './../Ports/IAuth.service';
import { IUsersRepository } from 'Core/Ports/IUsers.repository';
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
  async login(data: LoginRequestDto) {
    const user = await this._usersRepo.findOneByUsername(data.username);
    if (!user) {
      throw new Error('User not registered');
    }
    const validPassword = await this._hasher.verify(
      user.password,
      data.password
    );
    if (!validPassword) throw new Error('Invalid password');
    return AuthMapper.toWeb(user);
  }
  async register(data: RegisterRequestDto) {
    const hashedPassword = await this._hasher.hash(data.password, {
      salt: this.createSalt(),
      raw: false,
    });

    const user = await this._usersRepo.save({
      ...data,
      password: hashedPassword,
    });
    return AuthMapper.toWeb(user);
  }
  private createSalt(total = 32) {
    return randomBytes(total);
  }
}
