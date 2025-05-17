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

        // Ensure we're returning a serialized version (plain object)
        return NextResponse.json(JSON.parse(JSON.stringify(artworks)));
    } catch (error) {
        console.error('Error fetching artworks:', error);
        return NextResponse.json(
            { error: 'Failed to fetch artworks' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // Validate required fields before creating the artwork
        const requiredFields = ['title', 'category', 'description', 'date', 'media'];
        let missingFields = requiredFields.filter(field => !body[field]);
        
        // For animations, require videoUrl
        if (body.category === 'animation' && !body.videoUrl) {
            missingFields.push('videoUrl');
        }
        
        // For non-animations, require imageUrl
        if (body.category !== 'animation' && !body.imageUrl) {
            missingFields.push('imageUrl');
        }
        
        if (missingFields.length > 0) {
            return NextResponse.json(
                { 
                    error: 'Missing required fields', 
                    missingFields 
                },
                { status: 400 }
            );
        }
        
        await connectDB();

        const artwork = await Artwork.create({
            title: body.title,
            imageUrl: body.imageUrl,
            videoUrl: body.videoUrl || '',
            category: body.category,
            description: body.description,
            date: body.date,
            media: body.media,
            additionalInfo: body.additionalInfo || '',
        });

        return NextResponse.json(JSON.parse(JSON.stringify(artwork)), { status: 201 });
    } catch (error: any) {
        console.error('Error creating artwork:', error);
        
        // Handle validation errors from Mongoose
        if (error.name === 'ValidationError') {
            const validationErrors = Object.keys(error.errors).reduce((errors: Record<string, string>, key) => {
                errors[key] = error.errors[key].message;
                return errors;
            }, {});
            
            return NextResponse.json(
                { error: 'Validation error', validationErrors },
                { status: 400 }
            );
        }
        
        return NextResponse.json(
            { error: 'Failed to create artwork' },
            { status: 500 }
        );
    }
} 