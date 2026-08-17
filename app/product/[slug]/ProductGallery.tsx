'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: { id: number; src: string; alt: string }[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400">No Image Available</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 shrink-0 no-scrollbar">
          {images.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => setMainImageIndex(idx)}
              className={`relative aspect-[3/4] w-20 md:w-full border-2 overflow-hidden ${
                mainImageIndex === idx ? 'border-black' : 'border-transparent'
              }`}
            >
              <Image 
                src={img.src} 
                alt={`${productName} thumbnail ${idx + 1}`} 
                fill 
                className="object-cover" 
                referrerPolicy="no-referrer"
              />
            </button>
          ))}
        </div>
      )}
      
      {/* Main Image */}
      <div className="relative aspect-[3/4] flex-grow bg-gray-50">
        <Image 
          src={images[mainImageIndex].src} 
          alt={images[mainImageIndex].alt || productName} 
          fill 
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
