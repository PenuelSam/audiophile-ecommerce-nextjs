'use client';

import { useState, cloneElement, isValidElement, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@/lib/zod-resolver';
import { useCart } from '@/components/cart/cart-provider';
import { formatCurrency } from '@/lib/format';
import { customerSchema } from '@/lib/validation';

type CheckoutFormValues = z.infer<typeof customerSchema>;

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      country: 'United States'
    }
  });

  const shipping = 50;
  const tax = total * 0.2;
  const grandTotal = total + shipping;

  const onSubmit = async (values: CheckoutFormValues) => {
    setServerError(null);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          customer: values,
          items: items.map((item) => ({
            slug: item.product.slug,
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
            image: item.product.categoryImages.mobile
          })),
          totals: {
            subtotal: total,
            shipping,
            tax,
            grandTotal
          }
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Unable to complete order');
      }

      const data = await response.json();
      clearCart();
      router.push(`/order/${data.orderId}`);
    } catch (error) {
      setServerError(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  return (
    <div className="container-width my-16 grid gap-12 lg:grid-cols-[2fr_1fr]">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 rounded-lg bg-white p-10 shadow-soft">
        <div>
          <h1 className="section-title">Checkout</h1>
        </div>
        <fieldset className="grid gap-6">
          <legend className="text-xs uppercase tracking-[1px] text-accent">Billing details</legend>
          <div className="grid gap-6 md:grid-cols-2">
            <FormField label="Name" error={errors.name?.message}>
              <input type="text" {...register('name')} className="form-input" aria-invalid={!!errors.name} />
            </FormField>
            <FormField label="Email Address" error={errors.email?.message}>
              <input type="email" {...register('email')} className="form-input" aria-invalid={!!errors.email} />
            </FormField>
            <FormField label="Phone Number" error={errors.phone?.message}>
              <input type="tel" {...register('phone')} className="form-input" aria-invalid={!!errors.phone} />
            </FormField>
          </div>
        </fieldset>
        <fieldset className="grid gap-6">
          <legend className="text-xs uppercase tracking-[1px] text-accent">Shipping info</legend>
          <FormField label="Address" error={errors.address?.message}>
            <input type="text" {...register('address')} className="form-input" aria-invalid={!!errors.address} />
          </FormField>
          <div className="grid gap-6 md:grid-cols-3">
            <FormField label="ZIP Code" error={errors.zip?.message}>
              <input type="text" {...register('zip')} className="form-input" aria-invalid={!!errors.zip} />
            </FormField>
            <FormField label="City" error={errors.city?.message}>
              <input type="text" {...register('city')} className="form-input" aria-invalid={!!errors.city} />
            </FormField>
            <FormField label="Country" error={errors.country?.message}>
              <input type="text" {...register('country')} className="form-input" aria-invalid={!!errors.country} />
            </FormField>
          </div>
        </fieldset>
        {serverError && <p className="form-error" role="alert">{serverError}</p>}
        <button
          type="submit"
          className="button-primary inline-flex w-full justify-center md:w-auto"
          disabled={isSubmitting || items.length === 0}
        >
          {isSubmitting ? 'Processing...' : 'Continue & pay'}
        </button>
      </form>
      <aside className="space-y-6 rounded-lg bg-black p-8 text-white">
        <h2 className="text-[18px] uppercase tracking-[1.2px]">Summary</h2>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.product.slug} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[1px]">{item.product.shortName}</p>
                <p className="text-sm text-white/60">x{item.quantity}</p>
              </div>
              <p className="text-sm text-white/80">{formatCurrency(item.product.price * item.quantity)}</p>
            </div>
          ))}
        </div>
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="uppercase text-white/60">Total</dt>
            <dd>{formatCurrency(total)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="uppercase text-white/60">Shipping</dt>
            <dd>{formatCurrency(shipping)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="uppercase text-white/60">Tax (included)</dt>
            <dd>{formatCurrency(tax)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="uppercase text-white/60">Grand total</dt>
            <dd className="font-bold text-accent">{formatCurrency(grandTotal)}</dd>
          </div>
        </dl>
      </aside>
    </div>
  );
}

function FormField({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-field';
  return (
    <label className="form-field" htmlFor={id}>
      <span className="flex justify-between">
        <span>{label}</span>
        {error && (
          <span id={`${id}-error`} className="form-error">
            {error}
          </span>
        )}
      </span>
      {isValidElement(children)
        ? cloneElement(children, {
            id,
            'aria-describedby': error ? `${id}-error` : undefined
          })
        : children}
    </label>
  );
}
