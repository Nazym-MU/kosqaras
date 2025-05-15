import ArtworkGrid from '../components/ArtworkGrid';

export default function IllustrationPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Illustrations</h1>
            <ArtworkGrid category="illustration" />
        </div>
    );
} 