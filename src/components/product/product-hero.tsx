'use client';

import { Product } from '@/src/types';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '../cart/cart-provider';
import { formatCurrency } from '@/src/lib/format';
import { QuantityInput } from '../ui/quantity-input';
import { Button } from '../ui/button';


export function ProductHero({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="grid gap-32 md:grid-cols-2 md:items-center">
      <div className="relative overflow-hidden rounded-lg bg-[#F1F1F1] w-[540px] h-[560px] flex items-center justify-center">
        <Image
          src={product.hero.desktop}
          alt={product.name}
          width={product.imageSizeB?.width || 150}
          height={product.imageSizeB?.height || 190}
          quality={100}
          className="object-contain"
        />
        <div className="mt-8 h-8 w-36 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0)_80%)]  opacity-60 absolute bottom-[4rem]" />
      </div>
      <div className="flex flex-col gap-6">
        {product.newProduct && (
          <p className="text-sm uppercase tracking-[10px] text-accent">New product</p>
        )}
        <h1 className="section-title">{product.name}</h1>
        <p className="text-black/70 text-[15px] leading-[25px] font-[400]">{product.description}</p>
        <p className="text-[18px] font-bold uppercase tracking-[1.29px]">{formatCurrency(product.price)}</p>
        <div className="flex flex-wrap items-center gap-4">
          <QuantityInput value={quantity} onChange={setQuantity} />
          <Button onClick={() => addToCart(product, quantity)}>Add to cart</Button>
        </div>
      </div>
    </section>
  );
}
