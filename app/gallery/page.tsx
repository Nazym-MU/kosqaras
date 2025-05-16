"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Artwork } from "../../types/artwork";

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState<Artwork["category"] | "all">("all");
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const categories: Array<"animation" | "illustration" | "storyboard" | "3D model"> = [
        "animation",
        "illustration",
        "storyboard",
        "3D model"
    ];

    useEffect(() => {
        async function fetchArtworks() {
            try {
                const response = await fetch(`/api/artworks?category=${selectedCategory !== "all" ? selectedCategory : ""}`);
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
    }, [selectedCategory]);

    const filteredArtworks =
        selectedCategory === "all" ? artworks : artworks.filter((artwork) => artwork.category === selectedCategory);

    if (isLoading) return <p className="text-center mt-6">Loading artworks...</p>;
    if (error) return <p className="text-center text-red-500 mt-6">{error}</p>;


    return (
        <div className="p-6 max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-5 py-2 rounded-full transition duration-300
                        ${selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-200 text-black hover:bg-gray-300"}
                    `}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
                <button
                    onClick={() => setSelectedCategory("all")}
                    className={`px-5 py-2 rounded-full transition duration-300 ${
                        selectedCategory === "all" ? "bg-blue-600 text-white" : "bg-gray-200 text-black hover:bg-gray-300"
                    }`}
                >
                    All
                </button>
            </div>

            {filteredArtworks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredArtworks.map((artwork) => (
                        <div key={artwork._id || artwork.id} className="artwork-item rounded-lg shadow-md overflow-hidden">
                            <div className="relative w-full h-60">
                                <Image 
                                    src={artwork.imageUrl} 
                                    alt={artwork.title} 
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-6">No artworks available for this category.</p>
            )}
        </div>
    );
}
