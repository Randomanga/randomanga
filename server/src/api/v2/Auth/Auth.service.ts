import { IAuthRepository } from './IAuthRepository';
import { IAuthService } from './IAuthService';

// The service will handle all the business logic
export class AuthService implements IAuthService {
  // Notice the interface, now the AuthService doesn't care about the implementation of the repository.
  // naming if tough haha.
  constructor(
    private readonly authRepo: IAuthRepository,
    private readonly hasher: IHasher,
    private readonly randomBytes: (total: number) => string,
  ) {}

  // This should be typed with the expected RequestDto
  async register(data: any) {
    // The repository *might* return its own DTO. It really depends on how far you wanna go.
    // But in this case it's fine to use the Model type. Remember, this means we are "coupled" to mongoose.
    const hashedPassword = await this.hasher.hash(data.password, {
      salt: this.createSalt(32),
    });

    const token = this.generateToken();

    // You *should* map the RequestDto into a User domain entity
    // Others would say that you should create yet another DTO, I'm not 100% sure
    // It's up to you.
    const createdUser = await this.authRepo.save(data, hashedPassword);

    return {
      createdUser,
      token,
    };
  }

  private createSalt(total = 32) {
    return this.randomBytes(total);
  }

  private generateToken() {
    // Create your jwt..

    return 'asodkoaskdoaskdsaoqwoqwoekqwoaskodkastoken';
  }
}
