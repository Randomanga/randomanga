import { Response } from 'express';
import { session } from 'expr';
import { Document, Model, ObjectId } from 'mongoose';
import { IUser } from '../../interfaces/IUser';
import { IManga } from '../../interfaces/IManga';
import { IRandomList } from '../../interfaces/IRandomList';

declare global {
  namespace Express {
    export interface Request {
      currentUser: IUser & Document;
      token: {
        _id: string;
      };
    }
    export interface SessionData {}
    export interface Response {}
  }

  namespace Models {
    export type UserModel = Model<IUser & Document>;
    export type MangaModel = Model<IManga & Document>;
    export type RandomModel = Model<IRandomList & Document>;
    export type DailyModel = Model<IManga & Document>;
  }
}
import session = require('express-session');

declare module 'express-session' {
  interface SessionData {
    uid: ObjectId;
  }
}
