import { BrandStory } from '@/src/components/brand-story';
import { CategoryNavigation } from '@/src/components/category-navigation';
import { getConvexClient } from '@/src/lib/convex';
import { formatCurrency } from '@/src/lib/format';
import { OrderPayloadInput } from '@/src/lib/validation';
import Link from 'next/link';


async function getOrder(orderId: string) {
  try {
    const convex = getConvexClient();
    const order = await convex.query('orders:getOrderById', { orderId });
    return order as (OrderPayloadInput & { id: string; createdAt: string }) | null;
  } catch (error) {
    console.warn('Unable to fetch order', error);
    return null;
  }
}

export default async function OrderPage({ params }: { params: { id: string } }) {
  const order = await getOrder(params.id);

  if (!order) {
    return (
      <div className="container-width my-20 text-center">
        <h1 className="section-title">Order not found</h1>
        <p className="mt-4 text-black/60">We couldn’t find an order with that identifier.</p>
        <Link href="/" className="button-primary mt-8 inline-flex">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-24">
      <div className="container-width my-20">
        <div className="rounded-lg bg-white p-10 shadow-soft">
          <h1 className="section-title">Thank you for your order</h1>
          <p className="mt-4 text-black/60">
            We’ve sent a confirmation email to <strong>{order.customer.email}</strong>.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-[2fr_1fr]">
            <div className="space-y-4 rounded-lg bg-gray p-6">
              <h2 className="text-sm uppercase tracking-[1px] text-black/60">Items</h2>
              <ul className="space-y-4">
                {order.items.map((item) => (
                  <li key={item.slug} className="flex items-center justify-between text-sm">
                    <span>
                      <span className="font-bold uppercase tracking-[1px]">{item.name}</span>
                      <span className="ml-2 text-black/50">x{item.quantity}</span>
                    </span>
                    <span>{formatCurrency(item.price * item.quantity)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-black p-6 text-white">
              <h2 className="text-sm uppercase tracking-[1px] text-white/60">Summary</h2>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd>{formatCurrency(order.totals.subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Shipping</dt>
                  <dd>{formatCurrency(order.totals.shipping)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Tax</dt>
                  <dd>{formatCurrency(order.totals.tax)}</dd>
                </div>
                <div className="flex justify-between font-bold text-accent">
                  <dt>Grand total</dt>
                  <dd>{formatCurrency(order.totals.grandTotal)}</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mt-10">
            <Link href="/" className="button-primary">
              Back to home
            </Link>
          </div>
        </div>
      </div>
      <CategoryNavigation />
      <BrandStory />
    </div>
  );
}
