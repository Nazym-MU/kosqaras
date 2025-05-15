import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/database';
import { Artwork } from '@/models/artwork';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    const query = category && category !== 'all' 
      ? { category } 
      : {};

    const artworks = await Artwork.find(query).sort({ createdAt: -1 });
    
    return NextResponse.json(artworks, { status: 200 });
  } catch (error) {
    console.error('Error fetching artworks:', error);
    return NextResponse.json(
      { message: 'Failed to fetch artworks' }, 
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const artworkData = await request.json();
    const newArtwork = new Artwork(artworkData);
    
    await newArtwork.save();
    
    return NextResponse.json(newArtwork, { status: 201 });
  } catch (error) {
    console.error('Error creating artwork:', error);
    return NextResponse.json(
      { message: 'Failed to create artwork' }, 
      { status: 500 }
    );
  }
}