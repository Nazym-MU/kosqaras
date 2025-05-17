import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Banner */}
            <div className="bg-dark/90 relative py-20 mb-12">
                <div className="absolute inset-0 opacity-20 bg-pattern"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">About Me</h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                        Artist, animator, and visual storyteller passionate about bringing ideas to life.
                    </p>
                </div>
            </div>
            
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
                    <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                        <Image 
                            src="/main-image.jpg" 
                            alt="Artist portrait" 
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                            Hello! I&apos;m a passionate artist with a focus on illustration, animation, and storyboarding. 
                            My journey in the creative world has been driven by a deep love for visual storytelling 
                            and a desire to bring ideas to life through art.
                        </p>
                        
                        <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                            I combine traditional artistic techniques with modern digital tools to create unique 
                            and engaging visual stories. Each piece I create is a reflection of my commitment 
                            to quality and attention to detail.
                        </p>
                        
                        <blockquote className="border-l-4 border-accent pl-4 italic my-8 text-foreground/80">
                            Art is not what you see, but what you make others see.
                        </blockquote>
                    </div>
                </div>
                
                {/* Expertise Section */}
                <div className="bg-light dark:bg-dark/20 rounded-2xl p-8 md:p-12 mb-16">
                    <h2 className="text-3xl font-bold mb-8 relative">
                        <span className="relative z-10">Areas of Expertise</span>
                        <span className="absolute bottom-0 left-0 w-16 h-2 bg-accent rounded-full"></span>
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-accent/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Digital Illustration</h3>
                            <p className="text-foreground/70">Creating compelling visual imagery that tells a story or conveys an idea through digital mediums.</p>
                        </div>
                        
                        <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-accent/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">2D Animation</h3>
                            <p className="text-foreground/70">Bringing characters and scenes to life through motion, timing, and expressive movement.</p>
                        </div>
                        
                        <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-accent/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Storyboarding</h3>
                            <p className="text-foreground/70">Developing visual sequences to pre-visualize animations, films, and interactive media.</p>
                        </div>
                        
                        <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-accent/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Character Design</h3>
                            <p className="text-foreground/70">Creating memorable and distinctive characters with personality and visual appeal.</p>
                        </div>
                        
                        <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-accent/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Visual Development</h3>
                            <p className="text-foreground/70">Establishing the visual style, color palettes, and overall aesthetic direction for projects.</p>
                        </div>
                    </div>
                </div>
                
                {/* Contact Section */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Let&apos;s Connect</h2>
                    <p className="text-lg text-foreground/80 mb-8">
                        I&apos;m always interested in new projects and collaborations. Feel free to reach out 
                        through any of the social media links below, or send me an email directly.
                    </p>
                    
                    <div className="flex justify-center space-x-6">
                        <a 
                            href="https://instagram.com/kosqaras" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-foreground/10 hover:bg-accent text-foreground hover:text-white p-3 rounded-full transition-colors"
                            aria-label="Instagram"
                        >
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a 
                            href="https://t.me/kosqaras" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-foreground/10 hover:bg-accent text-foreground hover:text-white p-3 rounded-full transition-colors"
                            aria-label="Telegram"
                        >
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.28-.49.77-.75 3.02-1.31 5.03-2.17 6.03-2.58 2.88-1.18 3.48-1.38 3.86-1.38.08 0 .26.02.38.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                            </svg>
                        </a>
                        <a 
                            href="mailto:ayakoshkz@gmail.com" 
                            className="bg-foreground/10 hover:bg-accent text-foreground hover:text-white p-3 rounded-full transition-colors"
                            aria-label="Email"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
} 