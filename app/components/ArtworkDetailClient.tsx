"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import ArtworkMedia from '@/app/components/ArtworkMedia';

interface DetailViewProps {
  artwork: any;
}

export default function ArtworkDetailClientWrapper({ artwork }: DetailViewProps) {
  const params = useParams();
  const category = params.category as string;
  
  if (!artwork) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-muted mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-3xl font-bold mb-4">Artwork not found</h2>
        <p className="text-foreground/70 mb-8 max-w-md mx-auto">The artwork you're looking for does not exist or has been removed.</p>
        <Link
          href={`/${category || ''}`}
          className="inline-block px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
        >
          Go back to gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link
            href={`/${category}`}
            className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
        </div>

        <div className="bg-light dark:bg-dark/20 rounded-xl overflow-hidden shadow-xl mb-12">
          <div className="p-6 sm:p-8 lg:p-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">{artwork.title}</h1>
            <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full mb-6">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </div>

            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <ArtworkMedia 
                artwork={artwork} 
                category={category} 
              />
            </div>

            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-foreground/90">{artwork.description}</p>
              </div>

              <div className="bg-background p-6 rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-sm uppercase tracking-wider text-foreground/60">Date</h3>
                  <p className="font-medium">{artwork.date}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm uppercase tracking-wider text-foreground/60">Media</h3>
                  <p className="font-medium">{artwork.media}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm uppercase tracking-wider text-foreground/60">Category</h3>
                  <p className="font-medium">{category.charAt(0).toUpperCase() + category.slice(1)}</p>
                </div>
              </div>

              {artwork.additionalInfo && (
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Additional Information</h3>
                  <p className="text-foreground/80">{artwork.additionalInfo}</p>
                </div>
              )}
              
              <div className="flex justify-between items-center border-t border-muted/20 pt-6">
                <Link
                  href={`/${category}`}
                  className="inline-flex items-center px-4 py-2 border border-accent/20 hover:border-accent text-accent rounded transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  View all {category}
                </Link>
                <div className="flex space-x-3">
                  <button className="p-2 text-foreground/60 hover:text-accent rounded-full transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                  <button className="p-2 text-foreground/60 hover:text-accent rounded-full transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
