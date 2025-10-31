import Link from 'next/link';

export function Logo({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  return (
    <Link
      href="/"
      aria-label="Audiophile home"
      className="text-[24px] font-bold uppercase tracking-[1px]"
    >
      <span className={variant === 'light' ? 'text-white' : 'text-black'}>audiophile</span>
    </Link>
  );
}
