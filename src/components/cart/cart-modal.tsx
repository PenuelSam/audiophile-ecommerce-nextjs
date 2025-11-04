'use client';

import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { useCart } from './cart-provider';
import { buttonVariants } from '../ui/button';
import { formatCurrency } from '@/src/lib/format';
import { QuantityInput } from '../ui/quantity-input';
import { useEffect } from 'react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, total, clearCart, setQuantity } = useCart();

  // disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-end bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal panel */}
      <div
        className="relative mt-24 mr-8 w-[377px] rounded-lg bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[18px] tracking-[1.29px] font-bold uppercase text-black">Cart ({items.length})</h1>
          {items.length > 0 && (
            <button
              type="button"
              className="text-[15px] leading-[25px] underline font-[400] text-black/50 hover:text-accent"
              onClick={clearCart}
            >
              Remove all
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <p className="text-center text-black/70 py-10">Your cart is empty.</p>
        ) : (
          <>
            <div className="max-h-[300px] overflow-y-auto space-y-4">
              {items.map((item) => (
                <div key={item.product.slug} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                   <div className='w-[64px] h-[64px] bg-[#F1F1F1] rounded-[8px] flex items-center justify-center'>
                     <Image
                      src={item.product.categoryImages.mobile}
                      alt={item.product.name}
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                   </div>
                    <div>
                      <h2 className="text-[15px] leading-[25px] text-black font-bold uppercase">
                        {item.product.shortName}
                      </h2>
                      <p className="text-[14px] leading-[25px] text-black/60">
                        {formatCurrency(item.product.price)}
                      </p>
                    </div>
                  </div>
                  <QuantityInput
                    value={item.quantity}
                    onChange={(value) => setQuantity(item.product.slug, value)}
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-8">
              <span className="uppercase text-black/50 text-[15px] leading-[25px] font-[400]">Total</span>
              <span className="text-[18px] text-black font-bold">{formatCurrency(total)}</span>
            </div>

            <div className="mt-6">
              <Link
                href="/checkout"
                className={clsx(buttonVariants({ variant: 'primary' }), 'w-full text-center')}
                onClick={onClose}
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
