import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Cloudinary response type definition
interface CloudinaryResponse {
    public_id: string;
    secure_url: string;
    [key: string]: any;
}

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json(
                { error: 'No file uploaded' },
                { status: 400 }
            );
        }

        // Convert file to base64 for Cloudinary upload
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const base64 = buffer.toString('base64');
        const dataURI = `data:${file.type};base64,${base64}`;
        
        // Upload to Cloudinary
        const result: CloudinaryResponse = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload(
                dataURI,
                {
                    resource_type: 'auto',
                    folder: 'ayanat-portfolio'
                },
                (error: Error | undefined, result: CloudinaryResponse | undefined) => {
                    if (error || !result) {
                        console.error('Cloudinary upload error:', error);
                        reject(error || new Error('No result returned from Cloudinary'));
                    } else {
                        resolve(result);
                    }
                }
            );
        });

        // Return the Cloudinary URL
        return NextResponse.json({ 
            imageUrl: result.secure_url,
            public_id: result.public_id,
            message: 'File uploaded successfully to Cloudinary' 
        });
    } catch (error) {
        console.error('Error uploading file to Cloudinary:', error);
        return NextResponse.json(
            { error: 'Failed to upload file to Cloudinary' },
            { status: 500 }
        );
    }
} 