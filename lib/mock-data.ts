export interface WooCommerceProduct {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  type: 'simple' | 'variable';
  status: 'publish';
  featured: boolean;
  catalog_visibility: 'visible';
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  purchasable: boolean;
  stock_status: 'instock' | 'outofstock';
  images: { id: number; src: string; alt: string }[];
  categories: { id: number; name: string; slug: string }[];
  attributes: { id: number; name: string; options: string[] }[];
}

export const mockCategories = [
  { id: 1, name: 'Men', slug: 'men' },
  { id: 2, name: 'Women', slug: 'women' },
  { id: 3, name: 'Kids', slug: 'kids' },
  { id: 4, name: 'Accessories', slug: 'accessories' },
  { id: 5, name: 'New Arrivals', slug: 'new-arrivals' },
  { id: 6, name: 'Special Edition', slug: 'special-edition' },
];

export const mockProducts: WooCommerceProduct[] = [
  {
    id: 101,
    name: 'Classic White T-Shirt',
    slug: 'classic-white-t-shirt',
    permalink: '/product/classic-white-t-shirt',
    type: 'variable',
    status: 'publish',
    featured: true,
    catalog_visibility: 'visible',
    description: '<p>A staple for any wardrobe, this classic white t-shirt is made from 100% premium cotton.</p>',
    short_description: '<p>100% premium cotton classic white t-shirt.</p>',
    sku: 'TSHIRT-WHT',
    price: '29.99',
    regular_price: '29.99',
    sale_price: '',
    on_sale: false,
    purchasable: true,
    stock_status: 'instock',
    images: [
      { id: 1, src: 'https://picsum.photos/seed/shirt1/800/1000', alt: 'Classic White T-Shirt Front' },
      { id: 2, src: 'https://picsum.photos/seed/shirt1_back/800/1000', alt: 'Classic White T-Shirt Back' }
    ],
    categories: [{ id: 1, name: 'Men', slug: 'men' }, { id: 5, name: 'New Arrivals', slug: 'new-arrivals' }],
    attributes: [
      { id: 1, name: 'Size', options: ['S', 'M', 'L', 'XL'] },
      { id: 2, name: 'Color', options: ['White'] }
    ]
  },
  {
    id: 102,
    name: 'Elegant Evening Dress',
    slug: 'elegant-evening-dress',
    permalink: '/product/elegant-evening-dress',
    type: 'variable',
    status: 'publish',
    featured: true,
    catalog_visibility: 'visible',
    description: '<p>Stand out at your next event with this stunning elegant evening dress featuring a sweeping silhouette.</p>',
    short_description: '<p>Stunning elegant evening dress for special occasions.</p>',
    sku: 'DRESS-EVE-BLK',
    price: '129.99',
    regular_price: '149.99',
    sale_price: '129.99',
    on_sale: true,
    purchasable: true,
    stock_status: 'instock',
    images: [
      { id: 3, src: 'https://picsum.photos/seed/dress1/800/1000', alt: 'Elegant Evening Dress' }
    ],
    categories: [{ id: 2, name: 'Women', slug: 'women' }, { id: 6, name: 'Special Edition', slug: 'special-edition' }],
    attributes: [
      { id: 1, name: 'Size', options: ['XS', 'S', 'M', 'L'] },
      { id: 2, name: 'Color', options: ['Black', 'Navy'] }
    ]
  },
  {
    id: 103,
    name: 'Kids Denim Jacket',
    slug: 'kids-denim-jacket',
    permalink: '/product/kids-denim-jacket',
    type: 'simple',
    status: 'publish',
    featured: false,
    catalog_visibility: 'visible',
    description: '<p>Durable and stylish denim jacket for kids. Perfect for layering.</p>',
    short_description: '<p>Stylish denim jacket for kids.</p>',
    sku: 'KIDS-JKT-DEN',
    price: '45.00',
    regular_price: '45.00',
    sale_price: '',
    on_sale: false,
    purchasable: true,
    stock_status: 'instock',
    images: [
      { id: 4, src: 'https://picsum.photos/seed/kids1/800/1000', alt: 'Kids Denim Jacket' }
    ],
    categories: [{ id: 3, name: 'Kids', slug: 'kids' }],
    attributes: [
      { id: 1, name: 'Size', options: ['4Y', '6Y', '8Y', '10Y'] }
    ]
  },
  {
    id: 104,
    name: 'Leather Crossbody Bag',
    slug: 'leather-crossbody-bag',
    permalink: '/product/leather-crossbody-bag',
    type: 'simple',
    status: 'publish',
    featured: true,
    catalog_visibility: 'visible',
    description: '<p>Genuine leather crossbody bag with adjustable strap and multiple compartments.</p>',
    short_description: '<p>Genuine leather crossbody bag.</p>',
    sku: 'BAG-XB-LTHR',
    price: '89.50',
    regular_price: '89.50',
    sale_price: '',
    on_sale: false,
    purchasable: true,
    stock_status: 'instock',
    images: [
      { id: 5, src: 'https://picsum.photos/seed/bag1/800/1000', alt: 'Leather Crossbody Bag' }
    ],
    categories: [{ id: 4, name: 'Accessories', slug: 'accessories' }, { id: 5, name: 'New Arrivals', slug: 'new-arrivals' }],
    attributes: [
      { id: 2, name: 'Color', options: ['Brown', 'Black'] }
    ]
  },
  {
    id: 105,
    name: 'Summer Floral Shirt',
    slug: 'summer-floral-shirt',
    permalink: '/product/summer-floral-shirt',
    type: 'variable',
    status: 'publish',
    featured: false,
    catalog_visibility: 'visible',
    description: '<p>Lightweight summer shirt with a vibrant floral pattern. Ideal for beach days.</p>',
    short_description: '<p>Vibrant floral summer shirt.</p>',
    sku: 'SHIRT-FLR-SUM',
    price: '34.99',
    regular_price: '34.99',
    sale_price: '',
    on_sale: false,
    purchasable: true,
    stock_status: 'instock',
    images: [
      { id: 6, src: 'https://picsum.photos/seed/shirt2/800/1000', alt: 'Summer Floral Shirt' }
    ],
    categories: [{ id: 1, name: 'Men', slug: 'men' }],
    attributes: [
      { id: 1, name: 'Size', options: ['M', 'L', 'XL', 'XXL'] }
    ]
  },
  {
    id: 106,
    name: 'High-Waist Yoga Leggings',
    slug: 'high-waist-yoga-leggings',
    permalink: '/product/high-waist-yoga-leggings',
    type: 'variable',
    status: 'publish',
    featured: true,
    catalog_visibility: 'visible',
    description: '<p>Comfortable, stretchy, and opaque high-waist leggings for yoga or everyday wear.</p>',
    short_description: '<p>Stretchy high-waist yoga leggings.</p>',
    sku: 'LEG-YOGA-HW',
    price: '49.99',
    regular_price: '59.99',
    sale_price: '49.99',
    on_sale: true,
    purchasable: true,
    stock_status: 'instock',
    images: [
      { id: 7, src: 'https://picsum.photos/seed/leggings1/800/1000', alt: 'High-Waist Yoga Leggings' }
    ],
    categories: [{ id: 2, name: 'Women', slug: 'women' }, { id: 5, name: 'New Arrivals', slug: 'new-arrivals' }],
    attributes: [
      { id: 1, name: 'Size', options: ['XS', 'S', 'M', 'L'] },
      { id: 2, name: 'Color', options: ['Black', 'Olive', 'Maroon'] }
    ]
  },
  {
    id: 107,
    name: 'Classic Aviator Sunglasses',
    slug: 'classic-aviator-sunglasses',
    permalink: '/product/classic-aviator-sunglasses',
    type: 'simple',
    status: 'publish',
    featured: false,
    catalog_visibility: 'visible',
    description: '<p>Timeless aviator sunglasses with UV400 protection and polarized lenses.</p>',
    short_description: '<p>Polarized aviator sunglasses.</p>',
    sku: 'SUN-AVI-CLS',
    price: '24.99',
    regular_price: '24.99',
    sale_price: '',
    on_sale: false,
    purchasable: true,
    stock_status: 'instock',
    images: [
      { id: 8, src: 'https://picsum.photos/seed/sunglasses1/800/1000', alt: 'Aviator Sunglasses' }
    ],
    categories: [{ id: 4, name: 'Accessories', slug: 'accessories' }],
    attributes: []
  },
  {
    id: 108,
    name: 'Kids Graphic Print Tee',
    slug: 'kids-graphic-print-tee',
    permalink: '/product/kids-graphic-print-tee',
    type: 'variable',
    status: 'publish',
    featured: true,
    catalog_visibility: 'visible',
    description: '<p>Fun and colorful graphic print t-shirt for kids, made from soft, breathable cotton.</p>',
    short_description: '<p>Soft cotton graphic tee for kids.</p>',
    sku: 'KIDS-TEE-GRP',
    price: '19.50',
    regular_price: '19.50',
    sale_price: '',
    on_sale: false,
    purchasable: true,
    stock_status: 'instock',
    images: [
      { id: 9, src: 'https://picsum.photos/seed/kids2/800/1000', alt: 'Kids Graphic Tee' }
    ],
    categories: [{ id: 3, name: 'Kids', slug: 'kids' }, { id: 5, name: 'New Arrivals', slug: 'new-arrivals' }],
    attributes: [
      { id: 1, name: 'Size', options: ['2Y', '4Y', '6Y', '8Y'] },
      { id: 2, name: 'Color', options: ['Yellow', 'Blue', 'Green'] }
    ]
  }
];

export async function getProducts(categorySlug?: string): Promise<WooCommerceProduct[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  if (categorySlug) {
    return mockProducts.filter(p => p.categories.some(c => c.slug === categorySlug));
  }
  return mockProducts;
}

export async function getProduct(slug: string): Promise<WooCommerceProduct | undefined> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockProducts.find(p => p.slug === slug);
}
