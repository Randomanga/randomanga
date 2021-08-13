import { UserMapper } from 'Config/Mappers/User.mapper';
import {
  CreateIdentityDto,
  UpdateALTokenRequestDto,
  UserShowDto,
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
        expiresIn: '1min',
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
  async removeAlToken(data: UserShowDto) {
    return this._usersRepo.removeAnilistAuth(data.id);
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
        client_id: '6064',
        client_secret: 'i0SvxjOkapHMuhaeS7DDTaKPArk8W7Lk36MgnJZg',
        redirect_uri: 'http://192.168.178.66:5000/api/oauth/token',
        code: code,
      }),
    });
    const body = await response.json();
    return {
      access_token: body.access_token,
      refresh_token: body.refresh_token,
    };
  }
  async show(data: UserShowDto) {
    const user = await this._usersRepo.findOneUser(data.id);
    if (!user) throw Error('User not found');
    return user;
  }
  async token(data: UserShowDto) {
    const user = await this._usersRepo.findOneUser(data.id);
    if (!user) throw Error('User not found');
    return UserMapper.toUserTokensResponse(user);
  }
}
