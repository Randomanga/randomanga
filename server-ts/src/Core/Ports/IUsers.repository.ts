import { IUserModel } from 'Data/Models/User.model';
import { RegisterRequestDto } from 'Core/Dtos/Auth/Auth.dto';

export interface IUsersRepository {
  findOneUser(id: string): Promise<IUserModel | null>;
  findOneByUsername(username: string): Promise<IUserModel | null>;
  save(data: RegisterRequestDto): Promise<IUserModel>;
  delete(id: string): Promise<boolean>;
}
