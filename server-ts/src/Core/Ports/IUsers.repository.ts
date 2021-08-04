import { IUserModel } from 'Data/Models/User.model';
import { CreateUserRequestDto } from 'Core/Dtos/User/User.dtos';

export interface IUsersRepository {
  findOneUser(id: string): Promise<IUserModel | null>;
  findOneByUsername(username: string): Promise<IUserModel | null>;
  save(data: CreateUserRequestDto): Promise<IUserModel>;
  delete(id: string): Promise<boolean>;
  saveAnilistAuth(
    data: { access_token: string; refresh_token: string },
    user: IUserModel
  ): Promise<IUserModel>;
  removeAnilistAuth(id: string): Promise<boolean>;
}
