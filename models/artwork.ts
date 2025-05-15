import mongoose from 'mongoose';

const ArtworkSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    trim: true
  },
  description: { 
    type: String, 
    trim: true 
  },
  category: { 
    type: String, 
    enum: ['animation', 'illustration', '3D model'],
    required: true
  },
  imageUrl: { 
    type: String, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

export const Artwork = mongoose.models.Artwork || mongoose.model('Artwork', ArtworkSchema);