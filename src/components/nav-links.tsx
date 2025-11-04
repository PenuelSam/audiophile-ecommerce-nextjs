'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { href: '/', label: 'Home' },
  { href: '/category/headphones', label: 'Headphones' },
  { href: '/category/speakers', label: 'Speakers' },
  { href: '/category/earphones', label: 'Earphones' }
];

export function NavLinks({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col gap-6 text-center uppercase tracking-[2px] md:flex-row md:items-center md:gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={clsx(
                'text-[13px] tracking-[2px] uppercase leading-[25px] font-bold transition-colors hover:text-accent',
                variant === 'light' ? 'text-white' : 'text-black',
                pathname === link.href && 'text-accent'
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
