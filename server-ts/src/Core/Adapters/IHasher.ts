import { Options } from 'argon2';
export interface IHasher {
  hash(password: string, options?: Options & { raw?: false }): Promise<string>;
  verify(hash: string, plain: string | Buffer, options?: any): Promise<boolean>;
}
