import mongoose from "mongoose";

const artworkSchema = new mongoose.Schema({
  title: {  type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  category: { type: String, enum: ['animation', 'illustration', '3D model'], required: true },
  imageUrl: { type: String, required: true },
  cloudinaryId: { type: String},
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Artwork || mongoose.model('Artwork', artworkSchema);