import mongoose from 'mongoose';

// Define a schema for multilingual content
const multilingualStringSchema = new mongoose.Schema({
    en: {
        type: String,
        required: true,
    },
    kz: String,
    ru: String,
}, { _id: false });

const artworkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: function(this: { category: string, videoUrl?: string }) {
            // imageUrl is only required for non-animations or if no videoUrl is provided
            return this.category !== 'animation' || !this.videoUrl;
        },
    },
    videoUrl: {
        type: String,
        required: function(this: { category: string }) {
            // videoUrl is required for animations
            return this.category === 'animation';
        },
    },
    category: {
        type: String,
        required: true,
        enum: ['illustration', 'animation', 'storyboard'],
    },
    date: {
        type: String,
        required: true,
    },
    media: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

export default mongoose.models.Artwork || mongoose.model('Artwork', artworkSchema); 