"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddSampleAnimation() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleAddSample = async () => {
    setIsLoading(true);
    try {
      const sampleAnimation = {
        title: "Sample Animation",
        description: "This is a sample animation to test YouTube integration",
        category: "animation",
        date: "2025-05-15",
        media: "Digital Animation",
        imageUrl: "/placeholder-video.svg", // Use our placeholder
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Sample YouTube video
        additionalInfo: "Created for testing YouTube integration"
      };

      const response = await fetch('/api/artworks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sampleAnimation),
      });

      if (!response.ok) {
        throw new Error('Failed to add sample animation');
      }

      // Refresh the page to show the new sample
      router.refresh();
      alert('Sample animation added successfully!');
    } catch (error) {
      console.error('Error adding sample animation:', error);
      alert('Failed to add sample animation');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-6 text-center">
      <button
        onClick={handleAddSample}
        disabled={isLoading}
        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors disabled:opacity-50"
      >
        {isLoading ? 'Adding...' : 'Add Sample Animation with YouTube Video'}
      </button>
      <p className="text-sm text-gray-500 mt-2">Use this button to create a test animation with YouTube video</p>
    </div>
  );
}
