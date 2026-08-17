'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { WooCommerceProduct } from '@/lib/mock-data';

export interface CartItem {
  product: WooCommerceProduct;
  quantity: number;
  variation?: { [key: string]: string };
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: WooCommerceProduct, quantity: number, variation?: { [key: string]: string }) => void;
  removeFromCart: (productId: number, variation?: { [key: string]: string }) => void;
  updateQuantity: (productId: number, quantity: number, variation?: { [key: string]: string }) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('dfashionfit_cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Could not parse cart", e);
      }
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('dfashionfit_cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product: WooCommerceProduct, quantity: number, variation?: { [key: string]: string }) => {
    setItems((prev) => {
      const existingItemIndex = prev.findIndex(
        (item) => item.product.id === product.id && JSON.stringify(item.variation) === JSON.stringify(variation)
      );

      if (existingItemIndex > -1) {
        const newItems = [...prev];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      }

      return [...prev, { product, quantity, variation }];
    });
  };

  const removeFromCart = (productId: number, variation?: { [key: string]: string }) => {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && JSON.stringify(item.variation) === JSON.stringify(variation))
      )
    );
  };

  const updateQuantity = (productId: number, quantity: number, variation?: { [key: string]: string }) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.product.id === productId && JSON.stringify(item.variation) === JSON.stringify(variation)) {
          return { ...item, quantity: Math.max(1, quantity) };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartTotal = items.reduce((total, item) => {
    const price = item.product.on_sale && item.product.sale_price ? parseFloat(item.product.sale_price) : parseFloat(item.product.price);
    return total + price * item.quantity;
  }, 0);

  const cartCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
