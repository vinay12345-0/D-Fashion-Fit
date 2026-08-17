import React from 'react';
import { notFound } from 'next/navigation';
import { getProduct, getProducts } from '@/lib/mock-data';
import AddToCartForm from './AddToCartForm';
import ProductCard from '@/components/ProductCard';
import ProductGallery from './ProductGallery';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Get related products
  const allProducts = await getProducts();
  const relatedProducts = allProducts
    .filter(p => p.id !== product.id && p.categories.some(c => product.categories.some(pc => pc.id === c.id)))
    .slice(0, 4);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          
          {/* Image Gallery */}
          <ProductGallery images={product.images} productName={product.name} />

          {/* Product Info */}
          <div>
            <div className="mb-2 text-xs text-gray-500 uppercase tracking-widest">
              {product.categories.map(c => c.name).join(' / ')}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              {product.on_sale ? (
                <>
                  <span className="text-2xl text-red-600 font-bold">${parseFloat(product.sale_price).toFixed(2)}</span>
                  <span className="text-lg text-gray-400 line-through">${parseFloat(product.regular_price).toFixed(2)}</span>
                </>
              ) : (
                <span className="text-2xl text-gray-900 font-bold">${parseFloat(product.price).toFixed(2)}</span>
              )}
              {product.stock_status === 'instock' ? (
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded font-semibold uppercase tracking-wider">In Stock</span>
              ) : (
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded font-semibold uppercase tracking-wider">Out of Stock</span>
              )}
            </div>

            <div 
              className="prose prose-sm text-gray-600 mb-8"
              dangerouslySetInnerHTML={{ __html: product.short_description }}
            />

            <AddToCartForm product={product} />

            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Product Details</h3>
              <div 
                className="prose prose-sm text-gray-600 max-w-none"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
              <div className="mt-6 text-xs text-gray-500 flex flex-col gap-2">
                <p><span className="font-semibold text-gray-700">SKU:</span> {product.sku}</p>
                <p><span className="font-semibold text-gray-700">Categories:</span> {product.categories.map(c => c.name).join(', ')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-12 border-t border-gray-100">
            <h2 className="text-2xl font-bold uppercase tracking-tighter mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
