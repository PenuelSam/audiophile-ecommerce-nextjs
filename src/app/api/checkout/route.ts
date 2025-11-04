import { api } from '../../../../convex/_generated/api';
import { getConvexClient } from '@/src/lib/convex';
import { sendOrderConfirmationEmail } from '@/src/lib/email';
import { orderPayloadSchema } from '@/src/lib/validation';
import { NextResponse } from 'next/server';


export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = orderPayloadSchema.safeParse(json);

    if (!parsed.success) {
      console.error(
        '❌ Validation failed:',
        JSON.stringify(parsed.error.format(), null, 2)
      );

      return NextResponse.json(
        { message: 'Invalid request', errors: parsed.error.format() },
        { status: 400 }
      );
    }

    const convex = getConvexClient();

    // ✅ Use the generated API reference, not a string
   const { customer, items, totals } = parsed.data;
const { paymentMethod, ...customerWithoutPayment } = customer;

const orderId = await convex.mutation(api.orders.createOrder, {
  customer: customerWithoutPayment,
  items,
  totals,
  paymentMethod
});

    await sendOrderConfirmationEmail(orderId as string, parsed.data);

    return NextResponse.json({ orderId });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { message: 'Server error' },
      { status: 500 }
    );
  }
}
