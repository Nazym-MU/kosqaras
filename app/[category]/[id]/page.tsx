import { notFound } from 'next/navigation';
import { isValidObjectId } from 'mongoose';
import connectDB from '@/lib/mongodb';
import Artwork from '@/app/models/Artwork';
import ArtworkDetailClient from '@/app/components/ArtworkDetailClient';

interface PageProps {
  params: {
    category: string;
    id: string;
  };
}

// Function to get artwork by id without directly accessing params in the component
async function getArtworkById(artworkId: string) {
  if (!isValidObjectId(artworkId)) {
    console.error('Invalid ObjectId:', artworkId);
    return null;
  }
  
  try {
    await connectDB();
    const artwork = await Artwork.findById(artworkId);
    
    if (!artwork) {
      console.log(`Artwork with ID ${artworkId} not found`);
      return null;
    }
    
    // Make sure to convert to a plain object
    return JSON.parse(JSON.stringify(artwork));
  } catch (error) {
    console.error('Error fetching artwork:', error);
    return null;
  }
}

// Server Component that handles data fetching
export default async function ArtworkPage({ params }: PageProps) {
  // Access the params as an awaited Promise if necessary in future Next.js versions
  const resolvedParams = await Promise.resolve(params);
  const id = typeof resolvedParams.id === 'string' ? resolvedParams.id : '';
  
  // Fetch artwork data
  const artwork = await getArtworkById(id);
  
  if (!artwork) {
    return notFound();
  }
  
  // Render client component with artwork data
  return <ArtworkDetailClient artwork={artwork} />;
}