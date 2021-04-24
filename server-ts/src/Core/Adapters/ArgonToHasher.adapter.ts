import argon2 from 'argon2';
import { IHasher } from './IHasher';
import { Options } from 'argon2';
export class ArgonToHasherAdapter implements IHasher {
  // The interface should be really clear about the options
  async hash(password: string, options?: Options & { raw?: false }) {
    return argon2.hash(password, options);
  }
  async verify(hash: string, plain: string | Buffer, options?: any) {
    return argon2.verify(hash, plain, options);
  }
}
