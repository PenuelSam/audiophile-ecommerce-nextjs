import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  customers: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    address: v.string(),
    city: v.string(),
    country: v.string(),
    zip: v.string(),
    createdAt: v.string()
  }).index('email', ['email']),
  orders: defineTable({
    customerId: v.id('customers'),
    totals: v.object({
      subtotal: v.float64(),
      shipping: v.float64(),
      tax: v.float64(),
      grandTotal: v.float64()
    }),
    status: v.string(),
    createdAt: v.string()
  }).index('createdAt', ['createdAt']),
  items: defineTable({
    orderId: v.id('orders'),
    slug: v.string(),
    name: v.string(),
    price: v.float64(),
    quantity: v.number(),
    image: v.optional(v.string())
  }).index('orderId', ['orderId'])
});
