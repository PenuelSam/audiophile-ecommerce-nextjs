import Image from 'next/image';

export function BrandStory() {
  return (
    <section className="container-width mt-24 grid gap-12 md:grid-cols-2 md:items-center">
      <div className="flex flex-col gap-6">
        <h2 className="text-[40px] leading-[44px] tracking-[1.43px] uppercase font-bold">Bringing you the <span className='text-accent'>best</span> audio gear</h2>
        <p className="text-[15px] leading-[25px] font-[400] ">
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
        <p className="text-black/70">
         
        </p>
      </div>
      <div className="overflow-hidden rounded-lg">
        <Image
          src="/images/brand.png"
          alt="Woman listening to music with headphones"
          width={540}
          height={360}
          quality={100}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
