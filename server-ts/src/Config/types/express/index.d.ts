import { IUserModel } from '../../../Data/Models/User.model';
import { Response, Request } from 'express';
import { Document, Model, ObjectId } from 'mongoose';

declare global {
  namespace Express {
    export interface Request {
      token: {
        id: string;
      };
    }
  }
}
