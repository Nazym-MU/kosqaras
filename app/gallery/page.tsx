"use client";
import { useState } from "react";
import { Artwork } from "../../types/artwork";

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState<Artwork["category"] | "all">("all");
    const [artworks, setArtworks] = useState<Artwork[]>([]);

    const categories: Array<"animation" | "illustration" | "design" | "photography"> = [
        "animation",
        "illustration",
        "design",
        "photography",
    ];

    const filteredArtworks =
        selectedCategory === "all" ? artworks : artworks.filter((artwork) => artwork.category === selectedCategory);

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
                        <div key={artwork.id} className="artwork-item rounded-lg shadow-md overflow-hidden">
                            <img src={artwork.imageUrl} alt={artwork.title} className="w-full h-auto rounded-lg" />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-6">No artworks available for this category.</p>
            )}
        </div>
    );
}
