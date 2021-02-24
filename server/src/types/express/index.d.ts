import { Document, Model } from 'mongoose';
import { IUser } from '../../interfaces/IUser';
import { IManga } from '../../interfaces/IManga';
import { RandomList } from '../../interfaces/RandomList';

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
    export type RandomModel = Mode<RandomList>;
  }
}
