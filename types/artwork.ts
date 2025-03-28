export interface Artwork {
    id: string;
    title: string;
    description: string;
    category: 'animation' | 'illustration' | 'design' | 'photography';
    imageUrl: string;
    createdAt: Date;
  }