import { IManga } from '../interfaces/IManga';
import mongoose, { Schema } from 'mongoose';

const Manga = new mongoose.Schema({
  title: String,
  description: String,
  demographic: Array,
  genre: { type: Array, index: true },
  tags: { type: Array, index: true },
  related: [
    {
      type: Schema.Types.ObjectId,
      ref: 'manga',
    },
  ],
  banner: {
    type: String,
    default: null,
  },
  cover_image: {
    type: Object,
    default: null,
  },
  al_id: {
    type: Number,
    required: true,
    index: true,
    unique: true,
  },
  al_url: String,
  likes_count: {
    type: Schema.Types.Number,
    min: 0,
    default: 0,
  },

  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});
export default mongoose.model<IManga & mongoose.Document>('manga', Manga, 'mangas');
