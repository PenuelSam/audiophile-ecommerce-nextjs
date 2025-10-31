import Link, { type LinkProps } from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

const buttonStyles = cva(
  'inline-flex h-12 items-center justify-center rounded-none border border-transparent px-8 text-sm font-bold uppercase tracking-[1px] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-white hover:bg-accentLight',
        secondary: 'bg-transparent border-black text-black hover:bg-black hover:text-white',
        ghost: 'bg-transparent text-black hover:text-accent'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonStyles>;

type ButtonLinkProps = LinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  VariantProps<typeof buttonStyles> & { children: React.ReactNode };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, ...props },
  ref
) {
  return <button ref={ref} className={clsx(buttonStyles({ variant }), className)} {...props} />;
});

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(function ButtonLink(
  { className, variant, ...props },
  ref
) {
  return <Link ref={ref} className={clsx(buttonStyles({ variant }), className)} {...props} />;
});

export { buttonStyles as buttonVariants };
