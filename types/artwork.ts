export interface MultilingualString {
    en: string;
    kz?: string;
    ru?: string;
}

export interface Artwork {
    _id: string;
    id?: string; // For backward compatibility
    title: string;
    category: 'animation' | 'illustration' | 'storyboard' | '3D model';
    imageUrl: string;
    videoUrl?: string; // For YouTube videos (optional)
    date: string;
    media: string;
    createdAt?: Date;
}