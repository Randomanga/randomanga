import mongoose, { Schema, Document } from 'mongoose';
import { IMangaModel } from './Manga.model';

export interface IRandomListModel {
  _id: string;
  count: number;
  seed: string;
  generated: Array<IMangaModel['al_id']>;

  includedGenres: Array<string>;
  includedTags: Array<string>;
  includedDemographics: Array<string>;

  excludedGenres: Array<string>;
  excludedTags: Array<string>;
  excludedDemographics: Array<string>;
}
const RandomListModel: Schema = new Schema({
  generated: [{ type: Number }],
  seed: String,
  count: Number,

  includedGenres: [{ type: String }],
  includedTags: [{ type: String }],
  includedDemographics: [{ type: String }],

  excludedGenres: [{ type: String }],
  excludedTags: [{ type: String }],
  excludedDemographics: [{ type: String }],
});

export default mongoose.model<IRandomListModel & Document>(
  'RandomLists',
  RandomListModel
);
