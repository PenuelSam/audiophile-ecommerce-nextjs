import { BrandStory } from '@/src/components/brand-story';
import { CategoryNavigation } from '@/src/components/category-navigation';
import { ProductCard } from '@/src/components/product-card';
import { getProductsByCategory } from '@/src/data/products';
import { notFound } from 'next/navigation';


interface CategoryPageProps {
  params: { slug: string };
}

function formatTitle(slug: string) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const products = getProductsByCategory(params.slug);

  if (!products.length) {
    notFound();
  }

  return (
    <div className="pb-24">
      <div className="bg-black py-16 text-center text-white">
        <div className="container-width">
          <h1 className="text-[40px] leading-[44px]  font-bold uppercase tracking-[1.43px]">{formatTitle(params.slug)}</h1>
        </div>
      </div>
      <section className="container-width mt-20 space-y-24">
        {products.map((product, index) => (
          <ProductCard key={product.slug} product={product} reverse={index % 2 === 1} />
        ))}
      </section>
      <CategoryNavigation />
      <BrandStory />
    </div>
  );
}
