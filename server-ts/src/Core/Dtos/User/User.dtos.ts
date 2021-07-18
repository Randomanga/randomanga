import { IUserModel } from 'Data/Models/User.model';

export class UserTokensResponse {
  _id: IUserModel['_id'];
  username: IUserModel['username'];
  alToken: IUserModel['alAuth']['token'];
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
export class CreateIdentityDto {
  user: IUserModel;
}
export class IdentityResponseDto {
  _id: IUserModel['_id'];
  identity: string;
}
export class UserShowDto {
  id: IUserModel['_id'];
}
