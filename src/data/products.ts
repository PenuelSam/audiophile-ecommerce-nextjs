import { Product } from "../types";


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
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.", 
      "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
      
    ],
    includes: [
      { quantity: 1, item: 'Headphone unit' },
      { quantity: 2, item: 'Replacement earcups' },
      { quantity: 1, item: 'User manual' },
      { quantity: 1, item: '3.5mm audio cable' },
      { quantity: 1, item: 'Travel bag' }
    ],
    hero: {
      desktop: '/images/xx99-markii.png',
      tablet: '/images/xx99-markii.png',
      mobile: '/images/xx99-markii.png',
      background: '/images/pattern-circles.svg'
    },
    categoryImages: {
      desktop: '/images/xx99-markii.png',
      tablet: '/images/xx99-markii.png',
      mobile: '/images/xx99-markii.png'
    },
    imageSize: { width: 175.52, height: 194 },
    imageSizeB: { width: 349.24, height: 386 },
    gallery: [
      {
        desktop: '/images/markii-gal-i.png',
        tablet: '/images/markii.png',
        mobile: '/images/xx99-markii.png'
      },
      {
        desktop: '/images/markii-gal-ii.png',
        tablet: '/images/xx99-markii.png',
        mobile: '/images/xx99-markii.png'
      },
      {
        desktop: '/images/markii-gal-iii.png',
        tablet: '/images/xx99-markii.png',
        mobile: '/images/xx99-markii.png'
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
      'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.',

'From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.',
      
    ],
    includes: [
      { quantity: 1, item: 'Headphone unit' },
      { quantity: 2, item: 'Replacement earcups' },
      { quantity: 1, item: 'User manual' },
      { quantity: 1, item: '3.5mm audio cable' }
    ],
    hero: {
      desktop: '/images/xx99-marki.png',
      tablet: '/images/xx99-marki.png',
      mobile: '/images/xx99-marki.png'
    },
    categoryImages: {
      desktop: '/images/xx99-marki.png',
      tablet: '/images/xx99-marki.png',
      mobile: '/images/xx99-marki.png'
    },
    imageSize: { width: 148.31, height: 193 },
    imageSizeB: { width: 295.84, height: 385 },
    gallery: [
      {
        desktop: '/images/marki-gal-i.png',
        tablet: '/images/xx99-marki.png',
        mobile: '/images/xx99-marki.png'
      },
      {
        desktop: '/images/marki-gal-ii.png',
        tablet: '/images/xx99-marki.png',
        mobile: '/images/xx99-marki.png'
      },
      {
        desktop: '/images/marki-gal-iii.png',
        tablet: '/images/xx99-marki.png',
        mobile: '/images/xx99-marki.png'
      },
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
      'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.',

      'More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
    ],
    includes: [
      { quantity: 1, item: 'Headphone unit' },
      { quantity: 2, item: 'Replacement earcups' },
      { quantity: 1, item: 'User manual' },
      { quantity: 1, item: '3.5mm audio cable' }
    ],
    hero: {
      desktop: '/images/xx59.png',
      tablet: '/images/xx59.png',
      mobile: '/images/xx59.png'
    },
    categoryImages: {
      desktop: '/images/xx59.png',
      tablet: '/images/xx59.png',
      mobile: '/images/xx59.png'
    },
    imageSize: { width: 190.81, height: 199 },
    imageSizeB: { width: 372.98, height: 389 },
    gallery: [
      {
        desktop: '/images/xx-gal-i.png',
        tablet: '/images/xx59.png',
        mobile: '/images/xx59.png'
      },
      {
        desktop: '/images/xx-gal-ii.png',
        tablet: '/images/xx59.png',
        mobile: '/images/xx59.png'
      },
      {
        desktop: '/images/xx-gal-iii.png',
        tablet: '/images/xx59.png',
        mobile: '/images/xx59.png'
      },
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
      'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).',

      'Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
     
    ],
    includes: [
      { quantity: 2, item: 'Speaker unit' },
      { quantity: 2, item: 'Speaker cloth panel' },
      { quantity: 1, item: 'User manual' },
      { quantity: 1, item: '3.5mm audio cable' },
      { quantity: 1, item: '10m optical cable' }
    ],
    hero: {
      desktop: '/images/speakers.png',
      tablet: '/images/speakers.png',
      mobile: '/images/speakers.png',
      background: '/images/pattern-circles.svg'
    },
    categoryImages: {
      desktop: '/images/speakers.png',
      tablet: '/images/speakers.png',
      mobile: '/images/speakers.png'
    },
    imageSize: { width: 143.12, height: 172 },
    imageSizeB: { width: 291.24, height: 350 },
    gallery: [
      {
        desktop: '/images/zx9-gal-i.png',
        tablet: '/images/speakers.png',
        mobile: '/images/speakers.png'
      },
      {
        desktop: '/images/zx9-gal-ii.png',
        tablet: '/images/speakers.png',
        mobile: '/images/speakers.png'
      },
      {
        desktop: '/images/zx9-gal-iii.png',
        tablet: '/images/speakers.png',
        mobile: '/images/speakers.png'
      },
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
      'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. ',

      'The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.',
    ],
    includes: [
      { quantity: 2, item: 'Speaker unit' },
      { quantity: 2, item: 'Speaker cloth panel' },
      { quantity: 1, item: 'User manual' },
      { quantity: 1, item: '3.5mm audio cable' }
    ],
    hero: {
      desktop: '/images/zx72.png',
      tablet: '/images/zx72.png',
      mobile: '/images/zx72.png'
    },
    categoryImages: {
      desktop: '/images/zx72.png',
      tablet: '/images/zx7.png',
      mobile: '/images/zx7.png'
    },
    imageSize: { width: 132.97, height: 191 },
    imageSizeB: { width: 268.02, height: 385 },
    gallery: [
      {
        desktop: '/images/zx7-gal-i.png',
        tablet: '/images/zx7.png',
        mobile: '/images/zx7.png'
      },
      {
        desktop: '/images/zx7-gal-ii.png',
        tablet: '/images/zx7.png',
        mobile: '/images/zx7.png'
      },
      {
        desktop: '/images/zx7-gal-iii.png',
        tablet: '/images/zx7.png',
        mobile: '/images/zx7.png'
      },
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
      'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.',

      'The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
    ],
    includes: [
      { quantity: 2, item: 'Earphone unit' },
      { quantity: 1, item: 'Charging case' },
      { quantity: 2, item: 'Ear tips' },
      { quantity: 1, item: 'USB-C charging cable' },
      { quantity: 1, item: 'User manual' }
    ],
    hero: {
      desktop: '/images/yx1-2.png',
      tablet: '/images/yx1-2.png',
      mobile: '/images/yx1-2.png'
    },
    categoryImages: {
      desktop: '/images/yx1-2.png',
      tablet: '/images/yx1-2.png',
      mobile: '/images/yx1-2.png'
    },
    imageSizeB: { width: 421, height: 381 },
    gallery: [
      {
        desktop: '/images/yx1-gal-i.png',
        tablet: '/images/yx1-gal-i.png',
        mobile: '/images/yx1-gal-i.png'
      },
      {
        desktop: '/images/yx1-gal-ii.png',
        tablet: '/images/yx1-gal-ii.png',
        mobile: '/images/yx1-gal-ii.png'
      },
      {
        desktop: '/images/yx1-gal-iii.png',
        tablet: '/images/yx1-gal-iii.png',
        mobile: '/images/yx1-gal-iii.png'
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
