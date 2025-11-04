import Image from 'next/image';
import Link from 'next/link';
import { categories } from '../data/categories';


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
            className="relative flex flex-col items-center justify-around rounded-lg bg-gray h-[204px] text-center"
          >
           <div className="absolute -top-12 flex h-32 w-32 flex-col items-center justify-center">
  {/* Product Image */}
  <Image
    src={category.image}
    alt=""
    width={160}
    height={160}
    className="h-32 w-32 object-contain"
  />

  {/* Strong visible oval shadow */}
 
</div>

 <div className="mt-8 h-8 w-28 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0)_80%)]  opacity-50 absolute top-8" />
                <div className='flex flex-col items-center mt-[6rem]'>
              <h3 className=" text-[15px] font-bold uppercase tracking-[1px]">{category.name}</h3>
            <Link
              href={`/category/${category.slug}`}
              className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[1px] text-black/50 transition hover:text-accent"
            >
              Shop
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" aria-hidden="true">
                <path d="M1.322 11.833 0 10.51 4.49 6 0 1.51 1.322.187 7.136 6 1.322 11.833Z" fill="currentColor" />
              </svg>
            </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
