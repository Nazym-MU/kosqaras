"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import ArtworkMedia from '@/app/components/ArtworkMedia';

interface DetailViewProps {
  artwork: any;
}

export default function ArtworkDetailClientWrapper({ artwork }: DetailViewProps) {
  // Use client-side navigation to get params safely
  const params = useParams();
  const category = params.category as string;
  
  if (!artwork) {
    return <div>Artwork not found</div>;
  }

  return (
    <div className="container">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href={`/${category}`}
          className="inline-block mb-8 text-blue-600 hover:text-blue-800"
        >
          ← Back to {category}
        </Link>

        <h1 className="text-4xl font-bold mb-6">{artwork.title}</h1>
        
        {category === 'animation' && artwork.videoUrl && (
          <div className="bg-blue-50 p-4 rounded-md mb-6 text-blue-800 text-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>This animation is embedded from YouTube. Click play to watch.</span>
          </div>
        )}

        <ArtworkMedia 
          artwork={artwork} 
          category={category} 
        />

        <div className="space-y-6">
          <p className="text-lg text-gray-700">{artwork.description}</p>

          <div className="border-t pt-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Date</h3>
                <p className="text-gray-600">{artwork.date}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Media</h3>
                <p className="text-gray-600">{artwork.media}</p>
              </div>
            </div>
          </div>

          {artwork.additionalInfo && (
            <div className="border-t pt-6">
              <h3 className="font-semibold mb-2">Additional Information</h3>
              <p className="text-gray-600">{artwork.additionalInfo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
