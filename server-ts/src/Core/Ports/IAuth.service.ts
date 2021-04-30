import {
  CreateUserRequestDto,
  LoginUserRequestDto,
} from 'Core/Dtos/User/User.dtos';
import { IUserModel } from 'Data/Models/User.model';

export interface IAuthService {
  login(data: LoginUserRequestDto): Promise<IUserModel>;
  register(data: CreateUserRequestDto): Promise<IUserModel>;
}
