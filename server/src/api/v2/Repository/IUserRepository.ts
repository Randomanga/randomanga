import { ObjectId, Document } from 'mongoose';
import { IUser } from '../../../interfaces/IUser';
export interface IUserRepository {
  getUserById(id: string | ObjectId): Promise<IUser & Document>;
}
