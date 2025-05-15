"use client";

import { CldUploadButton, CldImage  } from "next-cloudinary";
import { useState } from "react";

export default function ArtworkUpload() {
    const [imageData, setImageData] = useState<{ public_id: string, secure_url: string } | null>(null);

    const handleUpload = (result: any) => {
        if (result.event === 'success') {
            setImageData({ public_id: result.info.public_id, secure_url: result.info.secure_url });
        }
    };

    return (
        <div>
            <CldUploadButton uploadPreset="dufdfrjsb" options={{ multiple: false, maxFiles: 1 }} onSuccess={(result: any) => { console.log('Upload result:', result); }}>
                Upload Image
            </CldUploadButton>

            {imageData && (
                <CldImage width="300" src={imageData.public_id} alt='Uploaded Image' sizes='100vw' />
            )}
        </div>
    )
}