import { mutation, query } from 'convex/server';
import { v } from 'convex/values';

export const createOrder = mutation({
  args: {
    customer: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
      address: v.string(),
      city: v.string(),
      country: v.string(),
      zip: v.string()
    }),
    items: v.array(
      v.object({
        slug: v.string(),
        name: v.string(),
        price: v.float64(),
        quantity: v.number(),
        image: v.optional(v.string())
      })
    ),
    totals: v.object({
      subtotal: v.float64(),
      shipping: v.float64(),
      tax: v.float64(),
      grandTotal: v.float64()
    })
  },
  handler: async (ctx, args) => {
    const now = new Date().toISOString();

    const existingCustomer = await ctx.db
      .query('customers')
      .withIndex('email', (q) => q.eq('email', args.customer.email))
      .unique();

    const customerId = existingCustomer
      ? existingCustomer._id
      : await ctx.db.insert('customers', {
          ...args.customer,
          createdAt: now
        });

    const orderId = await ctx.db.insert('orders', {
      customerId,
      totals: args.totals,
      status: 'processing',
      createdAt: now
    });

    for (const item of args.items) {
      await ctx.db.insert('items', {
        orderId,
        slug: item.slug,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image
      });
    }

    return orderId;
  }
});

export const getOrderById = query({
  args: {
    orderId: v.string()
  },
  handler: async (ctx, args) => {
    const normalizedId = ctx.db.normalizeId('orders', args.orderId);
    if (!normalizedId) {
      return null;
    }
    const order = await ctx.db.get(normalizedId);
    if (!order) {
      return null;
    }
    const customer = await ctx.db.get(order.customerId);
    if (!customer) {
      return null;
    }
    const items = await ctx.db
      .query('items')
      .withIndex('orderId', (q) => q.eq('orderId', normalizedId))
      .collect();

    return {
      id: order._id,
      createdAt: order.createdAt,
      customer: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        address: customer.address,
        city: customer.city,
        country: customer.country,
        zip: customer.zip
      },
      items: items.map((item) => ({
        slug: item.slug,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image ?? undefined
      })),
      totals: order.totals,
      status: order.status
    };
  }
});
