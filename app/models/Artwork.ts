import mongoose from 'mongoose';

const artworkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: function(this: any) {
            // imageUrl is only required for non-animations or if no videoUrl is provided
            return this.category !== 'animation' || !this.videoUrl;
        },
    },
    videoUrl: {
        type: String,
        required: function(this: any) {
            // videoUrl is required for animations
            return this.category === 'animation';
        },
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