export interface MultilingualString {
    en: string;
    kz?: string;
    ru?: string;
}

export interface Artwork {
    _id: string;
    id?: string; // For backward compatibility
    title: string;
    description: MultilingualString | string; // Support both formats for backwards compatibility
    category: 'animation' | 'illustration' | 'storyboard' | '3D model';
    imageUrl: string;
    videoUrl?: string; // For YouTube videos (optional)
    date: string;
    media: string;
    additionalInfo?: MultilingualString | string; // Support both formats for backwards compatibility
    createdAt?: Date;
}