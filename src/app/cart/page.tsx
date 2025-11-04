'use client';

import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { useCart } from '@/src/components/cart/cart-provider';
import { buttonVariants } from '@/src/components/ui/button';
import { formatCurrency } from '@/src/lib/format';
import { QuantityInput } from '@/src/components/ui/quantity-input';


export default function CartPage() {
  const { items, total, clearCart, removeFromCart, setQuantity } = useCart();

  return (
    <div className="container-width my-16">
      <h1 className="section-title">Cart</h1>
      {items.length === 0 ? (
        <div className="mt-10 rounded-lg bg-gray p-10 text-center">
          <p className="text-black/70">Your cart is empty.</p>
          <Link href="/" className={clsx(buttonVariants({ variant: 'primary' }), 'mt-6 inline-flex justify-center')}>
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-10 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.product.slug} className="flex items-center justify-between rounded-lg bg-gray p-6">
                <div className="flex items-center gap-6">
                  <Image
                    src={item.product.categoryImages.mobile}
                    alt={item.product.name}
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-[1px]">{item.product.shortName}</h2>
                    <p className="text-sm text-black/70">{formatCurrency(item.product.price)}</p>
                  </div>
                </div>
                <QuantityInput value={item.quantity} onChange={(value) => setQuantity(item.product.slug, value)} />
                <button className="text-xs uppercase tracking-[1px] text-black/50" onClick={() => removeFromCart(item.product.slug)}>
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="text-sm font-semibold uppercase tracking-[1px] text-black/50 hover:text-black"
              onClick={clearCart}
            >
              Remove all
            </button>
          </div>
          <aside className="rounded-lg bg-black p-8 text-white">
            <h2 className="text-[18px] uppercase tracking-[1.2px]">Summary</h2>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between">
                <dt className="uppercase text-white/60">Total</dt>
                <dd className="font-bold">{formatCurrency(total)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="uppercase text-white/60">Shipping</dt>
                <dd className="font-bold">{formatCurrency(50)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="uppercase text-white/60">Tax (included)</dt>
                <dd className="font-bold">{formatCurrency(total * 0.2)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="uppercase text-white/60">Grand total</dt>
                <dd className="font-bold text-accent">{formatCurrency(total + 50)}</dd>
              </div>
            </dl>
            <div className="mt-8">
              <Link href="/checkout" className={buttonVariants({ variant: 'primary' })}>
                Checkout
              </Link>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
