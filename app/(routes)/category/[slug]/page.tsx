import { notFound } from 'next/navigation';
import { getProductsByCategory } from '@/data/products';
import { CategoryNavigation } from '@/components/category-navigation';
import { ProductCard } from '@/components/product-card';
import { BrandStory } from '@/components/brand-story';

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
          <h1 className="text-[32px] font-bold uppercase tracking-[1.2px]">{formatTitle(params.slug)}</h1>
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
