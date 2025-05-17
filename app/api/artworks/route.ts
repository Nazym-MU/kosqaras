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
        const requiredFields = ['title', 'category', 'date', 'media'];
        const missingFields = requiredFields.filter(field => !body[field]);
        
        // For animations, require videoUrl
        if (body.category === 'animation' && !body.videoUrl) {
            missingFields.push('videoUrl');
        }
        
        // For non-animations, require imageUrl
        if (body.category !== 'animation' && !body.imageUrl) {
            missingFields.push('imageUrl');
        }
        
        // Check if description exists and has English text
        if (!body.description || (typeof body.description === 'object' && !body.description.en)) {
            missingFields.push('description');
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

        // Format description to ensure it's a multilingual object
        let description = body.description;
        if (typeof description === 'string') {
            description = { en: description, kz: '', ru: '' };
        }
        
        // Format additionalInfo to ensure it's a multilingual object if it exists
        let additionalInfo = body.additionalInfo || { en: '', kz: '', ru: '' };
        if (typeof additionalInfo === 'string') {
            additionalInfo = { en: additionalInfo, kz: '', ru: '' };
        }

        const artwork = await Artwork.create({
            title: body.title,
            imageUrl: body.imageUrl,
            videoUrl: body.videoUrl || '',
            category: body.category,
            description: description,
            date: body.date,
            media: body.media,
            additionalInfo: additionalInfo,
        });

        return NextResponse.json(JSON.parse(JSON.stringify(artwork)), { status: 201 });
    } catch (error: unknown) {
        console.error('Error creating artwork:', error);
        
        // Handle validation errors from Mongoose
        if (error && typeof error === 'object' && 'name' in error && error.name === 'ValidationError') {
            const validationErrors = Object.keys((error as any).errors).reduce((errors: Record<string, string>, key) => {
                errors[key] = (error as any).errors[key].message;
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