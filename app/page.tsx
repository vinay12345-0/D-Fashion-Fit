import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Truck, RotateCcw, CreditCard } from 'lucide-react';
import { getProducts } from '@/lib/mock-data';
import ProductCard from '@/components/ProductCard';

export default async function HomePage() {
  const allProducts = await getProducts();
  const featuredProducts = allProducts.filter(p => p.featured).slice(0, 4);
  const newArrivals = allProducts.filter(p => p.categories.some(c => c.slug === 'new-arrivals')).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row min-h-[600px] bg-[#F9F9F7]">
        <div className="md:w-1/2 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24">
          <span className="text-[12px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-4">
            New Arrival • Summer 2024
          </span>
          <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
            Architectural<br/>Simplicity
          </h1>
          <p className="text-slate-500 text-sm max-w-sm mb-8 leading-relaxed">
            Refining the modern wardrobe with structured silhouettes and premium sustainable fabrics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/shop/women"
              className="bg-black text-white px-8 py-3 text-[11px] uppercase tracking-widest font-bold hover:bg-slate-800 transition-colors text-center"
            >
              Explore Shop
            </Link>
            <Link 
              href="/shop/men"
              className="border border-black text-black px-8 py-3 text-[11px] uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all text-center"
            >
              The Journal
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 relative bg-[#EAE8E4] min-h-[400px]">
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="w-full max-w-[340px] aspect-[3/4] bg-[#D6D3CF] border border-white/50 shadow-2xl relative overflow-hidden">
               <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold tracking-tighter uppercase z-10">
                 Editor's Choice
               </div>
               <Image
                 src="https://picsum.photos/seed/fashion_hero/800/1066"
                 alt="Campaign Imagery"
                 fill
                 className="object-cover"
                 priority
                 referrerPolicy="no-referrer"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center justify-center p-4">
              <Truck className="w-8 h-8 mb-3 text-gray-800" />
              <h3 className="font-semibold text-sm uppercase tracking-wide">Free Shipping</h3>
              <p className="text-xs text-gray-500 mt-1">On orders over $100</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <RotateCcw className="w-8 h-8 mb-3 text-gray-800" />
              <h3 className="font-semibold text-sm uppercase tracking-wide">Easy Returns</h3>
              <p className="text-xs text-gray-500 mt-1">30 days return policy</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <ShieldCheck className="w-8 h-8 mb-3 text-gray-800" />
              <h3 className="font-semibold text-sm uppercase tracking-wide">Secure Checkout</h3>
              <p className="text-xs text-gray-500 mt-1">100% protected payments</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <CreditCard className="w-8 h-8 mb-3 text-gray-800" />
              <h3 className="font-semibold text-sm uppercase tracking-wide">Multiple Payments</h3>
              <p className="text-xs text-gray-500 mt-1">Cards, PayPal, COD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold uppercase tracking-tighter text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/shop/women" className="group relative h-[400px] overflow-hidden block">
              <Image src="https://picsum.photos/seed/cat_women/600/800" alt="Women" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-3xl font-bold uppercase tracking-tight mb-2">Women</h3>
                <span className="text-white flex items-center text-sm font-semibold uppercase tracking-widest group-hover:underline">
                  Discover <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </div>
            </Link>
            <Link href="/shop/men" className="group relative h-[400px] overflow-hidden block">
              <Image src="https://picsum.photos/seed/cat_men/600/800" alt="Men" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-3xl font-bold uppercase tracking-tight mb-2">Men</h3>
                <span className="text-white flex items-center text-sm font-semibold uppercase tracking-widest group-hover:underline">
                  Discover <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </div>
            </Link>
            <Link href="/shop/accessories" className="group relative h-[400px] overflow-hidden block">
              <Image src="https://picsum.photos/seed/cat_acc/600/800" alt="Accessories" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-3xl font-bold uppercase tracking-tight mb-2">Accessories</h3>
                <span className="text-white flex items-center text-sm font-semibold uppercase tracking-widest group-hover:underline">
                  Discover <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-4 lg:px-10 py-16 bg-white flex-1">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-serif">Featured Pieces</h2>
            <div className="hidden sm:flex gap-4 text-[11px] uppercase tracking-widest font-bold border-b border-black pb-1">
              <Link href="/shop" className="hover:text-slate-500 transition-colors">View All Collections</Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
             <Link href="/shop" className="inline-flex text-[11px] uppercase tracking-widest font-bold border-b border-black pb-1 hover:text-slate-500 transition-colors">
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="relative bg-[#1A1A1A] text-white overflow-hidden">
            <div className="absolute inset-0 md:w-1/2 left-1/2 hidden md:block bg-[#EAE8E4]">
               <Image src="https://picsum.photos/seed/promo/800/600" alt="Special Offer" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative z-10 p-12 md:p-20 md:w-1/2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 block">Limited Time Offer</span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">Special Edition<br/>Sneakers</h2>
              <p className="text-slate-300 text-sm mb-8 max-w-md leading-relaxed">
                Elevate your streetwear game with our exclusive limited edition drop. Comfort meets cutting-edge design.
              </p>
              <Link 
                href="/shop/special-edition"
                className="inline-block bg-white text-[#1A1A1A] px-8 py-3 text-[11px] uppercase tracking-widest font-bold hover:bg-slate-200 transition-colors"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">New Arrivals</h2>
            <Link href="/shop/new-arrivals" className="hidden sm:flex text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-black transition-colors items-center">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
