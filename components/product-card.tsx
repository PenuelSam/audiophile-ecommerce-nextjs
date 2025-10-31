import Image from 'next/image';
import type { Product } from '@/types';
import { ButtonLink } from './ui/button';

export function ProductCard({ product, reverse }: { product: Product; reverse?: boolean }) {
  return (
    <article className={`grid gap-10 md:grid-cols-2 md:items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
      <div className="overflow-hidden rounded-lg bg-gray">
        <Image
          src={product.categoryImages.desktop}
          alt={product.name}
          width={540}
          height={560}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-6 text-center md:text-left">
        {product.newProduct && (
          <p className="text-sm uppercase tracking-[10px] text-accent">New product</p>
        )}
        <h2 className="section-title">{product.name}</h2>
        <p className="text-black/70">{product.description}</p>
        <div>
          <ButtonLink href={`/product/${product.slug}`}>See product</ButtonLink>
        </div>
      </div>
    </article>
  );
}
