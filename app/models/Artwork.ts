import mongoose from 'mongoose';

const artworkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['illustration', 'animation', 'storyboard'],
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    media: {
        type: String,
        required: true,
    },
    additionalInfo: {
        type: String,
    },
}, {
    timestamps: true,
});

export default mongoose.models.Artwork || mongoose.model('Artwork', artworkSchema); 