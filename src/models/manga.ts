import { IManga } from '../interfaces/IManga';
import mongoose, { Schema } from 'mongoose';

const Manga = new mongoose.Schema(
    {
        title: String,
        description: String,
        demographic: Array,
        genre: Array,
        tags: Array,
        related:[
            {
                type: Schema.Types.ObjectId,
                ref: 'Manga',
            }
        ],
        banner: {
            type: String,
            default: null
        },
        coverImage: {
            type: Object,
            default: null,
        },
        likesCount: Number
    },
    {
        timestamps: true,
    }
);
export default mongoose.model<IManga & mongoose.Document>('Manga', Manga)