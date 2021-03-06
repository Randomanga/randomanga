import { Document, ObjectId } from 'mongoose';
export interface IUser {
  _id: ObjectId;
  username: string;
  email: string;
  password: string;
  avatar: string | null;
  role: string;
}

export interface IUserInputDTO {
  username: string;
  email: string;
  avatar: string;
  password: string;
}
