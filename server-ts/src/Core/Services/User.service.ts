import { UpdateALTokenRequestDto } from 'Core/Dtos/User/User.dtos';
import { IUserService } from 'Core/Ports/IUser.service';
import { IUsersRepository } from 'Core/Ports/IUsers.repository';
import fetch from 'node-fetch';

export interface IUserServiceOptions {
  usersRepository: IUsersRepository;
}

export class UserService implements IUserService {
  private readonly _usersRepo: IUsersRepository;
  constructor({ usersRepository }: IUserServiceOptions) {
    this._usersRepo = usersRepository;
  }

  async updateToken(data: UpdateALTokenRequestDto) {
    const token = await this.retrieveJWT(data.code);
    const user = await this._usersRepo.saveToken(token, data.user);
    return user;
  }
  async retrieveJWT(code: string) {
    const response = await fetch('https://anilist.co/api/v2/oauth/token', {
      method: 'POST',
      body: JSON.stringify({
        grant_type: 'authorization_code',
        client_id: '2475',
        client_secret: 'RKa2OMI8Z8ViiIhGmeuCu5RqmXPWtMQasgpGEfEW',
        code: code,
      }),
    });
    const body = await response.json();
    console.log(body);
    return body.access_token;
  }
}
