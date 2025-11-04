import Link from 'next/link';

export function Logo({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  return (
    <Link
      href="/"
      aria-label="Audiophile home"
      className="text-[24px] font-bold tracking-[-0.02em]"
    >
      <span className={variant === 'light' ? 'text-white' : 'text-black'}>audiophile</span>
    </Link>
  );
}
