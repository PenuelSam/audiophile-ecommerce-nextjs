import { NextResponse } from 'next/server';
import { orderPayloadSchema } from '@/lib/validation';
import { getConvexClient } from '@/lib/convex';
import { sendOrderConfirmationEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = orderPayloadSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ message: 'Invalid request', errors: parsed.error.flatten() }, { status: 400 });
    }

    const convex = getConvexClient();
    const orderId = await convex.mutation('orders:createOrder', parsed.data);

    await sendOrderConfirmationEmail(orderId as string, parsed.data);

    return NextResponse.json({ orderId });
  } catch (error) {
    console.error('Checkout error', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
