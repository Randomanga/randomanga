import {
  UpdateALTokenRequestDto,
  UserInfoResponse,
} from 'Core/Dtos/User/User.dtos';

export interface IUserService {
  updateToken(data: UpdateALTokenRequestDto): Promise<UserInfoResponse>;
  retrieveJWT(code: string): Promise<string>;
}
