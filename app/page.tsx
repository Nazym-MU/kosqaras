import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative w-full h-[60vh] mb-12">
        <Image
          src="/main-image.jpg"
          alt="Main artwork"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to KOSQARAS</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          I am a passionate artist specializing in illustration, animation, and storyboarding. 
          My work combines traditional techniques with modern digital tools to create unique 
          and engaging visual stories. Explore my portfolio to see my latest works and creative 
          journey.
        </p>
      </div>
    </div>
  );
}