"use client";

import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import the YouTubeEmbed component only on the client-side
const YouTubeEmbed = dynamic(() => import('@/app/components/YouTubeEmbed'), { ssr: false });

interface ArtworkMediaProps {
  artwork: {
    title: string;
    imageUrl: string;
    videoUrl?: string;
  };
  category: string;
}

export default function ArtworkMedia({ artwork, category }: ArtworkMediaProps) {
  // For animations, prioritize video if available
  const hasVideo = category === 'animation' && artwork.videoUrl;

  return (
    <>
      {hasVideo ? (
        <div className="w-full mb-8">
          <YouTubeEmbed videoUrl={artwork.videoUrl!} title={artwork.title} />
        </div>
      ) : (
        <div className="relative w-full h-[60vh] mb-8 rounded-lg overflow-hidden">
          <Image
            src={artwork.imageUrl}
            alt={artwork.title}
            fill
            className="object-contain"
            priority
          />
        </div>
      )}
    </>
  );
}
