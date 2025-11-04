import Image from 'next/image';
import Link from 'next/link';

export function HomeHighlights() {
  return (
    <section className="container-width mt-20 space-y-8">
     <div className="relative overflow-hidden rounded-lg bg-accent px-8 h-[560px] text-white md:flex md:items-center md:justify-between md:px-20">
  {/* Circular outline rings shifted to the left */}
  <div className="">
   
    <div className="absolute inset-0 h-[900px] w-[900px] -translate-x-[100px] -translate-y-[90px] rounded-full border border-white/40 opacity-90" />
     <div className="h-[600px] w-[600px] absolute -bottom-[15rem] left-[2rem] rounded-full border border-white/40 opacity-90" />
    <div className="h-[500px] w-[500px] absolute -bottom-32 left-[2rem] rounded-full border border-white/40 opacity-90" />

  </div>

  {/* Speaker image anchored to bottom */}
  
    {/* <div className=" absolute -bottom-10 w-fit">
      <Image
        src="/images/speakers.png"
        alt="ZX9 speaker"
        width={400}
        height={400}
        className=" z-10 object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.35)] md:h-[480px] md:w-[480px]"
      />
    </div> */}
 

  {/* Text section */}
  <div className="absolute right-10 z-10 mx-auto mt-10 flex max-w-md flex-col gap-6 text-center md:mt-0 md:mx-0 md:text-left md:flex-1">
    <h2 className="text-[36px] font-bold uppercase leading-tight md:text-[56px]">ZX9 Speaker</h2>
    <p className="text-white/80">
      Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
    </p>
    <div>
      <Link
        href="/product/zx9-speaker"
        className="inline-flex h-12 items-center justify-center bg-black px-8 text-sm font-bold uppercase tracking-[1px] text-white transition hover:bg-gray-800"
      >
        See product
      </Link>
    </div>
  </div>
</div>



      <div className=" relative flex flex-col gap-8 rounded-lg w-full    md:flex-row md:items-center md:justify-between">

        
          <Image
            src="/images/zxx7.png"
            alt="ZX7 speaker"
            width={540}
            height={320}
            quality={100}
            className="h-full w-full rounded-lg object-cover"
          />
        
        
        <div className=" absolute left-32 flex flex-1 flex-col gap-6 text-center md:text-left">
          <h3 className="text-[28px] font-bold uppercase tracking-[1.2px]">ZX7 Speaker</h3>
          <Link href="/product/zx7-speaker" className="button-secondary mx-auto md:mx-0">
            See product
          </Link>
        </div>
        
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/images/yx1.png"
            alt="YX1 earphones"
            width={540}
            height={320}
            quality={100}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center  rounded-lg bg-gray px-8 py-16">
          <div className='flex flex-col gap-6'>
            <h3 className="text-[28px] font-bold uppercase tracking-[2px] leading-[100%]">YX1 Earphones</h3>
          <Link href="/product/yx1-earphones" className="button-secondary w-fit text-[13px] tracking-[1px] leading-[100%] font-bold">
            See product
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
