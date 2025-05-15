import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Artwork from '@/app/models/Artwork';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category');

        await connectDB();

        const query = category && category !== 'all' ? { category } : {};
        const artworks = await Artwork.find(query).sort({ createdAt: -1 });

        return NextResponse.json(artworks);
    } catch (error) {
        console.error('Error fetching artworks:', error);
        return NextResponse.json(
            { error: 'Failed to fetch artworks' },
            { status: 500 }
        );
    }
} 