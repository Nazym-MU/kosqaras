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
    date: string;
    media: string;
    additionalInfo?: string;
}

export default function ArtworkPage({ params }: { params: { category: string; id: string } }) {
    const [artwork, setArtwork] = useState<Artwork | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchArtwork() {
            try {
                const response = await fetch(`/api/artworks/${params.id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch artwork');
                }
                const data = await response.json();
                setArtwork(data);
                setIsLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
                setIsLoading(false);
            }
        }

        fetchArtwork();
    }, [params.id]);

    if (isLoading) return <p className="text-center mt-6">Loading artwork...</p>;
    if (error) return <p className="text-center text-red-500 mt-6">{error}</p>;
    if (!artwork) return <p className="text-center mt-6">Artwork not found</p>;

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link
                href={`/${params.category}`}
                className="inline-block mb-8 text-blue-600 hover:text-blue-800"
            >
                ← Back to {params.category}
            </Link>
            
            <h1 className="text-4xl font-bold mb-6">{artwork.title}</h1>
            
            <div className="relative w-full h-[60vh] mb-8 rounded-lg overflow-hidden">
                <Image
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            <div className="space-y-6">
                <p className="text-lg text-gray-700">{artwork.description}</p>
                
                <div className="border-t pt-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold mb-2">Date</h3>
                            <p className="text-gray-600">{artwork.date}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Media</h3>
                            <p className="text-gray-600">{artwork.media}</p>
                        </div>
                    </div>
                </div>

                {artwork.additionalInfo && (
                    <div className="border-t pt-6">
                        <h3 className="font-semibold mb-2">Additional Information</h3>
                        <p className="text-gray-600">{artwork.additionalInfo}</p>
                    </div>
                )}
            </div>
        </div>
    );
} 