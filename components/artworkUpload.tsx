"use client";

import { CldUploadButton, CldImage } from "next-cloudinary";
import { useState } from "react";
import type { CloudinaryUploadWidgetResults } from "next-cloudinary";

export default function ArtworkUpload() {
    const [imageData, setImageData] = useState<{ public_id: string, secure_url: string } | null>(null);

    // Using the CloudinaryUploadWidgetResults type as specified in next-cloudinary
    const handleUploadSuccess = (results: CloudinaryUploadWidgetResults) => {
        if (results.event === 'success' && results.info) {
            // Type assertion for the info property
            const info = results.info as { public_id: string, secure_url: string };
            setImageData({ 
                public_id: info.public_id, 
                secure_url: info.secure_url 
            });
        }
    };

    return (
        <div>
            <CldUploadButton 
                uploadPreset="dufdfrjsb" 
                options={{ multiple: false, maxFiles: 1 }} 
                onSuccess={handleUploadSuccess}
            >
                Upload Image
            </CldUploadButton>

            {imageData && (
                <CldImage 
                    width="300" 
                    src={imageData.public_id} 
                    alt='Uploaded Image' 
                    sizes='100vw' 
                />
            )}
        </div>
    );
}
