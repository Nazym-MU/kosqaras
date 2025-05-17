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

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[300px]">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="w-12 h-12 border-4 border-accent/60 border-t-accent rounded-full animate-spin mb-4"></div>
                    <p className="text-foreground/70">Loading artworks...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-6 rounded-lg mt-6 text-center">
                <svg className="h-12 w-12 mx-auto text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="text-lg font-medium">{error}</p>
                <p className="mt-2">Please try again later or contact support.</p>
            </div>
        );
    }

    if (artworks.length === 0) {
        return (
            <div className="bg-light dark:bg-dark/20 p-8 rounded-lg text-center mt-6">
                <svg className="h-16 w-16 mx-auto text-muted mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <p className="text-xl font-medium mb-2">No artworks found</p>
                <p className="text-foreground/70">There are currently no artworks in this category.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
                <Link href={`/${category}/${artwork._id}`} key={artwork._id} className="block group">
                    <div className="bg-light dark:bg-dark/20 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1">
                        <div className="relative w-full h-64 overflow-hidden">
                            <Image
                                src={artwork.imageUrl}
                                alt={artwork.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            {artwork.videoUrl && category === 'animation' && (
                                <>
                                    <div className="absolute bottom-3 right-3 bg-accent text-white p-2 rounded-full z-10 shadow-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="absolute inset-0 bg-dark/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-accent rounded-full p-4 transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                        <span className="absolute bottom-6 text-white font-medium bg-dark/80 px-4 py-2 rounded-full">Watch Video</span>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{artwork.title}</h3>
                            <p className="text-foreground/70 line-clamp-2">{artwork.description}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-xs uppercase tracking-wider inline-block bg-foreground/10 text-foreground/70 px-3 py-1 rounded-full">
                                    {category}
                                </span>
                                <span className="text-accent font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                                    View details
                                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
} 