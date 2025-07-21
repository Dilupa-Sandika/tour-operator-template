// src/types/index.ts

// src/types/index.ts

export interface Tour {
  _id: string;
  title: string;
  slug: string; // Changed from { current: string } to just string for simplicity
  price: number;
  duration: string;
  location: string;
  category: string;
  difficulty?: string;
  description: string;
  images: any[];
  featured: boolean;
  destination?: {
    name: string;
    slug: string;
  };
  // This field is added by our queries, so it needs to be in the type
  imageUrl?: string; 
  rating?: number;
  included?: string[];
  notIncluded?: string[];
}

export interface Destination {
  _id: string;
  name: string;
  slug: string;
  image?: any;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage: any;
  publishedAt: string;
  author: {
    name: string;
    image: any;
  };
  body: any[];
}





/*
export interface Tour {
  id: string;
  title: string;
  slug: string;
  location: string;
  duration: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  groupSize: string;
  images: string[];
  highlights: string[];
  category: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  featured: boolean;
}*/