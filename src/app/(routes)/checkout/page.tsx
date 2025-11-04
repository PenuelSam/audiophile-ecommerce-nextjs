'use client';

import { useState, cloneElement, isValidElement, type ReactNode } from 'react';
import { useForm, type FieldErrors } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@/src/lib/zod-resolver';
import { useCart } from '@/src/components/cart/cart-provider';
import { formatCurrency } from '@/src/lib/format';
import Image from 'next/image';
import { ThankYouModal } from '@/src/components/order/thank-you-modal';

// -------- ZOD VALIDATION (INLINE FOR CLARITY) --------
const baseSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Provide a valid email'),
  phone: z.string().min(6, 'Phone number is required'),
  address: z.string().min(4, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  country: z.string().min(2, 'Country is required'),
  zip: z.string().min(3, 'ZIP code is required'),
});

const customerSchema = z.discriminatedUnion('paymentMethod', [
  baseSchema.extend({
    paymentMethod: z.literal('e-money'),
    eMoneyNumber: z.string().min(4, 'e-Money number is required'),
    eMoneyPin: z.string().min(4, 'e-Money PIN is required'),
  }),
  baseSchema.extend({
    paymentMethod: z.literal('cash'),
    eMoneyNumber: z.string().optional(),
    eMoneyPin: z.string().optional(),
  }),
]);

type CheckoutFormValues = z.infer<typeof customerSchema>;

