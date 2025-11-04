import Image from 'next/image';

import { ButtonLink } from './ui/button';
import { Product } from '../types';

export function ProductCard({ product, reverse }: { product: Product; reverse?: boolean }) {
  return (
    <article className={`grid gap-32 md:grid-cols-2 md:items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
       <div className="relative rounded-lg bg-gray  w-[540px] h-[560px] flex items-center justify-center flex-1">
        <Image
          src={product.categoryImages.desktop}
          alt={product.name}
          width={349}
          height={386}
          className={`h-[386px]  ${reverse ? 'w-[295.84px]' : 'w-[349.24px]'} object-cover relative z-10`}
        />
        <div className="mt-8 h-8 w-36 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0)_80%)]  opacity-60 absolute bottom-[4rem]" />
      </div>
      <div className="flex flex-col gap-6 text-center md:text-left">
        {product.newProduct && (
          <p className="text-[14px] uppercase tracking-[10px] text-accent">New product</p>
        )}
        <h2 className="section-title">{product.name}</h2>
        <p className="text-black/70 text-[15px] leading-[25px] font-[400]">{product.description}</p>
        <div>
          <ButtonLink href={`/product/${product.slug}`}>See product</ButtonLink>
        </div>
      </div>
    </article>
  );
}
