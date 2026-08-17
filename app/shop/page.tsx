import React from 'react';
import { getProducts, mockCategories } from '@/lib/mock-data';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold uppercase tracking-tighter mb-8 text-center">Shop All</h1>
        
        {/* Basic Filter/Nav */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link href="/shop" className="text-sm font-semibold uppercase tracking-wider border-b-2 border-black pb-1">
            All
          </Link>
          {mockCategories.map(cat => (
            <Link 
              key={cat.id} 
              href={`/shop/${cat.slug}`}
              className="text-sm font-semibold uppercase tracking-wider text-gray-500 hover:text-black transition-colors border-b-2 border-transparent pb-1"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        <div className="flex justify-between items-center mb-6 text-sm text-gray-500">
          <span>Showing all {products.length} results</span>
          <select className="border border-gray-200 py-2 px-4 bg-transparent outline-none">
            <option>Sort by latest</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
