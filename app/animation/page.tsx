import ArtworkGrid from '../components/ArtworkGrid';
import AddSampleAnimation from '../components/AddSampleAnimation';

export default function AnimationPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Animations</h1>
            <AddSampleAnimation />
            <div className="mt-8">
                <ArtworkGrid category="animation" />
            </div>
        </div>
    );
} 