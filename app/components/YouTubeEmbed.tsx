"use client";
import { useEffect, useState } from 'react';

interface YouTubeEmbedProps {
  videoUrl: string;
  title: string;
}

export default function YouTubeEmbed({ videoUrl, title }: YouTubeEmbedProps) {
  const [videoId, setVideoId] = useState<string | null>(null);

  useEffect(() => {
    // Extract YouTube video ID from different types of YouTube URLs
    const extractYouTubeId = (url: string): string | null => {
      // Handle various YouTube URL formats
      const regexes = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^?&/]+)/,
        /youtube\.com\/watch\?(?:[^&]+&)*v=([^&]+)/,
        /youtube\.com\/shorts\/([^?&/]+)/
      ];

      for (const regex of regexes) {
        const match = url.match(regex);
        if (match && match[1]) {
          // Ensure we only get the 11-character video ID
          return match[1].slice(0, 11);
        }
      }
      return null;
    };

    if (videoUrl) {
      const id = extractYouTubeId(videoUrl);
      setVideoId(id);
    }
  }, [videoUrl]);

  if (!videoId) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div className="text-red-500 font-medium">Invalid YouTube URL</div>
        <p className="text-gray-600 mt-2">
          Please check the URL and try again. Valid formats include:
          <br />
          youtube.com/watch?v=ID, youtu.be/ID, or youtube.com/embed/ID
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
}
