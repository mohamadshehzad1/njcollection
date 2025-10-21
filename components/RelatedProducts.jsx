"use client";

import Link from "next/link";
import products from "../data/products";

/**
 * RelatedProducts Component
 * ---
 * ✅ Matches AllProducts layout and design
 * ✅ Subtle divider for elegant separation
 * ✅ Consistent fonts, spacing, and image proportions
 * ✅ Smooth hover transitions
 * ✅ No rounded corners
 */
export default function RelatedProducts({ currentProductId }) {
  // Identify the current product
  const currentProduct = products.find((p) => p.id === currentProductId);

  // Get related products (same category or random fallback)
  let relatedProducts = [];
  if (currentProduct?.category) {
    relatedProducts = products.filter(
      (p) => p.category === currentProduct.category && p.id !== currentProductId
    );
  }
  if (relatedProducts.length === 0) {
    relatedProducts = products
      .filter((p) => p.id !== currentProductId)
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
  }

  if (!relatedProducts.length) return null;

  return (
    <section className="relative mt-24 mb-24  py-20 px-4 md:px-8 border-t border-gray-200">
      <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center text-gray-900 tracking-wide">
        Related Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 justify-items-center">
        {relatedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group w-full max-w-[280px] block text-center"
          >
            {/* Product Image */}
            <div className="overflow-hidden border border-gray-100">
              <img
                src={product.image || product.images?.[0]}
                alt={product.name}
                className="object-cover w-full aspect-[3/4] group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>

            {/* Product Info */}
            <div className="mt-4">
              <h3 className="text-base md:text-lg text-gray-900 font-medium group-hover:opacity-90 transition-opacity">
                {product.name}
              </h3>
              <p className="text-sm md:text-base text-gray-600 mt-1">
                Rs {product.price?.toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
