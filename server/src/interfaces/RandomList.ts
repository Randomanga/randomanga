import { Document, ObjectId } from 'mongoose';
import { IManga } from './IManga';
export interface RandomList extends Document {
  generated: IManga[];
  _id: ObjectId;
  count: number;
  seed: String;
  includedGenres: [];
  includedTags: [];
  excludedGenres: [];
  excludedTags: [];
}

export interface RandomListCreation {
  includedGenres: string[];
  includedTags: string[];
  excludedGenres: string[];
  excludedTags: string[];
}
