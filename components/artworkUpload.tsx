"use client";

import { CldUploadButton, CldImage  } from "next-cloudinary";
import { useState } from "react";

interface UploadResult {
    event: string;
    info: {
        public_id: string;
        secure_url: string;
    };
}

export default function ArtworkUpload() {
    const [imageData, setImageData] = useState<{ public_id: string, secure_url: string } | null>(null);

    const handleUploadSuccess = (result: UploadResult) => {
        if (result.event === 'success') {
            setImageData({ public_id: result.info.public_id, secure_url: result.info.secure_url });
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
                <CldImage width="300" src={imageData.public_id} alt='Uploaded Image' sizes='100vw' />
            )}
        </div>
    )
}