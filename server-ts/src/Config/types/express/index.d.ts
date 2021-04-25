import { IUserModel } from '../../../Data/Models/User.model';
import { Response, Request } from 'express';
import { Document, Model, ObjectId } from 'mongoose';

declare global {
  namespace Express {
    export interface Request {
      user: IUserModel;
    }
  }
}
import session = require('express-session');

declare module 'express-session' {
  interface SessionData {
    uid: string;
  }
}
