'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/components/CartProvider';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold uppercase tracking-tighter mb-4">Your Cart is Empty</h1>
        <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link 
          href="/shop"
          className="inline-block bg-black text-white px-8 py-4 font-semibold uppercase tracking-wide hover:bg-zinc-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold uppercase tracking-tighter mb-12">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="hidden md:grid grid-cols-6 gap-4 border-b border-gray-200 pb-4 mb-6 text-sm font-semibold uppercase tracking-wider text-gray-500">
            <div className="col-span-3">Product</div>
            <div className="col-span-1 text-center">Price</div>
            <div className="col-span-1 text-center">Quantity</div>
            <div className="col-span-1 text-right">Total</div>
          </div>
          
          <div className="space-y-6">
            {items.map((item, index) => {
              const price = item.product.on_sale && item.product.sale_price ? parseFloat(item.product.sale_price) : parseFloat(item.product.price);
              const mainImg = item.product.images[0]?.src || 'https://picsum.photos/seed/placeholder/800/1000';
              
              return (
                <div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center border-b border-gray-100 pb-6">
                  {/* Product Info */}
                  <div className="col-span-3 flex gap-4">
                    <div className="relative w-20 h-24 bg-gray-50 shrink-0">
                      <Image src={mainImg} alt={item.product.name} fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <Link href={`/product/${item.product.slug}`} className="font-semibold text-gray-900 hover:underline line-clamp-1">
                        {item.product.name}
                      </Link>
                      {item.variation && (
                        <div className="text-sm text-gray-500 mt-1 flex gap-2 flex-wrap">
                          {Object.entries(item.variation).map(([k, v]) => (
                            <span key={k}>{k}: {v}</span>
                          ))}
                        </div>
                      )}
                      <button 
                        onClick={() => removeFromCart(item.product.id, item.variation)}
                        className="text-xs text-red-500 uppercase tracking-widest font-semibold mt-2 flex items-center gap-1 w-fit hover:text-red-700"
                      >
                        <Trash2 className="w-3 h-3" /> Remove
                      </button>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="col-span-1 text-center hidden md:block">
                    ${price.toFixed(2)}
                  </div>
                  
                  {/* Quantity */}
                  <div className="col-span-1 flex justify-center">
                    <div className="flex items-center border border-gray-200">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.variation)}
                        className="p-2 text-gray-500 hover:text-black"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.variation)}
                        className="p-2 text-gray-500 hover:text-black"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Total */}
                  <div className="col-span-1 text-right font-bold hidden md:block">
                    ${(price * item.quantity).toFixed(2)}
                  </div>
                  
                  {/* Mobile Mobile Total */}
                  <div className="md:hidden flex justify-between items-center mt-2 font-bold">
                    <span>Total:</span>
                    <span>${(price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 sm:p-8 h-fit">
          <h2 className="text-xl font-bold uppercase tracking-tighter mb-6">Order Summary</h2>
          
          <div className="space-y-4 text-sm mb-6 pb-6 border-b border-gray-200">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-semibold">{cartTotal > 100 ? 'Free' : '$10.00'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span className="font-semibold">Calculated at checkout</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-8">
            <span className="text-lg font-bold uppercase tracking-wider">Total</span>
            <span className="text-2xl font-bold">${(cartTotal + (cartTotal > 100 ? 0 : 10)).toFixed(2)}</span>
          </div>
          
          <Link 
            href="/checkout"
            className="w-full flex items-center justify-center gap-2 bg-black text-white py-4 font-semibold uppercase tracking-wide hover:bg-zinc-800 transition-colors"
          >
            Proceed to Checkout <ArrowRight className="w-4 h-4" />
          </Link>
          
          <div className="mt-4 text-xs text-center text-gray-500 flex items-center justify-center gap-1">
             <Image src="https://picsum.photos/seed/stripe/120/30" alt="Secure payments" width={120} height={30} className="opacity-50 grayscale" unoptimized referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </div>
  );
}
