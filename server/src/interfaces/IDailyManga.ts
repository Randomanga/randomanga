import { ObjectId } from 'mongoose';
import { IManga } from './IManga';
export interface DailyManga {
  _id: ObjectId;
  manga: IManga;
}
