'use client';

import React, { useState } from 'react';
import { WooCommerceProduct } from '@/lib/mock-data';
import { useCart } from '@/components/CartProvider';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AddToCartForm({ product }: { product: WooCommerceProduct }) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedAttributes, setSelectedAttributes] = useState<{ [key: string]: string }>({});
  
  // Initialize default attributes
  React.useEffect(() => {
    const defaults: { [key: string]: string } = {};
    product.attributes.forEach(attr => {
      if (attr.options.length > 0) {
        defaults[attr.name] = attr.options[0];
      }
    });
    setSelectedAttributes(defaults);
  }, [product]);

  const handleAttributeChange = (name: string, value: string) => {
    setSelectedAttributes(prev => ({ ...prev, [name]: value }));
  };

  const handleQuantityChange = (type: 'inc' | 'dec') => {
    if (type === 'inc') {
      setQuantity(prev => prev + 1);
    } else if (type === 'dec' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedAttributes);
    // Could show a toast here instead of immediate redirect
    // router.push('/cart');
    alert('Added to cart!');
  };

  if (product.stock_status !== 'instock') {
    return (
      <button disabled className="w-full bg-gray-200 text-gray-500 py-4 font-semibold uppercase tracking-wide cursor-not-allowed">
        Out of Stock
      </button>
    );
  }

  return (
    <div className="space-y-6">
      {/* Attributes Selection */}
      {product.type === 'variable' && product.attributes.map(attr => (
        <div key={attr.id} className="space-y-3">
          <label className="block text-sm font-semibold uppercase tracking-wider">{attr.name}</label>
          <div className="flex flex-wrap gap-3">
            {attr.options.map(option => (
              <button
                key={option}
                type="button"
                onClick={() => handleAttributeChange(attr.name, option)}
                className={`border px-4 py-2 text-sm uppercase transition-colors ${
                  selectedAttributes[attr.name] === option 
                    ? 'border-black bg-black text-white' 
                    : 'border-gray-200 text-gray-700 hover:border-black'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Quantity & Add to Cart */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <div className="flex items-center border border-gray-200 sm:w-32">
          <button 
            type="button" 
            onClick={() => handleQuantityChange('dec')}
            className="p-3 text-gray-500 hover:text-black transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          <input 
            type="number" 
            value={quantity} 
            readOnly 
            className="w-full text-center font-semibold focus:outline-none"
          />
          <button 
            type="button" 
            onClick={() => handleQuantityChange('inc')}
            className="p-3 text-gray-500 hover:text-black transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <button 
          onClick={handleAddToCart}
          className="flex-grow bg-black text-white py-4 px-6 font-semibold uppercase tracking-wide hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
      
      <button 
        onClick={() => {
           addToCart(product, quantity, selectedAttributes);
           router.push('/checkout');
        }}
        className="w-full bg-zinc-100 text-black border border-zinc-200 py-4 font-semibold uppercase tracking-wide hover:bg-zinc-200 transition-colors"
      >
        Buy it Now
      </button>
    </div>
  );
}
