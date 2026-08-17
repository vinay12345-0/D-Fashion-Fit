import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WooCommerceProduct } from '@/lib/mock-data';

export default function ProductCard({ product }: { product: WooCommerceProduct }) {
  const mainImage = product.images[0]?.src || 'https://picsum.photos/seed/placeholder/800/1000';
  const hasMultipleImages = product.images.length > 1;
  const hoverImage = hasMultipleImages ? product.images[1].src : mainImage;

  return (
    <div className="group cursor-pointer flex flex-col">
      <Link href={`/product/${product.slug}`} className="relative aspect-[3/4] overflow-hidden bg-[#F3F3F3] mb-4 block">
        <Image 
          src={mainImage} 
          alt={product.name} 
          fill 
          className="object-cover transition-opacity duration-300 group-hover:opacity-0" 
          referrerPolicy="no-referrer" 
        />
        <Image 
          src={hoverImage} 
          alt={`${product.name} alternate view`} 
          fill 
          className="object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
          referrerPolicy="no-referrer" 
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product.on_sale && (
            <span className="bg-black text-white text-[9px] font-bold uppercase px-2 py-1 tracking-widest">Sale</span>
          )}
          {product.categories.some(c => c.slug === 'new-arrivals') && (
             <span className="bg-white border border-black text-black text-[9px] font-bold uppercase px-2 py-1 tracking-widest">New</span>
          )}
        </div>
        
        {/* Hover action (Quick Add style) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform bg-white/90 backdrop-blur-sm z-20">
          <button className="w-full text-[10px] uppercase tracking-widest font-bold py-2 border border-black hover:bg-black hover:text-white transition-colors">
            Quick Add
          </button>
        </div>
      </Link>
      
      <div className="flex flex-col flex-grow text-center">
        <h3 className="text-[12px] font-bold uppercase tracking-wider mb-1 line-clamp-1">
          <Link href={`/product/${product.slug}`} className="hover:text-slate-500 transition-colors">{product.name}</Link>
        </h3>
        <div className="mt-auto flex justify-center items-center gap-2">
          {product.on_sale ? (
            <>
              <span className="text-[12px] text-slate-900 font-bold">${parseFloat(product.sale_price).toFixed(2)}</span>
              <span className="text-[12px] text-slate-400 line-through">${parseFloat(product.regular_price).toFixed(2)}</span>
            </>
          ) : (
            <span className="text-[12px] text-slate-500 font-medium">${parseFloat(product.price).toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
