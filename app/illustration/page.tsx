import ArtworkGrid from '../components/ArtworkGrid';

export default function IllustrationPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Banner */}
            <div className="bg-dark/90 relative py-20 mb-12">
                <div className="absolute inset-0 opacity-20 bg-pattern"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">Illustrations</h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                        Explore my collection of illustrations showcasing various styles, techniques, and subjects.
                    </p>
                </div>
            </div>
            
            {/* Gallery Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="mb-10">
                    <h2 className="text-2xl font-bold">Gallery</h2>
                </div>
                <ArtworkGrid category="illustration" />
            </div>
        </div>
    );
}