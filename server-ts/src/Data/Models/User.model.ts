import mongoose, { Schema, Document } from 'mongoose';

export interface IUserModel {
  _id: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  role: string;
  createdAt: Date;
}
const UserModel: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
    required: false,
    default: null,
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin'],
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IUserModel & Document>('Users', UserModel);
