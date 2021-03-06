import { IUser } from './../../../interfaces/IUser';
import { UserDTO, LoginRequestDTO } from './Auth.dtos';
export interface IAuthRepository {
  // Should be of type User
  save(payload: any, hashedPassword: Buffer): Promise<UserDTO>;
  findUser(payload: LoginRequestDTO): Promise<IUser>;
}
