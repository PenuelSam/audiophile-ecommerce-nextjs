import type { Category } from '@/types';

export const categories: { slug: Category; name: string; image: string }[] = [
  {
    slug: 'headphones',
    name: 'Headphones',
    image: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701881001/audiophile/category-card-headphones.png'
  },
  {
    slug: 'speakers',
    name: 'Speakers',
    image: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701881001/audiophile/category-card-speakers.png'
  },
  {
    slug: 'earphones',
    name: 'Earphones',
    image: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701881001/audiophile/category-card-earphones.png'
  }
];
