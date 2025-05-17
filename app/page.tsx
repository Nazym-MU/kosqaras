import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Improved Image Layout */}
      <div className="relative w-full h-[85vh] mb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 to-dark/70 z-10 flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center tracking-tight">
            KOSQARAS
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-center text-white/90 leading-relaxed">
            Bringing stories to life through art and animation
          </p>
          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/gallery" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md font-medium transition-colors">
              View Gallery
            </Link>
            <Link href="/about" className="bg-white/20 backdrop-blur hover:bg-white/30 text-white px-8 py-3 rounded-md font-medium transition-colors">
              About Me
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
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Explore My Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Category Card - Illustration */}
          <Link href="/illustration" className="group">
            <div className="bg-light dark:bg-dark/20 rounded-lg overflow-hidden transition transform hover:shadow-xl hover:-translate-y-1">
              <div className="h-60 relative">
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors z-10"></div>
                <Image
                  src="/placeholders/illustration-placeholder.png" 
                  alt="Illustration work"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">Illustration</h3>
                <p className="text-foreground/70">Explore my illustration work across various styles and techniques.</p>
              </div>
            </div>
          </Link>
          
          {/* Category Card - Animation */}
          <Link href="/animation" className="group">
            <div className="bg-light dark:bg-dark/20 rounded-lg overflow-hidden transition transform hover:shadow-xl hover:-translate-y-1">
              <div className="h-60 relative">
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors z-10"></div>
                <Image
                  src="/placeholders/animation-placeholder.png" 
                  alt="Animation work"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">Animation</h3>
                <p className="text-foreground/70">Discover animated stories and characters brought to life.</p>
              </div>
            </div>
          </Link>
          
          {/* Category Card - Storyboard */}
          <Link href="/storyboard" className="group">
            <div className="bg-light dark:bg-dark/20 rounded-lg overflow-hidden transition transform hover:shadow-xl hover:-translate-y-1">
              <div className="h-60 relative">
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors z-10"></div>
                <Image
                  src="/placeholders/storyboard-placeholder.TIF" 
                  alt="Storyboard work"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">Storyboard</h3>
                <p className="text-foreground/70">See how visual narratives are planned and developed.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About My Work</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                I am a passionate artist specializing in illustration, animation, and storyboarding. 
                My work combines traditional techniques with modern digital tools to create unique 
                and engaging visual stories.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                With a focus on storytelling and emotional expression, each piece is crafted to 
                convey a narrative that resonates with the viewer. Explore my portfolio to see 
                my latest works and creative journey.
              </p>
              <Link href="/about" className="inline-flex items-center text-accent hover:text-accent/80 font-medium">
                Learn more about me
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