export interface Artwork {
    id: string;
    title: string;
    description: string;
    category: 'animation' | 'illustration' | '3D model';
    imageUrl: string;
    createdAt: Date;
}