import { Document, Model } from 'mongoose';
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
  }

  namespace Models {
    export type UserModel = Model<IUser & Document>;
    export type MangaModel = Model<IManga>;
    export type RandomModel = Model<IRandomList>;
    export type DailyModel = Model<IRandomList>;
  }
}
