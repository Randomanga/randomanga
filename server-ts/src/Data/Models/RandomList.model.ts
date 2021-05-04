import mongoose, { Schema, Document } from 'mongoose';
import { IMangaModel } from './Manga.model';

export interface IRandomListModel {
  _id: string;
  count: number;
  seed: string;
  generated: Array<IMangaModel['al_id']>;
  includeFilters: {
    genre: Array<string>;
    tags: Array<string>;
    demographic: Array<string>;
  };
  excludeFilters: {
    genre: Array<string>;
    tags: Array<string>;
    demographic: Array<string>;
  };
}
const RandomListModel: Schema = new Schema({
  generated: [{ type: Number }],
  seed: { type: String, required: true },
  count: Number,

  includeFilters: {
    genres: [{ type: String }],
    tags: [{ type: String }],
    demographics: [{ type: String }],
  },
  excludeFilters: {
    genres: [{ type: String }],
    tags: [{ type: String }],
    demographics: [{ type: String }],
  },
});

export default mongoose.model<IRandomListModel & Document>(
  'RandomList',
  RandomListModel
);
