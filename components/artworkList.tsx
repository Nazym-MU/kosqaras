'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Artwork {
  _id: string;
  title: string;
  imageUrl: string;
  category: string;
}

export default function artworkList() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    async function fetchArtworks() {
      try {
        const response = await fetch('/api/artworks');
        const data = await response.json();
        setArtworks(data);
      } catch (error) {
        console.error('Failed to fetch artworks', error);
      }
    }

    fetchArtworks();
  }, []);

  const handleDeleteArtwork = async (id: string) => {
    try {
      await fetch(`/api/artworks/${id}`, { method: 'DELETE' });
      setArtworks(artworks.filter(artwork => artwork._id !== id));
    } catch (error) {
      console.error('Failed to delete artwork', error);
    }
  };

  return (
    <div className="artwork-list">
      {artworks.map(artwork => (
        <div key={artwork._id} className="artwork-item">
          <Image 
            src={artwork.imageUrl} 
            alt={artwork.title}
            width={200}
            height={200}
          />
          <h3>{artwork.title}</h3>
          <p>{artwork.category}</p>
          <button onClick={() => handleDeleteArtwork(artwork._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}