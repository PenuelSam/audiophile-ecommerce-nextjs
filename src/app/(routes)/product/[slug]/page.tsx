import { BrandStory } from '@/src/components/brand-story';
import { CategoryNavigation } from '@/src/components/category-navigation';
import { ProductHero } from '@/src/components/product/product-hero';
import { ButtonLink } from '@/src/components/ui/button';
import { getProductBySlug, products } from '@/src/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';


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
            <h2 className="text-[32px] leading-[36px] tracking-[1.14px] font-bold uppercase">Features</h2>
            <div className="mt-6 space-y-4 text-black/70">
              {product.features.map((feature) => (
                <p key={feature} className='text-[15px] leading-[25px] font-[400] '>{feature}</p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[32px] leading-[36px] tracking-[1.14px] font-bold uppercase">In the box</h2>
            <ul className="mt-6 space-y-3">
              {product.includes.map((item) => (
                <li key={item.item} className="flex gap-4 text-black/70">
                  <span className="text-[15px] leading-[25px] font-bold text-accent">{item.quantity}x</span>
                  <span className='text-[15px] leading-[25px] font-[400] '>{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="flex gap-8">
          <div className="grid gap-6 ">
            {product.gallery.slice(0, 2).map((image) => (
              <Image
                key={image.desktop}
                src={image.desktop}
                alt={product.name}
                width={445}
                height={280}
                quality={100}
                className="h-[280px] w-[445px] rounded-lg object-cover"
              />
            ))}
          </div>
          <div className=''>
            <Image
              src={product.gallery[2].desktop}
              alt={product.name}
              width={635}
              height={592}
              quality={100}
              className="h-[592px] w-[635px] rounded-lg object-cover"
            />
          </div>
        </section>
        <section>
          <h2 className="section-title text-center">You may also like</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {products
              .filter((item) => item.slug !== product.slug)
              .slice(0, 3)
              .map((item) => (
                <article key={item.slug} className="flex flex-col items-center gap-6 text-center">
                  <div className='w-[350px] h-[318px] rounded-[8px] bg-[#F1F1F1] flex items-center justify-center'>
                    <Image
                    src={item.categoryImages.desktop}
                    alt={item.name}
                    width={item.imageSize?.width || 150}
                    height={item.imageSize?.height || 150}
                    className="object-contain"
                  />
                  </div>
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
