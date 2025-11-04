'use client';

// import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { Logo } from './logo';
// import { NavLinks } from './nav-links';
// import { CartTrigger } from './cart/cart-trigger';

export function Header() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 overflow-hidden bg-black">
      {/* <div className="container-width">
        <div className="flex items-center justify-between border-b border-white/10 py-8">
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="flex h-6 w-6 items-center justify-center text-white md:hidden"
              aria-label="Toggle navigation"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Toggle navigation</span>
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" aria-hidden="true">
                <path d="M0 0H16V1.5H0V0Z" fill="white" />
                <path d="M0 6.75H16V8.25H0V6.75Z" fill="white" />
                <path d="M0 13.5H16V15H0V13.5Z" fill="white" />
              </svg>
            </button>
            <Logo />
          </div>
          <div className="hidden md:block">
            <NavLinks />
          </div>
          <div className="flex items-center gap-6">
            <CartTrigger />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-full bg-white px-6 pb-6 pt-4 shadow-soft md:hidden">
          <NavLinks variant="dark" />
        </div>
      )} */}
      <div className="container-width">
        <div className="grid gap-10 py-14 text-white md:grid-cols-2 md:items-center md:py-28">
          <div className="flex flex-col gap-6">
            <p className="text-sm uppercase tracking-[10px] text-white/50">New product</p>
            <h1 className="text-[36px] font-bold uppercase leading-[58px] tracking-[2px] md:text-[56px]">
              XX99 Mark II
              <br />
              Headphones
            </h1>
            <p className="text-white/75 text-[15px] leading-[25px] font-[400] w-[346px]">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <div>
              <Link href="/product/xx99-mark-two-headphones" >
              <button className="button-primary">
                See product
              </button>
              </Link>
            </div>
          </div>
         <div className="relative flex justify-center ">
            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_70%)] blur-3xl" />
            </div>

            {/* Headphone Image */}
            <Image
              src="/images/bitmap.png"
              alt="XX99 Mark II Headphones"
              width={400}
              height={480}
              className="relative h-80 w-80 object-contain md:h-[420px] md:w-[420px]"
            />
          </div>

        </div>
      </div>
    </header>
  );
}
