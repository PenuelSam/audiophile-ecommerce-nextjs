# Audiophile E-commerce

A pixel-perfect recreation of the Audiophile e-commerce experience built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Convex**, and **Resend**.

## Features

- App Router architecture with responsive layouts for home, category, product, cart, checkout, and order confirmation pages
- Shared cart state with quantity controls, summaries, and checkout integration
- React Hook Form + Zod validation with accessible error messaging
- Convex backend storing customers and orders with mutations and queries
- Resend transactional email featuring responsive HTML template
- Fully typed utility modules, custom UI components, and Tailwind design system

## Getting started

### Prerequisites

- Node.js 18+
- npm 9+ (or pnpm/yarn)
- Convex CLI (`npm install -g convex`)

### Installation

```bash
npm install
```

### Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_CONVEX_URL` / `CONVEX_URL`: Convex deployment URL
- `RESEND_API_KEY`: API key from [Resend](https://resend.com)
- `NEXT_PUBLIC_APP_URL`: Public URL of your deployment (used in emails)

### Running locally

Start Convex in one terminal:

```bash
convex dev
```

Then run the Next.js development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

### Building for production

```bash
npm run build
npm run start
```

## Convex functions

- `orders:createOrder` – creates a new order, storing customer details, items, totals, and status
- `orders:getOrderById` – returns order information for the confirmation page

## Email delivery

Order confirmation email is generated through Resend. If `RESEND_API_KEY` is not configured, the application will skip sending the email and log a warning.

## Project structure

```
app/                # Next.js App Router routes and layouts
components/         # UI building blocks and feature components
convex/             # Convex schema, queries, and mutations
lib/                # Utilities (formatting, Convex client, email helpers, validation)
data/               # Product catalog data
public/             # Static assets
```

## Deployment

The project is ready for Vercel. Make sure to configure the environment variables and Convex deployment.
