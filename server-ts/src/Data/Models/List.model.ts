import mongoose, { Schema, Document } from 'mongoose';
import { IMangaModel } from './Manga.model';
import { IUserModel } from './User.model';

export interface IListModel {
  _id: string;
  title: string;
  description: string;
  author: IUserModel;
  createdAt: Date;
  likes: Array<IUserModel['_id']>;
  list: Array<IMangaModel['al_id']>;
}
const ListModel: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  list: [
    {
      type: Number,
    },
  ],
});

export default mongoose.model<IListModel & Document>('List', ListModel);
