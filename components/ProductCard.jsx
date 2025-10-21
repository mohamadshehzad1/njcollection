import React from "react";
import Link from "next/link";

/**
 * ProductCard Component
 * ---------------------
 * ✅ Matches the clean, elegant NJ Collection product grid layout.
 * ✅ Shows image, name, and price (no buttons or heavy effects).
 * ✅ Subtle hover scale effect to maintain a premium aesthetic.
 * ✅ Fully reusable for AllProducts, RelatedProducts, etc.
 */

const ProductCard = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      {/* Product Image */}
      <Link href={`/products/${product.id}`} aria-label={product.name}>
        <div className="overflow-hidden">
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <h3 className="text-[15px] md:text-[16px] text-gray-900 font-medium tracking-wide">
          {product.name}
        </h3>
        {product.price && (
          <p className="text-[14px] text-gray-700 mt-1">
            Rs {product.price.toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
