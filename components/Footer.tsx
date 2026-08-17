import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-white text-[#1A1A1A] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 text-2xl font-bold tracking-[0.3em] uppercase leading-tight border-b-2 border-black">
              D FASHION FIT
            </Link>
            <p className="text-[12px] text-slate-500 mb-6 leading-relaxed">
              Premium fashion and lifestyle brand delivering modern, professional, and high-quality apparel for everyone.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-black transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-black transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-black transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-black transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-[11px]">Shop</h4>
            <ul className="space-y-4 text-[12px] text-slate-500 font-medium">
              <li><Link href="/shop/men" className="hover:text-black transition-colors uppercase tracking-wider">Men's Collection</Link></li>
              <li><Link href="/shop/women" className="hover:text-black transition-colors uppercase tracking-wider">Women's Collection</Link></li>
              <li><Link href="/shop/kids" className="hover:text-black transition-colors uppercase tracking-wider">Kids' Apparel</Link></li>
              <li><Link href="/shop/accessories" className="hover:text-black transition-colors uppercase tracking-wider">Accessories</Link></li>
              <li><Link href="/shop/new-arrivals" className="hover:text-black transition-colors uppercase tracking-wider">New Arrivals</Link></li>
              <li><Link href="/shop/special-edition" className="hover:text-black transition-colors uppercase tracking-wider">Special Edition</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-[11px]">Customer Service</h4>
            <ul className="space-y-4 text-[12px] text-slate-500 font-medium">
              <li><Link href="/account" className="hover:text-black transition-colors uppercase tracking-wider">My Account</Link></li>
              <li><Link href="/policies/shipping" className="hover:text-black transition-colors uppercase tracking-wider">Shipping Policy</Link></li>
              <li><Link href="/policies/returns" className="hover:text-black transition-colors uppercase tracking-wider">Returns & Refunds</Link></li>
              <li><Link href="/faq" className="hover:text-black transition-colors uppercase tracking-wider">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-black transition-colors uppercase tracking-wider">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-[11px]">Stay in the loop</h4>
            <p className="text-[12px] text-slate-500 mb-4 font-medium">
              Subscribe to our newsletter for exclusive offers, new arrivals, and fashion tips.
            </p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-[#F9F9F7] border border-[#E5E5E5] text-[#1A1A1A] text-[11px] uppercase tracking-wider rounded-none py-3 pl-10 pr-4 focus:outline-none focus:border-black transition-colors placeholder:text-slate-400"
                  required
                />
              </div>
              <button 
                type="submit"
                className="bg-black text-white font-bold text-[11px] uppercase tracking-widest py-3 px-6 hover:bg-slate-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E5E5E5] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 font-medium tracking-wider uppercase">
          <p>&copy; {new Date().getFullYear()} D Fashion Fit • All rights reserved</p>
          <div className="flex gap-4">
            <Link href="/policies/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/policies/terms" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
