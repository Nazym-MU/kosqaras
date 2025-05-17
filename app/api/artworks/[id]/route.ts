import { NextResponse, NextRequest } from 'next/server';
import connectDB from '@/lib/mongodb';
import Artwork from '@/app/models/Artwork';

interface Params {
  id: string;
}

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

        return NextResponse.json(JSON.parse(JSON.stringify(artwork)));
    } catch (error) {
        console.error('Error fetching artwork:', error);
        return NextResponse.json(
            { error: 'Failed to fetch artwork' },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await request.json();
        
        // Validate required fields before updating the artwork
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

        const artwork = await Artwork.findByIdAndUpdate(
            params.id,
            {
                title: body.title,
                imageUrl: body.imageUrl,
                videoUrl: body.videoUrl || '',
                category: body.category,
                description: body.description,
                date: body.date,
                media: body.media,
                additionalInfo: body.additionalInfo || '',
            },
            { new: true, runValidators: true }
        );
        
        if (!artwork) {
            return NextResponse.json(
                { error: 'Artwork not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(JSON.parse(JSON.stringify(artwork)));
    } catch (error: any) {
        console.error('Error updating artwork:', error);
        
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
            { error: 'Failed to update artwork' },
            { status: 500 }
        );
    }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    await connectDB();

    const artwork = await Artwork.findByIdAndDelete(params.id);
    
    if (!artwork) {
      return NextResponse.json(
        { success: false, message: 'Artwork not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Artwork deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting artwork:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to delete artwork' },
      { status: 500 }
    );
  }
}