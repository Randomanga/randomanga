let mongoose = require('mongoose');
const { Schema } = mongoose;

const MangaSchema = new Schema({
    al_id: {
        type: Number,
        required: true,
    },
    title: String,
    description: String,
    demographic: Array,
    genre: Array,
    tags: Array,
    related: [
        {
            type: Schema.ObjectId,
            ref: 'manga',
        },
    ],
    banner: String,
    coverImage: Object,
    likes_count: Number,
});

const Manga = mongoose.model('manga', MangaSchema);

module.exports = Manga;