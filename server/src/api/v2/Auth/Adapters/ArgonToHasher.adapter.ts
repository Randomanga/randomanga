import argon2 from 'argon2';
import { IHasher } from './IHasher';

export class ArgonToHasherAdapter implements IHasher {
  // The interface should be really clear about the options
  // But I dont feel like typing everyhting.
  async hash(password: string, options: any) {
    return argon2.hash(password, options);
  }
}
