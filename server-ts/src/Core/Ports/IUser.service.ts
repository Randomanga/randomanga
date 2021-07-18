import {
  CreateIdentityDto,
  IdentityResponseDto,
  UpdateALTokenRequestDto,
  UserShowDto,
  UserTokensResponse,
} from 'Core/Dtos/User/User.dtos';
import { IUserModel } from 'Data/Models/User.model';

export interface IUserService {
  updateToken(data: UpdateALTokenRequestDto): Promise<UserTokensResponse>;
  createAlIdentity(data: CreateIdentityDto): Promise<IdentityResponseDto>;
  show(data: UserShowDto): Promise<IUserModel>;
  token(data: UserShowDto): Promise<UserTokensResponse>;
}
