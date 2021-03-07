import { LoginRequestDTO, RegisterRequestDto } from './Auth.dtos';
export interface IAuthService {
  register(data: RegisterRequestDto): Promise<unknown>;
  login(data: LoginRequestDTO): Promise<unknown>;
}
