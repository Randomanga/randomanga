import {
  AuthResponseDto,
  LoginRequestDto,
  RegisterRequestDto,
} from './../Dtos/Auth/Auth.dto';

export interface IAuthService {
  login(data: LoginRequestDto): Promise<AuthResponseDto>;
  register(data: RegisterRequestDto): Promise<AuthResponseDto>;
}
