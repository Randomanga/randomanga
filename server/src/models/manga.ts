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
                ref: 'manga',
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
        likes_count: Number,
        al_id: {
            type: Number,
            required: true,
        },
        al_url: String
    }
    
);
export default mongoose.model<IManga & mongoose.Document>('manga', Manga,'mangas')