'use client';

import Image from 'next/image';
import { useState } from 'react';
import { QuantityInput } from '@/components/ui/quantity-input';
import { Button } from '@/components/ui/button';
import { useCart } from '@/components/cart/cart-provider';
import type { Product } from '@/types';
import { formatCurrency } from '@/lib/format';

export function ProductHero({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="grid gap-10 md:grid-cols-2 md:items-center">
      <div className="overflow-hidden rounded-lg bg-gray">
        <Image
          src={product.hero.desktop}
          alt={product.name}
          width={540}
          height={560}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-6">
        {product.newProduct && (
          <p className="text-sm uppercase tracking-[10px] text-accent">New product</p>
        )}
        <h1 className="section-title">{product.name}</h1>
        <p className="text-black/70">{product.description}</p>
        <p className="text-lg font-bold uppercase tracking-[1px]">{formatCurrency(product.price)}</p>
        <div className="flex flex-wrap items-center gap-4">
          <QuantityInput value={quantity} onChange={setQuantity} />
          <Button onClick={() => addToCart(product, quantity)}>Add to cart</Button>
        </div>
      </div>
    </section>
  );
}
