import Link from 'next/link';
import { Logo } from './logo';
import { NavLinks } from './nav-links';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-width">
        <div className="flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between">
          <Logo />
          <NavLinks />
        </div>
        <div className="grid gap-10 pb-14 md:grid-cols-2 md:items-end">
          <p className="text-white/75">
            Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large
            showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products.
          </p>
          <div className="flex gap-6 md:justify-end">
            <Link href="https://www.facebook.com" className="text-white transition hover:text-accent" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 12.073C22 6.532 17.523 2 12 2S2 6.532 2 12.073C2 17.094 5.657 21.128 10.438 21.954V14.89H7.898v-2.816h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.47h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.816h-2.33v7.064C18.343 21.128 22 17.094 22 12.073Z" />
              </svg>
            </Link>
            <Link href="https://www.twitter.com" className="text-white transition hover:text-accent" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9 12.13 12.13 0 0 1-8.8-4.47 4.27 4.27 0 0 0 1.32 5.71 4.27 4.27 0 0 1-1.94-.53v.05a4.29 4.29 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54 12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.35 8.35 0 0 0 22.46 6Z" />
              </svg>
            </Link>
            <Link href="https://www.instagram.com" className="text-white transition hover:text-accent" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7Zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10Zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.505 4.505 0 0 0 12 7.5ZM12 9a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm5.25-.75a.75.75 0 1 0-.75-.75.75.75 0 0 0 .75.75Z" />
              </svg>
            </Link>
          </div>
        </div>
        <p className="pb-10 text-sm text-white/50">Copyright {new Date().getFullYear()} Audiophile. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
