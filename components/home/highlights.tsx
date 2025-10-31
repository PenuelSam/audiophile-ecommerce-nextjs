import Image from 'next/image';
import Link from 'next/link';

export function HomeHighlights() {
  return (
    <section className="container-width mt-20 space-y-8">
      <div className="relative overflow-hidden rounded-lg bg-accent px-8 py-16 text-white md:flex md:items-center md:justify-between md:px-20">
        <div className="absolute -left-24 top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-white/20 md:block" />
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 bg-pattern-circles bg-cover bg-center opacity-20 md:left-24 md:translate-x-0" />
        <div className="relative mx-auto flex max-w-md flex-col gap-6 text-center md:text-left">
          <h2 className="text-[36px] font-bold uppercase leading-tight md:text-[56px]">ZX9 Speaker</h2>
          <p className="text-white/80">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>
          <div>
            <Link href="/product/zx9-speaker" className="button-secondary text-black">
              See product
            </Link>
          </div>
        </div>
        <div className="relative mt-10 flex justify-center md:mt-0 md:justify-end">
          <Image
            src="https://res.cloudinary.com/du6szur8h/image/upload/v1701881002/audiophile/zx9-home.png"
            alt="ZX9 speaker"
            width={400}
            height={400}
            className="h-72 w-72 object-contain md:h-96 md:w-96"
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 rounded-lg bg-gray px-8 py-16 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <Image
            src="https://res.cloudinary.com/du6szur8h/image/upload/v1701881002/audiophile/zx7-home.jpg"
            alt="ZX7 speaker"
            width={540}
            height={320}
            className="h-72 w-full rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-6 text-center md:text-left">
          <h3 className="text-[28px] font-bold uppercase tracking-[1.2px]">ZX7 Speaker</h3>
          <Link href="/product/zx7-speaker" className="button-secondary mx-auto md:mx-0">
            See product
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg">
          <Image
            src="https://res.cloudinary.com/du6szur8h/image/upload/v1701881002/audiophile/yx1-home.jpg"
            alt="YX1 earphones"
            width={540}
            height={320}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray px-8 py-16">
          <h3 className="text-[28px] font-bold uppercase tracking-[1.2px]">YX1 Earphones</h3>
          <Link href="/product/yx1-earphones" className="button-secondary w-fit">
            See product
          </Link>
        </div>
      </div>
    </section>
  );
}
