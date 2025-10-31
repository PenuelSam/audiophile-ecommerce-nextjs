import { ConvexHttpClient } from 'convex/http';

export function getConvexClient() {
  const url = process.env.NEXT_PUBLIC_CONVEX_URL || process.env.CONVEX_URL;
  if (!url) {
    throw new Error('Convex URL is not configured. Set NEXT_PUBLIC_CONVEX_URL or CONVEX_URL.');
  }
  return new ConvexHttpClient(url);
}
