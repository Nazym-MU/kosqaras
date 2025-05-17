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
        <div className="w-full aspect-video rounded-lg overflow-hidden bg-black/5">
          <YouTubeEmbed videoUrl={artwork.videoUrl!} title={artwork.title} />
        </div>
      ) : (
        <div className="relative w-full aspect-[4/3] lg:aspect-[16/9] bg-black/5 rounded-lg overflow-hidden">
          <Image
            src={artwork.imageUrl || '/placeholder-video.svg'}
            alt={artwork.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
          
          <div className="absolute inset-0 shadow-inner"></div>
          
          <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </div>
        </div>
      )}
    </>
  );
}
