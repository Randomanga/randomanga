import { UserMapper } from 'Config/Mappers/User.mapper';
import {
  CreateIdentityDto,
  UpdateALTokenRequestDto,
} from 'Core/Dtos/User/User.dtos';
import { IUserService } from 'Core/Ports/IUser.service';
import { IUsersRepository } from 'Core/Ports/IUsers.repository';
import jwt from 'jsonwebtoken';
import fetch from 'node-fetch';

export interface IUserServiceOptions {
  usersRepository: IUsersRepository;
}

export class UserService implements IUserService {
  private readonly _usersRepo: IUsersRepository;
  constructor({ usersRepository }: IUserServiceOptions) {
    this._usersRepo = usersRepository;
  }
  async createAlIdentity(data: CreateIdentityDto) {
    const identity = jwt.sign(
      {
        id: data.user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    );
    return UserMapper.toIdentityResponseDto({
      _id: data.user._id,
      identity,
    });
  }
  async updateToken(data: UpdateALTokenRequestDto) {
    const authData = await this.getAnilistAuthData(data.code);
    const user = await this._usersRepo.saveAnilistAuth(authData, data.user);
    return UserMapper.toUserTokensResponse(user);
  }
  private async getAnilistAuthData(code: string) {
    const response = await fetch('https://anilist.co/api/v2/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        client_id: '2475',
        client_secret: 'RKa2OMI8Z8ViiIhGmeuCu5RqmXPWtMQasgpGEfEW',
        redirect_uri: 'http://192.168.1.242:5000/api/oauth/token',
        code: code,
      }),
    });
    const body = await response.json();
    return {
      access_token: body.access_token,
      refresh_token: body.refresh_token,
    };
  }
}
