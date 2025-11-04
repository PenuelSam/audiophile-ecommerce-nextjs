import { z } from 'zod';

const baseSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Provide a valid email'),
  phone: z.string().min(6, 'Phone number is required'),
  address: z.string().min(4, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  country: z.string().min(2, 'Country is required'),
  zip: z.string().min(3, 'ZIP code is required'),
});

export const customerSchema = z.discriminatedUnion('paymentMethod', [
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

export const orderItemSchema = z.object({
  slug: z.string(),
  name: z.string(),
  price: z.number().min(0),
  quantity: z.number().min(1),
 image: z.string().optional()
});

export const orderTotalsSchema = z.object({
  subtotal: z.number().min(0),
  shipping: z.number().min(0),
  tax: z.number().min(0),
  grandTotal: z.number().min(0)
});

export const orderPayloadSchema = z.object({
  customer: customerSchema,
  paymentMethod: z.enum(['e-money', 'cash']), // 👈 ADD THIS
  items: z.array(orderItemSchema).min(1),
  totals: orderTotalsSchema
});

export type CustomerInput = z.infer<typeof customerSchema>;
export type OrderPayloadInput = z.infer<typeof orderPayloadSchema>;
