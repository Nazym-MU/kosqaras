"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Artwork {
    _id: string;
    title: string;
    imageUrl: string;
    videoUrl?: string;
    category: string;
    description: string;
}

interface ArtworkGridProps {
    category: string;
}

export default function ArtworkGrid({ category }: ArtworkGridProps) {
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchArtworks() {
            try {
                const response = await fetch(`/api/artworks?category=${category}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch artworks');
                }
                const data = await response.json();
                console.log('Fetched artworks:', data);
                setArtworks(data);
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching artworks:', err);
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
                setIsLoading(false);
            }
        }

        fetchArtworks();
    }, [category]);

    if (isLoading) return <p className="text-center mt-6">Loading artworks...</p>;
    if (error) return <p className="text-center text-red-500 mt-6">{error}</p>;
    if (artworks.length === 0) return <p className="text-center mt-6">No artworks found for this category.</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
                <Link href={`/${category}/${artwork._id}`} key={artwork._id}>
                    <div className="group cursor-pointer">
                        <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                            <Image
                                src={artwork.imageUrl}
                                alt={artwork.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {artwork.videoUrl && category === 'animation' && (
                                <>
                                    <div className="absolute bottom-2 right-2 bg-red-600 text-white p-1 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-red-600 rounded-full p-4 transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                        <span className="absolute bottom-4 text-white font-medium bg-black bg-opacity-60 px-4 py-1 rounded-full">Watch Video</span>
                                    </div>
                                </>
                            )}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
                        <p className="text-gray-600 line-clamp-2">{artwork.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
} 