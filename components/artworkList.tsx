'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { MultilingualString } from '@/types/artwork';

interface Artwork {
  _id: string;
  title: string;
  imageUrl: string;
  category: string;
  description: MultilingualString | string;
  date: string;
  media: string;
  additionalInfo?: MultilingualString | string;
}

interface ArtworkListProps {
  onEdit: (artwork: Artwork) => void;
}

export default function ArtworkList({ onEdit }: ArtworkListProps) {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<Record<string, boolean>>({});

  const fetchArtworks = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/artworks${selectedCategory !== 'all' ? `?category=${selectedCategory}` : ''}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch artworks');
      }
      
      const data = await response.json();
      setArtworks(data);
    } catch (error) {
      console.error('Error fetching artworks:', error);
      setError('Failed to load artworks. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [selectedCategory]);

  useEffect(() => {
    fetchArtworks();
  }, [fetchArtworks]);

  const handleDeleteArtwork = async (id: string) => {
    if (!confirm('Are you sure you want to delete this artwork? This action cannot be undone.')) {
      return;
    }
    
    try {
      setIsDeleting(prev => ({ ...prev, [id]: true }));
      
      const response = await fetch(`/api/artworks/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete artwork');
      }
      
      setArtworks(artworks.filter(artwork => artwork._id !== id));
    } catch (error) {
      console.error('Error deleting artwork:', error);
      alert('Failed to delete artwork. Please try again.');
    } finally {
      setIsDeleting(prev => {
        const newDeleting = { ...prev };
        delete newDeleting[id];
        return newDeleting;
      });
    }
  };

  // Helper function to extract text from multilingual content
  const getTextFromMultilingual = (content: string | MultilingualString | undefined): string => {
    // Handle undefined or null content
    if (!content) {
      return '';
    }
    
    // Handle string content
    if (typeof content === 'string') {
      return content;
    }
    
    // Handle multilingual content - safely access the 'en' property
    return content.en || '';
  };

  const filteredArtworks = artworks.filter(artwork => {
    const title = artwork.title.toLowerCase();
    const description = getTextFromMultilingual(artwork.description).toLowerCase();
    const term = searchTerm.toLowerCase();
    
    return title.includes(term) || description.includes(term);
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <p className="text-gray-500">Loading artworks...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-500 p-4 rounded">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="space-y-2 w-full sm:w-auto">
          <h2 className="text-xl font-semibold">Filter Artworks</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded-md text-sm ${selectedCategory === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800'}`}
            >
              All
            </button>
            <button 
              onClick={() => setSelectedCategory('illustration')}
              className={`px-3 py-1 rounded-md text-sm ${selectedCategory === 'illustration' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800'}`}
            >
              Illustration
            </button>
            <button 
              onClick={() => setSelectedCategory('animation')}
              className={`px-3 py-1 rounded-md text-sm ${selectedCategory === 'animation' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800'}`}
            >
              Animation
            </button>
            <button 
              onClick={() => setSelectedCategory('storyboard')}
              className={`px-3 py-1 rounded-md text-sm ${selectedCategory === 'storyboard' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800'}`}
            >
              Storyboard
            </button>
          </div>
        </div>
        
        <div className="w-full sm:w-1/3">
          <input
            type="text"
            placeholder="Search artworks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      
      {filteredArtworks.length === 0 ? (
        <div className="bg-gray-50 p-8 text-center rounded-lg">
          <p className="text-gray-500">No artworks found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map(artwork => (
            <div 
              key={artwork._id} 
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image 
                  src={artwork.imageUrl} 
                  alt={artwork.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-800">{artwork.title}</h3>
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mb-2">
                      {artwork.category.charAt(0).toUpperCase() + artwork.category.slice(1)}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{artwork.date}</span>
                </div>
                
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">{getTextFromMultilingual(artwork.description)}</p>
                
                <div className="flex justify-between mt-2">
                  <button
                    onClick={() => onEdit(artwork)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteArtwork(artwork._id)}
                    disabled={isDeleting[artwork._id]}
                    className="text-red-600 hover:text-red-800 text-sm font-medium disabled:opacity-50"
                  >
                    {isDeleting[artwork._id] ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}