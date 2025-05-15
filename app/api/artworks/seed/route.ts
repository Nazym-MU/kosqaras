import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Artwork from '@/app/models/Artwork';

const testArtworks = [
    {
        title: "Digital Landscape",
        imageUrl: "/artworks/landscape.jpg",
        category: "illustration",
        description: "A vibrant digital landscape created using Procreate",
        date: "2024-03-15",
        media: "Digital Art, Procreate"
    },
    {
        title: "Character Animation",
        imageUrl: "/artworks/animation.jpg",
        category: "animation",
        description: "A short character animation sequence",
        date: "2024-03-10",
        media: "2D Animation, After Effects"
    },
    {
        title: "Storyboard Sequence",
        imageUrl: "/artworks/storyboard.jpg",
        category: "storyboard",
        description: "A storyboard sequence for a short film",
        date: "2024-03-05",
        media: "Digital Drawing, Photoshop"
    }
];

export async function GET() {
    try {
        await connectDB();
        
        // Clear existing artworks
        await Artwork.deleteMany({});
        
        // Insert test artworks
        await Artwork.insertMany(testArtworks);
        
        return NextResponse.json({ message: "Test data seeded successfully" });
    } catch (error) {
        console.error('Error seeding data:', error);
        return NextResponse.json(
            { error: 'Failed to seed data' },
            { status: 500 }
        );
    }
} 