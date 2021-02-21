import { Document, Model } from 'mongoose';
import { IUser } from '../../interfaces/IUser';
import { IManga } from '../../interfaces/IManga';

declare global {
  namespace Express {
    export interface Request {
      currentUser: IUser & Document;
      token: String;
    }
  }

  namespace Models {
    export type UserModel = Model<IUser & Document>;
    export type MangaModel = Model<IManga>;
  }
}
