import { LoginRequestDTO, ResponseDTO, UserDTO, RegisterRequestDto } from './Auth.dtos';
import { IHasher } from './Adapters/IHasher';
import { IAuthRepository } from './IAuthRepository';
import { IAuthService } from './IAuthService';
import jwt from 'jsonwebtoken';
import config from '../../../config';

// The service will handle all the business logic
export class AuthService implements IAuthService {
  // Notice the interface, now the AuthService doesn't care about the implementation of the repository.
  // naming if tough haha.
  constructor(
    private readonly authRepo: IAuthRepository,
    private readonly hasher: IHasher,
    private readonly randomBytes: (total: number) => Buffer,
  ) {}

  // This should be typed with the expected RequestDto
  async register(data: RegisterRequestDto) {
    const hashedPassword = await this.hasher.hash(data.password, {
      salt: this.createSalt(32),
    });

    const createdUser = await this.authRepo.save(data, hashedPassword);
    if (!createdUser) {
      throw Error('Am occured while creating user. User might already be registered');
    }
    const token = this.generateToken(createdUser);

    return {
      createdUser,
      token,
    };
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
      return { userDTO, token };
    } else {
      throw new Error('Invalid passowrd');
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
