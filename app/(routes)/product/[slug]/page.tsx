import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CategoryNavigation } from '@/components/category-navigation';
import { BrandStory } from '@/components/brand-story';
import { getProductBySlug, products } from '@/data/products';
import { ProductHero } from '@/components/product/product-hero';
import { ButtonLink } from '@/components/ui/button';

interface ProductPageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="pb-24">
      <div className="container-width mt-8 space-y-24">
        <ProductHero product={product} />
        <section className="grid gap-16 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="section-title">Features</h2>
            <div className="mt-6 space-y-4 text-black/70">
              {product.features.map((feature) => (
                <p key={feature}>{feature}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[24px] font-bold uppercase tracking-[1px]">In the box</h3>
            <ul className="mt-6 space-y-3">
              {product.includes.map((item) => (
                <li key={item.item} className="flex gap-4 text-black/70">
                  <span className="w-12 font-bold text-accent">{item.quantity}x</span>
                  <span>{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-6">
            {product.gallery.slice(0, 2).map((image) => (
              <Image
                key={image.desktop}
                src={image.desktop}
                alt={product.name}
                width={540}
                height={320}
                className="h-full w-full rounded-lg object-cover"
              />
            ))}
          </div>
          <div>
            <Image
              src={product.gallery[2].desktop}
              alt={product.name}
              width={540}
              height={672}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </section>
        <section>
          <h2 className="section-title text-center">You may also like</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {products
              .filter((item) => item.slug !== product.slug)
              .slice(0, 3)
              .map((item) => (
                <article key={item.slug} className="flex flex-col items-center gap-6 text-center">
                  <Image
                    src={item.categoryImages.desktop}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="h-56 w-full rounded-lg object-cover"
                  />
                  <h3 className="text-[24px] font-bold uppercase tracking-[1px]">{item.shortName}</h3>
                  <ButtonLink href={`/product/${item.slug}`}>See product</ButtonLink>
                </article>
              ))}
          </div>
        </section>
      </div>
      <CategoryNavigation />
      <BrandStory />
    </div>
  );
}
