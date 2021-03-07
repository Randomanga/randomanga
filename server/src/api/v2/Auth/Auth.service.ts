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
      const token = this.generateToken(createdUser);

      const user = new UserDTO(createdUser);
      return {
        ...user,
        token,
      };
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
      const token = this.generateToken(userDTO);
      return { ...userDTO, token };
    } else {
      throw new Error('Invalid password');
    }
  }
  private createSalt(total = 32) {
    return this.randomBytes(total);
  }

  private generateToken(user: UserDTO) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign(
      {
        _id: user._id,
        role: user.role,
        exp: exp.getTime() / 1000,
      },
      config.jwtSecret,
    );
  }
}
