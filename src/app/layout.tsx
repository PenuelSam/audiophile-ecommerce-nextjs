import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { CartProvider } from '../components/cart/cart-provider';
import { Footer } from '../components/footer';
import Navbar from '../components/navbar';



const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope'
});

export const metadata: Metadata = {
  title: 'Audiophile E-commerce',
  description: 'Premium audio gear for music lovers'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="bg-white text-black">
        <CartProvider>
          <div className="flex min-h-screen flex-col">
           <Navbar />
            <main className="flex-1 bg-white">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
