'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/components/CartProvider';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const shipping = cartTotal > 100 ? 0 : 10;
  const total = cartTotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order placement
    setTimeout(() => {
      clearCart();
      setIsSuccess(true);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-32 text-center max-w-lg">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold uppercase tracking-tighter mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order number is <strong>#DF{Math.floor(Math.random() * 100000)}</strong>.
          We'll email you an order confirmation with details and tracking info.
        </p>
        <Link 
          href="/shop"
          className="inline-block bg-black text-white px-8 py-4 font-semibold uppercase tracking-wide hover:bg-zinc-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold uppercase tracking-tighter mb-4">Checkout</h1>
        <p className="text-gray-500 mb-8">Your cart is empty.</p>
        <Link href="/shop" className="text-black underline">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="container mx-auto px-4 py-8">
        <Link href="/cart" className="flex items-center text-sm font-semibold uppercase tracking-wider text-gray-500 hover:text-black mb-8 w-fit">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Cart
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Form */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold uppercase tracking-tighter mb-6 pb-4 border-b">Checkout details</h2>
              
              <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">
                
                {/* Contact Info */}
                <section>
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input type="email" required className="w-full border-gray-300 border p-3 focus:ring-black focus:border-black" />
                    </div>
                  </div>
                </section>
                
                {/* Shipping Address */}
                <section>
                  <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                      <input type="text" required className="w-full border-gray-300 border p-3 focus:ring-black focus:border-black" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                      <input type="text" required className="w-full border-gray-300 border p-3 focus:ring-black focus:border-black" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                      <input type="text" required className="w-full border-gray-300 border p-3 focus:ring-black focus:border-black" placeholder="Street address or P.O. Box" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                      <input type="text" required className="w-full border-gray-300 border p-3 focus:ring-black focus:border-black" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code *</label>
                      <input type="text" required className="w-full border-gray-300 border p-3 focus:ring-black focus:border-black" />
                    </div>
                  </div>
                </section>
                
                {/* Payment */}
                <section>
                  <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                  <div className="space-y-3">
                    <label className={`block border p-4 cursor-pointer transition-colors ${paymentMethod === 'card' ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          name="payment" 
                          value="card" 
                          checked={paymentMethod === 'card'}
                          onChange={() => setPaymentMethod('card')}
                          className="w-4 h-4 text-black focus:ring-black" 
                        />
                        <span className="ml-3 font-medium">Credit / Debit Card</span>
                      </div>
                      {paymentMethod === 'card' && (
                        <div className="mt-4 pl-7 space-y-4">
                          <input type="text" placeholder="Card Number" className="w-full border-gray-300 border p-3 text-sm" />
                          <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="MM / YY" className="w-full border-gray-300 border p-3 text-sm" />
                            <input type="text" placeholder="CVC" className="w-full border-gray-300 border p-3 text-sm" />
                          </div>
                        </div>
                      )}
                    </label>
                    
                    <label className={`block border p-4 cursor-pointer transition-colors ${paymentMethod === 'cod' ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          name="payment" 
                          value="cod" 
                          checked={paymentMethod === 'cod'}
                          onChange={() => setPaymentMethod('cod')}
                          className="w-4 h-4 text-black focus:ring-black" 
                        />
                        <span className="ml-3 font-medium">Cash on Delivery (COD)</span>
                      </div>
                    </label>
                  </div>
                </section>

              </form>
            </div>
          </div>
          
          {/* Order Summary sidebar */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-white p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-bold uppercase tracking-tighter mb-6 pb-4 border-b">Your Order</h2>
              
              <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
                {items.map((item, idx) => {
                  const price = item.product.on_sale && item.product.sale_price ? parseFloat(item.product.sale_price) : parseFloat(item.product.price);
                  const img = item.product.images[0]?.src || 'https://picsum.photos/seed/placeholder/100/100';
                  
                  return (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="relative w-16 h-20 bg-gray-100 shrink-0">
                         <Image src={img} alt={item.product.name} fill className="object-cover" referrerPolicy="no-referrer" />
                         <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                           {item.quantity}
                         </span>
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 truncate">{item.product.name}</h4>
                        {item.variation && (
                          <div className="text-xs text-gray-500 mt-0.5">
                            {Object.values(item.variation).join(', ')}
                          </div>
                        )}
                      </div>
                      <div className="text-sm font-semibold shrink-0">
                        ${(price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="space-y-3 text-sm border-t pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center border-t pt-4 mb-8">
                <span className="text-lg font-bold uppercase tracking-wider">Total</span>
                <span className="text-2xl font-bold">${total.toFixed(2)}</span>
              </div>
              
              <button 
                type="submit"
                form="checkout-form"
                className="w-full bg-black text-white py-4 font-semibold uppercase tracking-wide hover:bg-zinc-800 transition-colors"
              >
                Place Order
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
