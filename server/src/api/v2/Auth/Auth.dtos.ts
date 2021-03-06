import { ObjectId } from 'mongoose';

export class RegisterRequestDto {
  public username: string;
  public email: string;
  public password: string;

  constructor(payload: any) {
    Object.assign(this, payload);
  }
}
export class LoginRequestDTO {
  public username: string;
  public email: string;
  public password: string;

  constructor(payload: any) {
    Object.assign(this, payload);
  }
}

export class UserDTO {
  public username: string;
  public avatar: string | null;
  public role: string;
  public _id: ObjectId;
  constructor(payload: any) {
    Object.assign(this, payload);
  }
}
