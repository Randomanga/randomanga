import { LoginRequestDTO, RegisterRequestDto, UserDTO } from './Auth.dtos';
export interface IAuthService {
  register(data: RegisterRequestDto): Promise<UserDTO>;
  login(data: LoginRequestDTO): Promise<UserDTO>;
}
