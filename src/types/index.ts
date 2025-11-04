export type Category = 'headphones' | 'speakers' | 'earphones';

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  category: Category;
  newProduct?: boolean;
  price: number;
  features: string[];
  includes: { quantity: number; item: string }[];
  gallery: { desktop: string; tablet: string; mobile: string }[];
  hero: {
    desktop: string;
    tablet: string;
    mobile: string;
    background?: string;
  };
  categoryImages: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  imageSize?: { width: number; height: number };
  imageSizeB?: { width: number; height: number };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  zip: string;
}

export interface OrderPayload {
  items: CartItem[];
  totals: {
    subtotal: number;
    shipping: number;
    tax: number;
    grandTotal: number;
  };
  customer: CustomerDetails;
}

export interface OrderConfirmation extends OrderPayload {
  id: string;
  createdAt: string;
}
