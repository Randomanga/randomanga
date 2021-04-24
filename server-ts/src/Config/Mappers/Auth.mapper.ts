import { IUserModel } from './../../Data/Models/User.model';
import {
  AuthResponseDto,
  LoginRequestDto,
  RegisterRequestDto,
} from 'Core/Dtos/Auth/Auth.dto';

export class AuthMapper {
  public static toLoginRequestDto(data: LoginRequestDto) {
    return {
      username: data.username,
      password: data.password,
    } as LoginRequestDto;
  }
  public static toRegisterRequestDto(data: RegisterRequestDto) {
    return {
      username: data.username,
      password: data.password,
      email: data.email,
    } as RegisterRequestDto;
  }
  public static toWeb(data: IUserModel) {
    return {
      _id: data._id,
      username: data.username,
      avatar: data.avatar,
    } as AuthResponseDto;
  }
}
