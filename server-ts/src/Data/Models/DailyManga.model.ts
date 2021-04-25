import { IMangaModel } from './Manga.model';
import mongoose, { Schema, Document } from 'mongoose';

export interface IDailyMangaModel {
  _id: string;
  manga: IMangaModel;
  date: Date;
}
const DailyMangaModel: Schema = new Schema({
  manga: {
    type: Schema.Types.ObjectId,
    ref: 'manga',
  },
  date: {
    type: Schema.Types.Date,
    default: Date.now(),
  },
});
export default mongoose.model<IDailyMangaModel & Document>(
  'DailyManga',
  DailyMangaModel
);
