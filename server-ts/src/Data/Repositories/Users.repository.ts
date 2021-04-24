import { IUsersRepository } from 'Core/Ports/IUsers.repository';
import UserModel, { IUserModel } from 'Data/Models/User.model';

export class UsersRepository implements IUsersRepository {
  private _model = UserModel;

  public async findOneUser(id: string) {
    return this._model.findOne({ _id: id });
  }
  public async save(data: Omit<IUserModel, '_id' | ' avatar' | 'role'>) {
    const user = new this._model(data);
    return user.save();
  }
  public async delete(id: string) {
    const { deletedCount } = await this._model.deleteOne({ _id: id });
    return deletedCount ? deletedCount >= 1 : false;
  }
  public async findOneByUsername(username: string) {
    return UserModel.findOne({ username: username });
  }
}
