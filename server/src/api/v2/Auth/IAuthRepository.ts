export interface IAuthRepository {
  // Should be of type User
  save(payload: any, hashedPassword: string): Promise<any>;
}
