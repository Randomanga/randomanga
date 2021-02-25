import { Inject, Service } from 'typedi';

@Service()
export default class UserService {
  constructor(@Inject('userModel') private userModel: Models.UserModel) {}

  public async ChangeRole(username: string, role: string) {
    const userRecord = await this.userModel.findOneAndUpdate(
      { username },
      { $set: { role: role } },
      { new: true, useFindAndModify: false },
    );
    if (!userRecord) {
      throw new Error('User doesnt exist');
    }
    return { status: 'ok', userChanged: username };
  }
}
