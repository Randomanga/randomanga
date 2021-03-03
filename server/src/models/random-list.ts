import mongoose from 'mongoose';
import Schema from 'mongoose';
import { IRandomList } from '../interfaces/IRandomList';

const RandomList = new mongoose.Schema({
  generated: [
    {
      type: Number,
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

export default mongoose.model<IRandomList & mongoose.Document>('RandomList', RandomList);
