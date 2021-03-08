import { ObjectId } from 'mongoose';
import { IUserRepository } from './IUserRepository';
import UserModel from '../../../models/user';

export class UserRepository implements IUserRepository {
  constructor() {
    this.model = UserModel;
  }
  private readonly model: Models.UserModel;

  async getUserById(id: string | ObjectId) {
    const userRecord = await this.model.findById(id);
    return userRecord;
  }
}
