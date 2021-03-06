import { UserDTO, LoginRequestDTO } from './Auth.dtos';
/*
  It's recommended to make a Generic repository instead of creating a new one
  for each entity. Since most of it's functionality is going to be the same.
*/

import { IAuthRepository } from './IAuthRepository';

export class AuthRepository implements IAuthRepository {
  constructor(private readonly model: Models.UserModel) {}

  async save(payload: UserDTO, hashedPassword: Buffer) {
    return this.model.create({
      ...payload,
      hashedPassword,
    });
  }
  async findUser(payload: LoginRequestDTO) {
    return this.model.findOne({ username: payload.username });
  }
}
