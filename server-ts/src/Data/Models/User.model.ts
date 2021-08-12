import mongoose, { Schema, Document } from 'mongoose';

export interface IUserModel {
  _id: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  role: string;
  createdAt: Date;
  alAuth: {
    token: string;
    refreshToken: string;
  };
  about: string;
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
  alAuth: {
    token: {
      type: String,
      default: null,
    },
    refreshToken: {
      type: String,
      default: null,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  about: {
    type: String,
    default: null,
  },
});

export default mongoose.model<IUserModel & Document>('User', UserModel);
