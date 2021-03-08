import { LoginRequestDTO, UserDTO, RegisterRequestDto } from './Auth.dtos';
import { IHasher } from './Adapters/IHasher';
import { IAuthRepository } from './IAuthRepository';
import { IAuthService } from './IAuthService';
import jwt from 'jsonwebtoken';
import config from '../../../config';

export class AuthService implements IAuthService {
  constructor(
    private readonly authRepo: IAuthRepository,
    private readonly hasher: IHasher,
    private readonly randomBytes: (total: number) => Buffer,
  ) {}

  async register(data: RegisterRequestDto) {
    const hashedPassword = await this.hasher.hash(data.password, {
      salt: this.createSalt(32),
    });
    try {
      const createdUser = await this.authRepo.save(data, hashedPassword);

      const user = new UserDTO(createdUser);
      return user;
    } catch (err) {
      throw new Error('User already registered');
    }
  }
  async login(data: LoginRequestDTO) {
    const user = await this.authRepo.findUser(data);
    if (!user) {
      throw new Error('User not registered');
    }

    const validPassword = await this.hasher.verify(user.password, data.password);
    if (validPassword) {
      const userDTO = new UserDTO(user);
      return userDTO;
    } else {
      throw new Error('Invalid password');
    }
  }
  private createSalt(total = 32) {
    return this.randomBytes(total);
  }
}
