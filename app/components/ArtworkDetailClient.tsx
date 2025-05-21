"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import ArtworkMedia from '@/app/components/ArtworkMedia';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Artwork } from '@/types/artwork';

interface DetailViewProps {
  artwork: Artwork;
}

export default function ArtworkDetailClientWrapper({ artwork }: DetailViewProps) {
  const params = useParams();
  const category = params.category as string;
  const { t } = useLanguage();
  
  if (!artwork) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-muted mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-3xl font-bold mb-4">{t('artwork.notFound')}</h2>
        <p className="text-foreground/70 mb-8 max-w-md mx-auto">{t('artwork.notFoundDesc')}</p>
        <Link
          href={`/${category || ''}`}
          className="inline-block px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
        >
          {t('artwork.goBack')}
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
            {t('artwork.backTo')}
          </Link>
        </div>

        <div className="bg-light dark:bg-dark/20 rounded-xl overflow-hidden shadow-xl mb-12">
          <div className="p-6 sm:p-8 lg:p-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-7 tracking-tight">{artwork.title}</h1>

            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <ArtworkMedia 
                artwork={artwork} 
                category={category} 
              />
            </div>

            <div className="space-y-8">
              <div className="bg-background p-6 rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-sm uppercase tracking-wider text-foreground/60">{t('artwork.date')}</h3>
                  <p className="font-medium">{artwork.date}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm uppercase tracking-wider text-foreground/60">{t('artwork.media')}</h3>
                  <p className="font-medium">{artwork.media}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm uppercase tracking-wider text-foreground/60">{t('artwork.category')}</h3>
                  <p className="font-medium">{category.charAt(0).toUpperCase() + category.slice(1)}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center border-t border-muted/20 pt-6">
                <Link
                  href={`/${category}`}
                  className="inline-flex items-center px-4 py-2 border border-accent/20 hover:border-accent text-accent rounded transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  {t('artwork.viewAll')} 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
