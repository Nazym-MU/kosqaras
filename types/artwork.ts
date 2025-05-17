export interface Artwork {
    _id: string;
    id?: string; // For backward compatibility
    title: string;
    description: string;
    category: 'animation' | 'illustration' | 'storyboard' | '3D model';
    imageUrl: string;
    videoUrl?: string; // For YouTube videos (optional)
    date: string;
    media: string;
    additionalInfo?: string;
    createdAt?: Date;
}