'use client';


import { useCart } from './cart-provider';

interface CartTriggerProps {
  onClick: () => void;
}

export function CartTrigger({ onClick }: CartTriggerProps) {
  const { items } = useCart();
  const quantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      
      className="relative flex h-12 w-12 items-center justify-center rounded-full bg-dark/5 transition hover:bg-accent/10"
      aria-label={`Open cart (${quantity} items)`}
      onClick={onClick}
    >
      <svg width="23" height="20" viewBox="0 0 23 20" fill="none" aria-hidden="true">
        <path
          d="M7.92008 18.3334C8.50878 18.3334 8.98633 17.8559 8.98633 17.2672C8.98633 16.6785 8.50878 16.201 7.92008 16.201C7.33138 16.201 6.85383 16.6785 6.85383 17.2672C6.85383 17.8559 7.33138 18.3334 7.92008 18.3334Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M17.7541 18.3334C18.3428 18.3334 18.8203 17.8559 18.8203 17.2672C18.8203 16.6785 18.3428 16.201 17.7541 16.201C17.1654 16.201 16.6879 16.6785 16.6879 17.2672C16.6879 17.8559 17.1654 18.3334 17.7541 18.3334Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M1.54297 1.66669H4.2763L6.38897 12.6427C6.47517 13.1028 6.72206 13.5188 7.08418 13.8181C7.44631 14.1173 7.90088 14.2839 8.3713 14.2834H17.1513C17.6217 14.2839 18.0763 14.1173 18.4385 13.8181C18.8006 13.5188 19.0475 13.1028 19.1337 12.6427L20.509 5.35835H5.2763"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {quantity > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold leading-none text-white">
          {quantity}
        </span>
      )}
    </div>
  );
}