// -------- COMPONENT --------
export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [serverError, setServerError] = useState<string | null>(null);
  const [orderedItems, setOrderedItems] = useState<Array<{
    product: {
      slug: string;
      name: string;
      shortName: string;
      price: number;
      categoryImages: {
        mobile: string;
      };
    };
    quantity: number;
  }>>([]);
  const [showThanks, setShowThanks] = useState(false);
  const [createdOrderId, setCreatedOrderId] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      country: 'United States',
      paymentMethod: 'e-money',
    },
  });

  const paymentMethod = watch('paymentMethod');
  const shipping = 50;
  const tax = total * 0.2;
  const grandTotal = total + shipping;

  // ---------- HANDLE SUBMIT ----------
  const onSubmit = async (values: CheckoutFormValues) => {
    console.log('✅ Form submitted', values);
    setServerError(null);

    const cleanValues = {
    ...values,
    eMoneyNumber: values.paymentMethod === 'cash' ? undefined : values.eMoneyNumber,
    eMoneyPin: values.paymentMethod === 'cash' ? undefined : values.eMoneyPin,
  };

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: cleanValues,
          paymentMethod: cleanValues.paymentMethod,
          items: items.map((item) => ({
            slug: item.product.slug,
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
            image: item.product.categoryImages.mobile,
          })),
          totals: { subtotal: total, shipping, tax, grandTotal },
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Unable to complete order');
      }

      const data = await response.json();
     setCreatedOrderId(data.orderId);
      setCustomerEmail(cleanValues.email);
      setOrderedItems(items);
      setShowThanks(true);
    } catch (error) {
      setServerError(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  const onInvalid = (formErrors: FieldErrors<CheckoutFormValues>) => {
    console.log('⛔ onInvalid called with errors:', formErrors);
  };

  // ---------- RETURN ----------
  return (
    <>
    <form
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      className="container-width my-16 grid gap-12 lg:grid-cols-[2fr_1fr]"
    >
      {/* ---------- LEFT COLUMN: FORM ---------- */}
      <div className="space-y-10 rounded-lg bg-white p-10 shadow">
        <h1 className="text-[32px] font-bold uppercase tracking-[1.5px] text-black">
          Checkout
        </h1>

        {/* Billing Details */}
        <fieldset className="grid gap-6">
          <legend className="text-xs uppercase tracking-[1px] text-accent">
            Billing Details
          </legend>
          <div className="grid gap-6 md:grid-cols-2">
            <FormField label="Name" error={errors.name?.message}>
              <input type="text" {...register('name')} className="form-input" />
            </FormField>
            <FormField label="Email Address" error={errors.email?.message}>
              <input type="email" {...register('email')} className="form-input" />
            </FormField>
            <FormField label="Phone Number" error={errors.phone?.message}>
              <input type="tel" {...register('phone')} className="form-input" />
            </FormField>
          </div>
        </fieldset>

        {/* Shipping Info */}
        <fieldset className="grid gap-6">
          <legend className="text-xs uppercase tracking-[1px] text-accent">
            Shipping Info
          </legend>
          <FormField label="Address" error={errors.address?.message}>
            <input type="text" {...register('address')} className="form-input" />
          </FormField>
          <div className="grid gap-6 md:grid-cols-3">
            <FormField label="ZIP Code" error={errors.zip?.message}>
              <input type="text" {...register('zip')} className="form-input" />
            </FormField>
            <FormField label="City" error={errors.city?.message}>
              <input type="text" {...register('city')} className="form-input" />
            </FormField>
            <FormField label="Country" error={errors.country?.message}>
              <input type="text" {...register('country')} className="form-input" />
            </FormField>
          </div>
        </fieldset>

        {/* Payment Details */}
        <fieldset className="grid gap-6">
          <legend className="text-xs uppercase tracking-[1px] text-accent">
            Payment Details
          </legend>

          <div className="md:grid md:grid-cols-2 md:items-start md:gap-6">
            <span className="text-sm font-semibold text-black/80">
              Payment Method
            </span>
            <div className="space-y-3">
              <label className="flex items-center gap-3 rounded-md border border-gray-300 px-4 py-3 hover:border-accent cursor-pointer">
                <input
                  type="radio"
                  value="e-money"
                  {...register('paymentMethod')}
                  className="accent-accent"
                />
                <span className="text-sm font-semibold">e-Money</span>
              </label>

              <label className="flex items-center gap-3 rounded-md border border-gray-300 px-4 py-3 hover:border-accent cursor-pointer">
                <input
                  type="radio"
                  value="cash"
                  {...register('paymentMethod')}
                  className="accent-accent"
                />
                <span className="text-sm font-semibold">Cash on Delivery</span>
              </label>
            </div>
          </div>

          {paymentMethod === 'e-money' && (
            <div className="grid gap-6 md:grid-cols-2">
              <FormField label="e-Money Number" error={errors.eMoneyNumber?.message}>
                <input type="text" {...register('eMoneyNumber')} className="form-input" />
              </FormField>
              <FormField label="e-Money PIN" error={errors.eMoneyPin?.message}>
                <input type="text" {...register('eMoneyPin')} className="form-input" />
              </FormField>
            </div>
          )}
        </fieldset>

        {serverError && (
          <p className="form-error text-center text-red-500" role="alert">
            {serverError}
          </p>
        )}
      </div>

      {/* ---------- RIGHT COLUMN: SUMMARY CARD ---------- */}
      <aside className="space-y-6 self-start rounded-lg bg-white p-8 shadow">
        <h2 className="text-[18px] uppercase tracking-[1.29px] font-bold text-black/80">
          Summary
        </h2>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.product.slug} className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-[64px] h-[64px] bg-[#F1F1F1] rounded-[8px] flex items-center justify-center">
                  <Image
                    src={item.product.categoryImages.mobile}
                    alt={item.product.name}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-[15px] font-bold uppercase text-black">
                    {item.product.shortName}
                  </p>
                  <p className="text-[14px] font-bold text-black/60">
                    {formatCurrency(item.product.price)}
                  </p>
                </div>
              </div>
              <p className="text-[14px] font-bold text-black/60">x{item.quantity}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3 text-sm text-black">
          <div className="flex justify-between">
            <h2 className="uppercase text-[15px] font-[400] text-black/50">Total</h2>
            <p className="text-[18px] font-bold">{formatCurrency(total)}</p>
          </div>
          <div className="flex justify-between">
            <h2 className="uppercase text-[15px] font-[400] text-black/50">Shipping</h2>
            <p className="text-[18px] font-bold">{formatCurrency(shipping)}</p>
          </div>
          <div className="flex justify-between">
            <h2 className="uppercase text-[15px] font-[400] text-black/50">VAT (Included)</h2>
            <p className="text-[18px] font-bold">{formatCurrency(tax)}</p>
          </div>
          <div className="flex justify-between">
            <h2 className="uppercase text-[15px] font-[400] text-black/50">Grand Total</h2>
            <p className="font-bold text-[18px] text-accent">{formatCurrency(grandTotal)}</p>
          </div>
        </div>

        <button
          type="submit"
          onClick={() => console.log('🖱️ Button clicked')}
          className="button-primary w-full uppercase tracking-[1px] mt-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processing...' : 'Continue & Pay'}
        </button>
      </aside>
    </form>
     {/* THANK YOU MODAL */}
      <ThankYouModal
        open={showThanks}
       onClose={() => {
    clearCart();
    setShowThanks(false);
  }}
        orderId={createdOrderId}
        customerEmail={customerEmail}
        items={orderedItems.map((i) => ({
          slug: i.product.slug,
          name: i.product.shortName,
          price: i.product.price,
          quantity: i.quantity,
          image: i.product.categoryImages.mobile,
        }))}
        totals={{ subtotal: total, shipping, tax, grandTotal }}
      />
    </>
  );
}

// ---------- FORM FIELD COMPONENT ----------
function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-field';
  return (
    <label className="flex flex-col gap-2 text-sm font-semibold text-black/80" htmlFor={id}>
      <span className="flex justify-between">
        {label}
        {error && <span className="text-xs text-red-500">{error}</span>}
      </span>
      {isValidElement(children)
        ? cloneElement(children, {
            id,
            'aria-describedby': error ? `${id}-error` : undefined,
          })
        : children}
    </label>
  );
}
