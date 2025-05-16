import Image from 'next/image';
import Link from 'next/link';
import connectDB from '@/lib/mongodb';
import Artwork from '@/app/models/Artwork';
import { notFound } from 'next/navigation';
import { isValidObjectId } from 'mongoose';

type Props = {
    params: {
        category: string;
        id: string;
    };
};

export default async function ArtworkPage({ params }: Props) {
    await connectDB();
    
    // Validate that id is a valid MongoDB ObjectId before querying
    if (!params.id || !isValidObjectId(params.id)) {
        console.error('Invalid ObjectId:', params.id);
        return notFound();
    }
    
    let artwork = null;
    
    try {
        artwork = await Artwork.findById(params.id);
        
        if (!artwork) {
            console.log(`Artwork with ID ${params.id} not found`);
            return notFound();
        }
    } catch (err) {
        console.error('Error fetching artwork:', err);
        return notFound();
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link
                href={`/${params.category}`}
                className="inline-block mb-8 text-blue-600 hover:text-blue-800"
            >
                ← Back to {params.category}
            </Link>
            
            <h1 className="text-4xl font-bold mb-6">{artwork.title}</h1>
            
            <div className="relative w-full h-[60vh] mb-8 rounded-lg overflow-hidden">
                <Image
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            <div className="space-y-6">
                <p className="text-lg text-gray-700">{artwork.description}</p>
                
                <div className="border-t pt-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold mb-2">Date</h3>
                            <p className="text-gray-600">{artwork.date}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Media</h3>
                            <p className="text-gray-600">{artwork.media}</p>
                        </div>
                    </div>
                </div>

                {artwork.additionalInfo && (
                    <div className="border-t pt-6">
                        <h3 className="font-semibold mb-2">Additional Information</h3>
                        <p className="text-gray-600">{artwork.additionalInfo}</p>
                    </div>
                )}
            </div>
        </div>
    );
} 