import mongoose, { Schema, Document } from 'mongoose';
import { IUserModel } from './User.model';

export type IMangaModel = Document & {
  _id: string;
  title: string;
  description: string;
  demographic: Array<string>;
  genre: Array<string>;
  tags: Array<string>;
  related: Array<number>;
  cover_image: {
    extraLarge: string | null;
    large: string | null;
    medium: string | null;
  };
  banner: string | null;
  al_id: number;
  al_url: string;
  likes: Array<IUserModel['_id']>;
  isAdult: boolean;
};

const mangaSchema = new Schema<IMangaModel>({
  title: {
    type: String,
    required: true,
  },
  description: String,
  demographic: [
    {
      type: String,
      index: true,
    },
  ],
  genre: [
    {
      type: String,
      index: true,
    },
  ],
  tags: [
    {
      type: String,
      index: true,
    },
  ],
  related: [
    {
      type: Number,
    },
  ],
  cover_image: {  
    extraLarge: String,
    large: String,
    medium: String,
  },
  banner: String,
  al_id: {
    type: Number,
    index: true,
  },
  al_url: String,
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  isAdult: {
    type: Boolean,
  },
});

export default mongoose.model<IMangaModel>('manga', mangaSchema, 'mangas');
