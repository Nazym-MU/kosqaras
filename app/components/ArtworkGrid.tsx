"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Artwork {
    id: string;
    title: string;
    imageUrl: string;
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
                setArtworks(data);
                setIsLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
                setIsLoading(false);
            }
        }

        fetchArtworks();
    }, [category]);

    if (isLoading) return <p className="text-center mt-6">Loading artworks...</p>;
    if (error) return <p className="text-center text-red-500 mt-6">{error}</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
                <Link href={`/${category}/${artwork.id}`} key={artwork.id}>
                    <div className="group cursor-pointer">
                        <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                            <Image
                                src={artwork.imageUrl}
                                alt={artwork.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
                        <p className="text-gray-600 line-clamp-2">{artwork.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
} 