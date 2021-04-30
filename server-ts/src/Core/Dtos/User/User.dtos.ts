import { IUserModel } from 'Data/Models/User.model';

export class UserInfoResponse {
  _id: IUserModel['_id'];
  avatar: IUserModel['avatar'];
  token: IUserModel['token'];
  username: IUserModel['username'];
}
export class UpdateALTokenRequestDto {
  code: string;
  user: IUserModel;
}
export class CreateUserRequestDto {
  username: IUserModel['username'];
  email: IUserModel['email'];
  password: IUserModel['password'];
}
export class CreateUserResponseDto {
  _id: IUserModel['_id'];
  username: IUserModel['username'];
  createdAt: IUserModel['createdAt'];
}
export class LoginUserRequestDto {
  username: IUserModel['username'];
  password: IUserModel['password'];
}
