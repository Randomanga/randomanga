import mongoose, { Schema } from 'mongoose';
import { IManga } from '../interfaces/IManga';

const DailyManga = new mongoose.Schema({
  manga: {
    type: Schema.Types.ObjectId,
    ref: 'manga',
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IManga & mongoose.Document>('DailyManga', DailyManga);
