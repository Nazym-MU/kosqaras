"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <div className="relative w-full h-[85vh] mb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 to-dark/70 z-10 flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center tracking-tight text-accent">
            KOSQARAS
          </h1>
          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/gallery" 
              className="relative overflow-hidden bg-transparent border-2 border-[#9DD9F3] text-[#9DD9F3] px-8 py-3 rounded-md font-medium transition-all duration-300 
              hover:bg-[#9DD9F3]/10 hover:text-white hover:shadow-[0_0_15px_#9DD9F3/60] 
              before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#9DD9F3]/20 before:transition-all before:duration-500 
              hover:before:w-full"
            >
              {t('home.cta.gallery')}
            </Link>
          </div>
        </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.title')}</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                {t('home.about.p1')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}