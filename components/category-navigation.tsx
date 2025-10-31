import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/data/categories';

export function CategoryNavigation() {
  return (
    <section aria-labelledby="categories" className="container-width mt-24">
      <h2 id="categories" className="sr-only">
        Shop by category
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <article
            key={category.slug}
            className="relative flex flex-col items-center rounded-lg bg-gray pb-6 pt-16 text-center"
          >
            <div className="absolute -top-12 flex h-32 w-32 items-center justify-center">
              <Image
                src={category.image}
                alt=""
                width={160}
                height={160}
                className="h-32 w-32 object-contain"
              />
            </div>
            <h3 className="mt-20 text-[15px] font-bold uppercase tracking-[1px]">{category.name}</h3>
            <Link
              href={`/category/${category.slug}`}
              className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[1px] text-black/50 transition hover:text-accent"
            >
              Shop
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" aria-hidden="true">
                <path d="M1.322 11.833 0 10.51 4.49 6 0 1.51 1.322.187 7.136 6 1.322 11.833Z" fill="currentColor" />
              </svg>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
