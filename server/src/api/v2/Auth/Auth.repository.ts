/*
  It's recommended to make a Generic repository instead of creating a new one
  for each entity. Since most of it's functionality is going to be the same.
*/

import { IAuthRepository } from './IAuthRepository';

export class AuthRepository implements IAuthRepository {
  constructor(private readonly model: Models.UserModel) {}

  // Type it to be the User entity or a custom Dto, it's
  // up to you how far you wanna decouple this.
  async save(payload: any, hashedPassword: string) {
    return this.model.create({
      ...payload,
      hashedPassword,
      salt: 'Does not belong in the database!!!',
    });
  }
}
