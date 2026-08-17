import type {Metadata} from 'next';
import './globals.css';
import { CartProvider } from '@/components/CartProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'D Fashion Fit',
  description: 'Premium modern fashion and lifestyle brand.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans text-zinc-900 bg-white" suppressHydrationWarning>
        <CartProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
