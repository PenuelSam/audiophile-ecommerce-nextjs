import Image from 'next/image';

export function BrandStory() {
  return (
    <section className="container-width mt-24 grid gap-12 md:grid-cols-2 md:items-center">
      <div className="flex flex-col gap-6">
        <h2 className="section-title">Bringing you the best audio gear</h2>
        <p className="text-black/70">
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers,
          and audio accessories. Visit our large showroom and luxury demonstration rooms for a fully immersive experience.
        </p>
        <p className="text-black/70">
          Our experts are always available to help you find the perfect audio setup. We only stock the finest brands at a fair
          price to ensure you get the best value.
        </p>
      </div>
      <div className="overflow-hidden rounded-lg">
        <Image
          src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=900&q=80"
          alt="Woman listening to music with headphones"
          width={540}
          height={360}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
