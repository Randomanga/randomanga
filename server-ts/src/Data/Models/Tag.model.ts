import mongoose, { Schema, Document } from 'mongoose';

export type ITagModel = Document & {
  _id: string;
  name: string;
  isAdult: boolean;
  category: string;
};

const TagSchema = new Schema<ITagModel>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  isAdult: {
    type: Boolean,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

export default mongoose.model<ITagModel>('Tags', TagSchema);
