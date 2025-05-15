import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Artwork from '@/app/models/Artwork';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await connectDB();

        const artwork = await Artwork.findById(params.id);
        
        if (!artwork) {
            return NextResponse.json(
                { error: 'Artwork not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(artwork);
    } catch (error) {
        console.error('Error fetching artwork:', error);
        return NextResponse.json(
            { error: 'Failed to fetch artwork' },
            { status: 500 }
        );
    }
} 