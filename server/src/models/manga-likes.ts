import mongoose, { mongo, Schema } from 'mongoose';
import { IManga } from '../interfaces/IManga';
import { IUser } from '../interfaces/IUser';

const MangaLikesSchema = new Schema(
  {
    manga: {
      type: Schema.Types.ObjectId,
      ref: 'manga',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IManga & IUser & mongoose.Document>('MangaLikes', MangaLikesSchema);

