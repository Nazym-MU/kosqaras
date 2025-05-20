"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface Artwork {
    _id?: string;
    title: string;
    category: string;
    date: string;
    media: string;
    imageUrl: string;
    videoUrl?: string;
}

interface ArtworkFormProps {
    artwork?: Artwork;
    onSubmit: (artwork: Artwork) => void;
    onCancel: () => void;
}

const defaultArtwork: Artwork = {
    title: '',
    category: 'illustration',
    date: '',
    media: '',
    imageUrl: '',
    videoUrl: '',
};

export default function ArtworkForm({ artwork = defaultArtwork, onSubmit, onCancel }: ArtworkFormProps) {
    const [formData, setFormData] = useState<Artwork>(artwork);
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string | null>(artwork.imageUrl || null);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const { t } = useLanguage();
    
    const isEditing = !!artwork._id;

    useEffect(() => {
        setFormData(artwork);
        setPreviewUrl(artwork.imageUrl || null);
    }, [artwork]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        // Handle regular fields
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Clear error when field is edited
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            
            // Create a preview URL
            const objectUrl = URL.createObjectURL(selectedFile);
            setPreviewUrl(objectUrl);
            
            // Clear error if there was one
            if (errors.imageUrl) {
                setErrors(prev => {
                    const newErrors = { ...prev };
                    delete newErrors.imageUrl;
                    return newErrors;
                });
            }
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};
        
        if (!formData.title.trim()) newErrors.title = 'Title is required';
        if (!formData.date) newErrors.date = 'Date is required';
        if (!formData.media.trim()) newErrors.media = 'Media information is required';
        
        // For animations, we need a Google Drive URL
        if (formData.category === 'animation') {
            if (!formData.videoUrl?.trim()) {
                newErrors.videoUrl = 'Google Drive URL is required for animations';
            } else {
                // Validate Google Drive URL format
                const isValidGoogleDriveUrl = /^(https?:\/\/)?(drive\.google\.com\/)(file\/d\/|open\?id=|uc\?id=)([a-zA-Z0-9_-]+)/.test(formData.videoUrl);
                if (!isValidGoogleDriveUrl) {
                    newErrors.videoUrl = 'Please enter a valid Google Drive URL';
                }
            }
        }
        
        // Always require an image for illustrations and storyboards
        // For animations, only require if no video URL is provided
        if (formData.category !== 'animation' && !formData.imageUrl && !file) {
            newErrors.imageUrl = 'Image is required';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        try {
            setIsUploading(true);
            
            // Different handling based on category
            if (formData.category === 'animation') {
                // For animations, we need a YouTube video URL
                if (file) {
                    // If we have a new thumbnail, upload it
                    const fileFormData = new FormData();
                    fileFormData.append('file', file);
                    
                    const uploadResponse = await fetch('/api/upload', {
                        method: 'POST',
                        body: fileFormData,
                    });
                    
                    if (!uploadResponse.ok) {
                        const errorData = await uploadResponse.json();
                        throw new Error(errorData.error || 'Failed to upload thumbnail');
                    }
                    
                    const uploadData = await uploadResponse.json();
                    
                    // Update with new thumbnail
                    const updatedArtwork = {
                        ...formData,
                        imageUrl: uploadData.imageUrl
                    };
                    
                    onSubmit(updatedArtwork);
                } else {
                    // No new thumbnail, use existing or use placeholder for Google Drive videos
                    if (!formData.imageUrl) {
                        // For Google Drive videos, always use the placeholder image
                        formData.imageUrl = '/placeholder-video.svg';
                    }
                    
                    // Submit with existing or placeholder thumbnail
                    onSubmit(formData);
                }
            } else {
                // For illustration and storyboard, we need an image
                if (file) {
                    // Upload the new image
                    const fileFormData = new FormData();
                    fileFormData.append('file', file);
                    
                    const uploadResponse = await fetch('/api/upload', {
                        method: 'POST',
                        body: fileFormData,
                    });
                    
                    if (!uploadResponse.ok) {
                        throw new Error('Failed to upload image');
                    }
                    
                    const uploadData = await uploadResponse.json();
                    
                    // Update with new image URL
                    const updatedArtwork = {
                        ...formData,
                        imageUrl: uploadData.imageUrl
                    };
                    
                    onSubmit(updatedArtwork);
                } else {
                    try {
                        // Submit with API call
                        const submitResponse = await fetch(isEditing ? `/api/artworks/${artwork._id}` : '/api/artworks', {
                            method: isEditing ? 'PUT' : 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(formData),
                        });
                        
                        if (!submitResponse.ok) {
                            const errorData = await submitResponse.json();
                            throw new Error(errorData.error || 
                                (errorData.missingFields 
                                    ? `Missing fields: ${errorData.missingFields.join(', ')}` 
                                    : 'Failed to submit artwork'));
                        }
                        
                        const data = await submitResponse.json();
                        onSubmit(data);
                    } catch (submitError) {
                        console.error('Error submitting artwork:', submitError);
                        setErrors(prev => ({ 
                            ...prev, 
                            submit: submitError instanceof Error 
                                ? submitError.message 
                                : 'Failed to submit artwork. Please try again.' 
                        }));
                        setIsUploading(false);
                    }
                }
            }
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-600">{isEditing ? 'Edit Artwork' : 'Add New Artwork'}</h2>
            
            {errors.submit && (
                <div className="bg-red-50 text-red-500 p-4 rounded mb-6">
                    {errors.submit}
                </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('admin.form.title')} *
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-md text-gray-900 ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
                    </div>
                    
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('admin.form.category')} *
                        </label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                        >
                            <option value="illustration">Illustration</option>
                            <option value="animation">Animation</option>
                            <option value="storyboard">Storyboard</option>
                        </select>
                    </div>
                    
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('admin.form.date')} *
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-md text-gray-900 ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date}</p>}
                    </div>
                    
                    <div>
                        <label htmlFor="media" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('admin.form.media')} *
                        </label>
                        <input
                            type="text"
                            id="media"
                            name="media"
                            value={formData.media}
                            onChange={handleChange}
                            placeholder="e.g., Digital Art, Procreate"
                            className={`w-full px-3 py-2 border rounded-md text-gray-900 ${errors.media ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.media && <p className="mt-1 text-sm text-red-500">{errors.media}</p>}
                    </div>

                    {formData.category === 'animation' && (
                        <div>
                            <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700 mb-1">
                                {t('admin.form.videoUrl')} *
                            </label>
                            <input
                                type="text"
                                id="videoUrl"
                                name="videoUrl"
                                value={formData.videoUrl || ''}
                                onChange={handleChange}
                                placeholder="e.g., https://drive.google.com/file/d/FILEID/view"
                                className={`w-full px-3 py-2 border rounded-md text-gray-900 ${errors.videoUrl ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.videoUrl && <p className="mt-1 text-sm text-red-500">{errors.videoUrl}</p>}
                            <p className="mt-1 text-xs text-gray-500">
                                Required for animations: Add a Google Drive URL for your animation
                            </p>
                        </div>
                    )}
                </div>
                
                <div className="space-y-4">
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                            {isEditing ? t('admin.form.changeImage') : t('admin.form.image') + ' *'}
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*,video/*"
                            onChange={handleFileChange}
                            className={`w-full px-3 py-2 border rounded-md text-gray-900 ${errors.imageUrl ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.imageUrl && <p className="mt-1 text-sm text-red-500">{errors.imageUrl}</p>}
                    </div>
                    
                    {previewUrl && (
                        <div className="mt-2">
                            <p className="text-sm font-medium text-gray-700 mb-1">Preview:</p>
                            <div className="relative h-40 w-full overflow-hidden rounded-md">
                                <Image 
                                    src={previewUrl} 
                                    alt="Preview" 
                                    fill 
                                    style={{ objectFit: 'contain' }} 
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    {t('admin.form.cancel')}
                </button>
                <button
                    type="submit"
                    disabled={isUploading}
                    className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                >
                    {isUploading ? t('admin.form.uploading') : isEditing ? t('admin.form.update') : t('admin.form.add')}
                </button>
            </div>
        </form>
    );
}
