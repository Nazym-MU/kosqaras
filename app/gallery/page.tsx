"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Artwork } from "../../types/artwork";

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState<Artwork["category"] | "all">("all");
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    const categories: Array<"animation" | "illustration" | "storyboard"> = [
        "animation",
        "illustration",
        "storyboard"
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

    if (isLoading) {
        return (
            <div className="min-h-screen">
                <div className="bg-dark/90 relative py-20 mb-12">
                    <div className="absolute inset-0 opacity-20 bg-pattern"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">Gallery</h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                            Browse through my complete collection of artwork across all categories.
                        </p>
                    </div>
                </div>
                
                <div className="flex justify-center items-center min-h-[300px]">
                    <div className="animate-pulse flex flex-col items-center">
                        <div className="w-12 h-12 border-4 border-accent/60 border-t-accent rounded-full animate-spin mb-4"></div>
                        <p className="text-foreground/70">Loading artworks...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen">
                <div className="bg-dark/90 relative py-20 mb-12">
                    <div className="absolute inset-0 opacity-20 bg-pattern"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">Gallery</h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                            Browse through my complete collection of artwork across all categories.
                        </p>
                    </div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-6 rounded-lg mt-6 text-center">
                        <svg className="h-12 w-12 mx-auto text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <p className="text-lg font-medium">{error}</p>
                        <p className="mt-2">Please try again later.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Hero Banner */}
            <div className="bg-dark/90 relative py-20 mb-12">
                <div className="absolute inset-0 opacity-20 bg-pattern"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">Gallery</h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                        Browse through my complete collection of artwork across all categories.
                    </p>
                </div>
            </div>
            
            {/* Gallery Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 w-full sm:w-auto">
                        <button
                            onClick={() => setSelectedCategory("all")}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                selectedCategory === "all" 
                                    ? "bg-accent text-white" 
                                    : "bg-foreground/10 text-foreground/70 hover:bg-foreground/20"
                            }`}
                        >
                            All
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                                ${selectedCategory === category 
                                    ? "bg-accent text-white" 
                                    : "bg-foreground/10 text-foreground/70 hover:bg-foreground/20"
                                }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <span>View:</span>
                        <button 
                            className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-accent/10 text-accent' : 'hover:bg-accent/10 hover:text-accent'}`}
                            onClick={() => setViewMode('grid')}
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </button>
                        <button 
                            className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-accent/10 text-accent' : 'hover:bg-accent/10 hover:text-accent'}`}
                            onClick={() => setViewMode('list')}
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {filteredArtworks.length > 0 ? (
                    viewMode === 'grid' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredArtworks.map((artwork) => (
                                <Link 
                                    href={`/${artwork.category}/${artwork._id || artwork.id}`} 
                                    key={artwork._id || artwork.id}
                                    className="block group"
                                >
                                    <div className="bg-light dark:bg-dark/20 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1">
                                        <div className="relative aspect-square overflow-hidden">
                                            <Image 
                                                src={artwork.imageUrl} 
                                                alt={artwork.title} 
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-4 left-4 right-4">
                                                    <h3 className="text-white text-lg font-bold truncate">{artwork.title}</h3>
                                                    <p className="text-white/80 text-sm line-clamp-2 mt-1">{artwork.description}</p>
                                                </div>
                                            </div>
                                            <div className="absolute top-3 right-3">
                                                <span className="bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">
                                                    {artwork.category.charAt(0).toUpperCase() + artwork.category.slice(1)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {filteredArtworks.map((artwork) => (
                                <Link 
                                    href={`/${artwork.category}/${artwork._id || artwork.id}`} 
                                    key={artwork._id || artwork.id}
                                    className="block"
                                >
                                    <div className="bg-light dark:bg-dark/20 rounded-lg overflow-hidden hover:shadow-md transition-shadow flex">
                                        <div className="relative w-32 h-32 sm:w-48 sm:h-48 flex-shrink-0">
                                            <Image 
                                                src={artwork.imageUrl} 
                                                alt={artwork.title} 
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 640px) 33vw, 25vw"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col justify-between w-full">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <h3 className="text-lg font-semibold mb-2">{artwork.title}</h3>
                                                    <span className="text-xs bg-foreground/10 text-foreground/70 px-2 py-1 rounded-full">
                                                        {artwork.category.charAt(0).toUpperCase() + artwork.category.slice(1)}
                                                    </span>
                                                </div>
                                                <p className="text-foreground/70 line-clamp-2">{artwork.description}</p>
                                            </div>
                                            <div className="mt-4 flex justify-between items-center">
                                                <span className="text-sm text-foreground/60">{artwork.date}</span>
                                                <span className="text-accent flex items-center text-sm">
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
                    )
                ) : (
                    <div className="bg-light dark:bg-dark/20 p-8 rounded-lg text-center mt-6">
                        <svg className="h-16 w-16 mx-auto text-muted mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <p className="text-xl font-medium mb-2">No artworks found</p>
                        <p className="text-foreground/70">There are currently no artworks in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
