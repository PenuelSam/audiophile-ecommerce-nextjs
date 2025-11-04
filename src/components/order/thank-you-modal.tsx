'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatCurrency } from '@/src/lib/format';

type Item = {
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

type Totals = {
  subtotal: number;
  shipping: number;
  tax: number;
  grandTotal: number;
};

export function ThankYouModal({
  open,
  onClose,
  orderId,
  customerEmail,
  items,
  totals,
}: {
  open: boolean;
  onClose: () => void;
  orderId: string;
  customerEmail: string;
  items: Item[];
  totals: Totals;
}) {
  // lock scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const first = items[0];
  const remainingCount = Math.max(items.length - 1, 0);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4">
      {/* card */}
      <div className="relative w-full max-w-[540px] rounded-lg bg-white p-8 md:p-10 shadow-xl">
        {/* orange check */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white">
          {/* simple check icon */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M8.00033 13.0002L4.50033 9.50016L3.33366 10.6668L8.00033 15.3335L17.0003 6.3335L15.8337 5.16683L8.00033 13.0002Z"
              fill="white"
            />
          </svg>
        </div>

        {/* text */}
        <h2 className="text-[28px] font-bold uppercase leading-tight tracking-[1.2px] text-black">
          Thank you
          <br /> for your order
        </h2>
        <p className="mt-3 text-sm text-black/60">
          You will receive an email confirmation shortly at <span className="font-semibold">{customerEmail}</span>.
        </p>

        {/* items + total */}
        <div className="mt-6 grid gap-0 rounded-lg md:grid-cols-[1.2fr_0.8fr] md:overflow-hidden">
          {/* items box */}
          <div className="rounded-t-lg bg-[#F1F1F1] p-4 md:rounded-l-lg md:rounded-tr-none">
            {first ? (
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white">
                    {first.image ? (
                      <Image
                        src={first.image}
                        alt={first.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain"
                      />
                    ) : (
                      <span className="text-xs text-black/40">IMG</span>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[1px] text-black">{first.name}</p>
                    <p className="text-[13px] text-black/50">${first.price.toLocaleString()}</p>
                  </div>
                </div>
                <p className="text-sm font-bold text-black/40">x{first.quantity}</p>
              </div>
            ) : (
              <p className="text-sm text-black/50">No items</p>
            )}

            {remainingCount > 0 && (
              <div className="mt-4 border-t border-black/5 pt-3 text-center text-[13px] font-semibold text-black/40">
                and {remainingCount} other item{remainingCount > 1 ? 's' : ''}.
              </div>
            )}
          </div>

          {/* total box */}
          <div className="rounded-b-lg bg-black p-4 text-white md:rounded-r-lg md:rounded-bl-none flex flex-col justify-end">
            <p className="text-xs uppercase tracking-[1px] text-white/60">Grand total</p>
            <p className="mt-2 text-2xl font-bold">{formatCurrency(totals.grandTotal)}</p>
          </div>
        </div>

        {/* actions */}
        <div className="mt-6">
          <Link
            href="/"
            onClick={onClose}
            className="block w-full rounded-md bg-accent py-3 text-center text-sm font-bold uppercase tracking-[1px] text-white hover:bg-accent/90"
          >
            Back to home
          </Link>
        </div>

        {/* small order id at bottom */}
        {orderId ? (
          <p className="mt-3 text-[11px] text-black/35">Order ref: {orderId}</p>
        ) : null}
      </div>
    </div>
  );
}
