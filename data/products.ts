import type { Product } from '@/types';

export const products: Product[] = [
  {
    slug: 'xx99-mark-two-headphones',
    name: 'XX99 Mark II Headphones',
    shortName: 'XX99 MK II',
    description:
      'The pinnacle of pristine audio, the XX99 Mark II features a redesigned driver to deliver studio-quality sound with peerless comfort.',
    category: 'headphones',
    newProduct: true,
    price: 2999,
    features: [
      'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who love music.',
      'Experience unmatched clarity and depth thanks to our newly developed 7.1 surround sound circuitry and balanced audio profile.'
    ],
    includes: [
      { quantity: 1, item: 'Headphone unit' },
      { quantity: 2, item: 'Replacement earcups' },
      { quantity: 1, item: 'User manual' },
      { quantity: 1, item: '3.5mm audio cable' },
      { quantity: 1, item: 'Travel bag' }
    ],
    hero: {
      desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880994/audiophile/hero-xx99-mk2-desktop.jpg',
      tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880994/audiophile/hero-xx99-mk2-tablet.jpg',
      mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880995/audiophile/hero-xx99-mk2-mobile.jpg',
      background: '/images/pattern-circles.svg'
    },
    categoryImages: {
      desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880995/audiophile/category-xx99-mk2-desktop.jpg',
      tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880995/audiophile/category-xx99-mk2-tablet.jpg',
      mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880995/audiophile/category-xx99-mk2-mobile.jpg'
    },
    gallery: [
      {
        desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880994/audiophile/gallery-xx99-mk2-1-desktop.jpg',
        tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880994/audiophile/gallery-xx99-mk2-1-tablet.jpg',
        mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880995/audiophile/gallery-xx99-mk2-1-mobile.jpg'
      },
      {
        desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880994/audiophile/gallery-xx99-mk2-2-desktop.jpg',
        tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880994/audiophile/gallery-xx99-mk2-2-tablet.jpg',
        mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880995/audiophile/gallery-xx99-mk2-2-mobile.jpg'
      },
      {
        desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880994/audiophile/gallery-xx99-mk2-3-desktop.jpg',
        tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880994/audiophile/gallery-xx99-mk2-3-tablet.jpg',
        mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880995/audiophile/gallery-xx99-mk2-3-mobile.jpg'
      }
    ]
  },
  {
    slug: 'xx99-mark-one-headphones',
    name: 'XX99 Mark I Headphones',
    shortName: 'XX99 MK I',
    description:
      'As the classic audiophile favorite, the XX99 Mark I provides natural, balanced sound and exceptional build quality for extended listening.',
    category: 'headphones',
    price: 1750,
    features: [
      'The XX99 Mark I combines timeless design with precise drivers delivering warmth, clarity, and low distortion.',
      'Soft memory-foam cushions and a stainless steel frame guarantee everyday comfort along with premium durability.'
    ],
    includes: [
      { quantity: 1, item: 'Headphone unit' },
      { quantity: 2, item: 'Replacement earcups' },
      { quantity: 1, item: 'User manual' },
      { quantity: 1, item: '3.5mm audio cable' }
    ],
    hero: {
      desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880996/audiophile/hero-xx99-mk1-desktop.jpg',
      tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880996/audiophile/hero-xx99-mk1-tablet.jpg',
      mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880996/audiophile/hero-xx99-mk1-mobile.jpg'
    },
    categoryImages: {
      desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880996/audiophile/category-xx99-mk1-desktop.jpg',
      tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880996/audiophile/category-xx99-mk1-tablet.jpg',
      mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880996/audiophile/category-xx99-mk1-mobile.jpg'
    },
    gallery: [
      {
        desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880996/audiophile/gallery-xx99-mk1-1-desktop.jpg',
        tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880996/audiophile/gallery-xx99-mk1-1-tablet.jpg',
        mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880996/audiophile/gallery-xx99-mk1-1-mobile.jpg'
      },
      {
        desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880996/audiophile/gallery-xx99-mk1-2-desktop.jpg',
        tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880996/audiophile/gallery-xx99-mk1-2-tablet.jpg',
        mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880996/audiophile/gallery-xx99-mk1-2-mobile.jpg'
      },
      {
        desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880996/audiophile/gallery-xx99-mk1-3-desktop.jpg',
        tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880996/audiophile/gallery-xx99-mk1-3-tablet.jpg',
        mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880996/audiophile/gallery-xx99-mk1-3-mobile.jpg'
      }
    ]
  },
  {
    slug: 'xx59-headphones',
    name: 'XX59 Headphones',
    shortName: 'XX59',
    description:
      'Enjoy your music like never before with the XX59. Lightweight comfort meets detailed sound and broad compatibility.',
    category: 'headphones',
    price: 899,
    features: [
      'Engineered for versatility, the XX59 performs beautifully with any device while maintaining an exceptionally clear profile.',
      'Ultra-soft ear cushions and adjustable headband ensure fatigue-free listening wherever you go.'
    ],
    includes: [
      { quantity: 1, item: 'Headphone unit' },
      { quantity: 2, item: 'Replacement earcups' },
      { quantity: 1, item: 'User manual' },
      { quantity: 1, item: '3.5mm audio cable' }
    ],
    hero: {
      desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880997/audiophile/hero-xx59-desktop.jpg',
      tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880997/audiophile/hero-xx59-tablet.jpg',
      mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880997/audiophile/hero-xx59-mobile.jpg'
    },
    categoryImages: {
      desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880997/audiophile/category-xx59-desktop.jpg',
      tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880997/audiophile/category-xx59-tablet.jpg',
      mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880997/audiophile/category-xx59-mobile.jpg'
    },
    gallery: [
      {
        desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880997/audiophile/gallery-xx59-1-desktop.jpg',
        tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880997/audiophile/gallery-xx59-1-tablet.jpg',
        mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880997/audiophile/gallery-xx59-1-mobile.jpg'
      },
      {
        desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880997/audiophile/gallery-xx59-2-desktop.jpg',
        tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880997/audiophile/gallery-xx59-2-tablet.jpg',
        mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880997/audiophile/gallery-xx59-2-mobile.jpg'
      },
      {
        desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880997/audiophile/gallery-xx59-3-desktop.jpg',
        tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880997/audiophile/gallery-xx59-3-tablet.jpg',
        mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880997/audiophile/gallery-xx59-3-mobile.jpg'
      }
    ]
  },
  {
    slug: 'zx9-speaker',
    name: 'ZX9 Speaker',
    shortName: 'ZX9',
    description:
      'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound and high-fidelity listening.',
    category: 'speakers',
    newProduct: true,
    price: 4500,
    features: [
      'ZX9 features a 6.5-inch aluminum cone driver with tweeter and waveguide to produce phenomenal room-filling sound.',
      'The modular cabinet reduces resonance for a clean sound signature while blending beautifully into any home aesthetic.'
    ],
    includes: [
      { quantity: 2, item: 'Speaker unit' },
      { quantity: 2, item: 'Speaker cloth panel' },
      { quantity: 1, item: 'User manual' },
      { quantity: 1, item: '3.5mm audio cable' },
      { quantity: 1, item: '10m optical cable' }
    ],
    hero: {
      desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880998/audiophile/hero-zx9-desktop.jpg',
      tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880998/audiophile/hero-zx9-tablet.jpg',
      mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880998/audiophile/hero-zx9-mobile.jpg',
      background: '/images/pattern-circles.svg'
    },
    categoryImages: {
      desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880998/audiophile/category-zx9-desktop.jpg',
      tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880998/audiophile/category-zx9-tablet.jpg',
      mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880998/audiophile/category-zx9-mobile.jpg'
    },
    gallery: [
      {
        desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880998/audiophile/gallery-zx9-1-desktop.jpg',
        tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880998/audiophile/gallery-zx9-1-tablet.jpg',
        mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880998/audiophile/gallery-zx9-1-mobile.jpg'
      },
      {
        desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880998/audiophile/gallery-zx9-2-desktop.jpg',
        tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880998/audiophile/gallery-zx9-2-tablet.jpg',
        mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880998/audiophile/gallery-zx9-2-mobile.jpg'
      },
      {
        desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880998/audiophile/gallery-zx9-3-desktop.jpg',
        tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880998/audiophile/gallery-zx9-3-tablet.jpg',
        mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880998/audiophile/gallery-zx9-3-mobile.jpg'
      }
    ]
  },
  {
    slug: 'zx7-speaker',
    name: 'ZX7 Speaker',
    shortName: 'ZX7',
    description:
      'Stream high-fidelity sound wirelessly with the ZX7. This compact speaker delivers deep bass and crisp highs in any room.',
    category: 'speakers',
    price: 3500,
    features: [
      'The ZX7 uses a carefully tuned cabinet and dual-driver design to produce punchy bass and refined detail at every volume.',
      'Bluetooth 5.0 with aptX ensures effortless pairing and pristine streaming across your devices.'
    ],
    includes: [
      { quantity: 2, item: 'Speaker unit' },
      { quantity: 2, item: 'Speaker cloth panel' },
      { quantity: 1, item: 'User manual' },
      { quantity: 1, item: '3.5mm audio cable' }
    ],
    hero: {
      desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880999/audiophile/hero-zx7-desktop.jpg',
      tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880999/audiophile/hero-zx7-tablet.jpg',
      mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880999/audiophile/hero-zx7-mobile.jpg'
    },
    categoryImages: {
      desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880999/audiophile/category-zx7-desktop.jpg',
      tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880999/audiophile/category-zx7-tablet.jpg',
      mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880999/audiophile/category-zx7-mobile.jpg'
    },
    gallery: [
      {
        desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880999/audiophile/gallery-zx7-1-desktop.jpg',
        tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880999/audiophile/gallery-zx7-1-tablet.jpg',
        mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880999/audiophile/gallery-zx7-1-mobile.jpg'
      },
      {
        desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880999/audiophile/gallery-zx7-2-desktop.jpg',
        tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880999/audiophile/gallery-zx7-2-tablet.jpg',
        mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880999/audiophile/gallery-zx7-2-mobile.jpg'
      },
      {
        desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880999/audiophile/gallery-zx7-3-desktop.jpg',
        tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880999/audiophile/gallery-zx7-3-tablet.jpg',
        mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701880999/audiophile/gallery-zx7-3-mobile.jpg'
      }
    ]
  },
  {
    slug: 'yx1-earphones',
    name: 'YX1 Wireless Earphones',
    shortName: 'YX1',
    description:
      'Tailor-made for the modern audiophile, the YX1 Wireless Earphones feature low-latency audio and a snug, comfortable fit.',
    category: 'earphones',
    price: 599,
    features: [
      'The YX1 supports Bluetooth 5.1 with aptX Adaptive and active noise isolation for focus wherever you are.',
      'Enjoy up to 24 hours of battery life with the included charging case and quick USB-C fast charging.'
    ],
    includes: [
      { quantity: 2, item: 'Earphone unit' },
      { quantity: 1, item: 'Charging case' },
      { quantity: 2, item: 'Ear tips' },
      { quantity: 1, item: 'USB-C charging cable' },
      { quantity: 1, item: 'User manual' }
    ],
    hero: {
      desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701881000/audiophile/hero-yx1-desktop.jpg',
      tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701881000/audiophile/hero-yx1-tablet.jpg',
      mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701881000/audiophile/hero-yx1-mobile.jpg'
    },
    categoryImages: {
      desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701881000/audiophile/category-yx1-desktop.jpg',
      tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701881000/audiophile/category-yx1-tablet.jpg',
      mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701881000/audiophile/category-yx1-mobile.jpg'
    },
    gallery: [
      {
        desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701881000/audiophile/gallery-yx1-1-desktop.jpg',
        tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701881000/audiophile/gallery-yx1-1-tablet.jpg',
        mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701881000/audiophile/gallery-yx1-1-mobile.jpg'
      },
      {
        desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701881000/audiophile/gallery-yx1-2-desktop.jpg',
        tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701881000/audiophile/gallery-yx1-2-tablet.jpg',
        mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701881000/audiophile/gallery-yx1-2-mobile.jpg'
      },
      {
        desktop: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701881000/audiophile/gallery-yx1-3-desktop.jpg',
        tablet: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701881000/audiophile/gallery-yx1-3-tablet.jpg',
        mobile: 'https://res.cloudinary.com/du6szur8h/image/upload/v1701881000/audiophile/gallery-yx1-3-mobile.jpg'
      }
    ]
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}
