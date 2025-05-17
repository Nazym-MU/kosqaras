"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section with Improved Image Layout */}
      <div className="relative w-full h-[85vh] mb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 to-dark/70 z-10 flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center tracking-tight">
            KOSQARAS
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-center text-white/90 leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/gallery" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md font-medium transition-colors">
              {t('home.cta.gallery')}
            </Link>
            <Link href="/about" className="bg-white/20 backdrop-blur hover:bg-white/30 text-white px-8 py-3 rounded-md font-medium transition-colors">
              {t('home.cta.about')}
            </Link>
          </div>
        </div>
        <Image
          src="/main-image.jpg"
          alt="KOSQARAS Art Portfolio"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">{t('home.explore.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Category Card - Illustration */}
          <Link href="/illustration" className="group">
            <div className="bg-light dark:bg-dark/20 rounded-lg overflow-hidden transition transform hover:shadow-xl hover:-translate-y-1">
              <div className="h-60 relative">
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors z-10"></div>
                <Image
                  src="/placeholders/illustration-placeholder.jpg" 
                  alt="Illustration work"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{t('home.category.illustration')}</h3>
                <p className="text-foreground/70">{t('home.category.illustration.desc')}</p>
              </div>
            </div>
          </Link>
          
          {/* Category Card - Animation */}
          <Link href="/animation" className="group">
            <div className="bg-light dark:bg-dark/20 rounded-lg overflow-hidden transition transform hover:shadow-xl hover:-translate-y-1">
              <div className="h-60 relative">
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors z-10"></div>
                <Image
                  src="/placeholders/animation-placeholder.jpg" 
                  alt="Animation work"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{t('home.category.animation')}</h3>
                <p className="text-foreground/70">{t('home.category.animation.desc')}</p>
              </div>
            </div>
          </Link>
          
          {/* Category Card - Storyboard */}
          <Link href="/storyboard" className="group">
            <div className="bg-light dark:bg-dark/20 rounded-lg overflow-hidden transition transform hover:shadow-xl hover:-translate-y-1">
              <div className="h-60 relative">
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors z-10"></div>
                <Image
                  src="/placeholders/storyboard-placeholder.jpg" 
                  alt="Storyboard work"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{t('home.category.storyboard')}</h3>
                <p className="text-foreground/70">{t('home.category.storyboard.desc')}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      
      {/* About Section */}
      <div className="bg-light dark:bg-dark/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('home.about.title')}</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                {t('home.about.p1')}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                {t('home.about.p2')}
              </p>
              <Link href="/about" className="inline-flex items-center text-accent hover:text-accent/80 font-medium">
                {t('home.about.learnMore')}
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/main-image.jpg"
                  alt="Artist at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}