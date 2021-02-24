import mongoose from 'mongoose';
import { Document } from 'mongoose';
import Schema from 'mongoose';
import { RandomList } from '../interfaces/RandomList';

const RandomList = new mongoose.Schema({
  generated: [
    {
      type: Schema.Types.ObjectId,
      ref: 'manga',
    },
  ],
  includedGenres: [
    {
      type: String,
    },
  ],
  includedTags: [
    {
      type: String,
    },
  ],
  excludedGenres: [
    {
      type: String,
    },
  ],
  excludedTags: [
    {
      type: String,
    },
  ],
  count: {
    type: Number,
    required: true,
  },
  seed: {
    type: String,
    required: true,
  },
});

export default mongoose.model<RandomList>('RandomList', RandomList);
