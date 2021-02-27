import { Document, ObjectId } from 'mongoose';
import { IManga } from './IManga';
export interface IRandomList {
  generated: IManga[];
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
