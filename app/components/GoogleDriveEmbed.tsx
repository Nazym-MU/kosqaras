"use client";
import { useEffect, useState } from 'react';

interface GoogleDriveEmbedProps {
  videoUrl: string;
  title: string;
}

export default function GoogleDriveEmbed({ videoUrl, title }: GoogleDriveEmbedProps) {
  const [fileId, setFileId] = useState<string | null>(null);

  useEffect(() => {
    // Extract Google Drive file ID from URL
    const extractGoogleDriveId = (url: string): string | null => {
      // Handle various Google Drive URL formats
      const regexes = [
        // Standard shared link format
        /drive\.google\.com\/file\/d\/([^/]+)/,
        // Open format
        /drive\.google\.com\/open\?id=([^&]+)/,
        // Direct embed format
        /drive\.google\.com\/uc\?id=([^&]+)/
      ];

      for (const regex of regexes) {
        const match = url.match(regex);
        if (match && match[1]) {
          return match[1];
        }
      }
      return null;
    };

    if (videoUrl) {
      const id = extractGoogleDriveId(videoUrl);
      setFileId(id);
    }
  }, [videoUrl]);

  if (!fileId) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div className="text-red-500 font-medium">Invalid Google Drive URL</div>
        <p className="text-gray-600 mt-2">
          Please check the URL and try again. Valid formats include:
          <br />
          drive.google.com/file/d/ID or drive.google.com/open?id=ID
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      <iframe
        src={`https://drive.google.com/file/d/${fileId}/preview`}
        title={title}
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
}
