'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, User, Menu, X, Heart } from 'lucide-react';
import { useCart } from './CartProvider';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Men', href: '/shop/men' },
    { name: 'Women', href: '/shop/women' },
    { name: 'Kids', href: '/shop/kids' },
    { name: 'Accessories', href: '/shop/accessories' },
  ];

  return (
    <>
      <div className="bg-[#1A1A1A] text-[#FFFFFF] text-[10px] py-2 px-4 text-center uppercase tracking-[0.2em] font-medium">
        Complimentary Shipping on all Premium Orders • Limited Edition Summer Collection Out Now
      </div>
      <header className="sticky top-0 z-50 bg-white border-b border-[#E5E5E5]">
        <div className="container mx-auto px-4 lg:px-10 py-4 lg:py-6">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-gray-600 hover:text-black"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-8 text-[11px] uppercase tracking-widest font-semibold flex-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="hover:text-slate-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <div className="flex-1 flex justify-center lg:justify-center">
              <Link href="/" className="text-2xl font-bold tracking-[0.3em] flex flex-col items-center">
                <span className="border-b-2 border-black leading-tight text-center">D FASHION FIT</span>
                <span className="text-[8px] tracking-[0.5em] mt-1 opacity-60 text-center">LIFESTYLE BRAND</span>
              </Link>
            </div>

            {/* Icons */}
            <div className="flex gap-4 lg:gap-6 items-center flex-1 justify-end">
              <button className="hidden lg:flex items-center border-b border-black pb-1 hover:opacity-70 transition-opacity">
                <Search className="w-4 h-4 mr-2" />
                <span className="text-[11px] uppercase tracking-wider font-medium">Search</span>
              </button>
              
              <Link href="/account" className="text-gray-900 hover:text-slate-500 transition-colors hidden sm:block">
                <User className="w-5 h-5" strokeWidth={1.5} />
              </Link>
              <Link href="/account?tab=wishlist" className="text-gray-900 hover:text-slate-500 transition-colors hidden sm:block">
                <Heart className="w-5 h-5" strokeWidth={1.5} />
              </Link>
              <Link href="/cart" className="text-gray-900 hover:text-slate-500 transition-colors relative flex items-center">
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 z-50 bg-white md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="text-xl font-bold uppercase tracking-tighter">Menu</span>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="flex-1 py-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-6 py-4 text-lg font-medium text-gray-800 border-b border-gray-50 uppercase tracking-wide"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="p-6 border-t bg-gray-50 flex justify-around">
                  <Link href="/account" className="flex flex-col items-center gap-1 text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>
                    <User className="w-6 h-6" />
                    <span className="text-xs uppercase">Account</span>
                  </Link>
                  <Link href="/account?tab=wishlist" className="flex flex-col items-center gap-1 text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>
                    <Heart className="w-6 h-6" />
                    <span className="text-xs uppercase">Wishlist</span>
                  </Link>
                  <button className="flex flex-col items-center gap-1 text-gray-600">
                    <Search className="w-6 h-6" />
                    <span className="text-xs uppercase">Search</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
