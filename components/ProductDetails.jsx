import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const ProductDetails = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [quantity, setQuantity] = useState(1);

  const phoneNumber = "923369766237";
  const message = `
Hi! I'm interested in ${product.name}.
Size: ${selectedSize || "Not selected"}
Style: ${selectedStyle || "Not selected"}
Quantity: ${quantity}
Price: ${product.price}
  `.trim();

  return (
    <div className="space-y-8">
      {/* Product Name and Price */}
      <div>
        <h1 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 uppercase">
          {product.name}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-3 font-light">
          Rs. {product.price}
        </p>
      </div>

      <hr className="border-gray-300" />

      {/* Size Selection */}
      <div>
        <h4 className="font-medium text-gray-800 mb-3 tracking-wide uppercase text-sm">
          Size
        </h4>
        <div className="flex flex-wrap gap-3">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 text-sm border transition-all duration-200 ${
                selectedSize === size
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 text-gray-700 hover:border-gray-500"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Style Selection */}
      <div>
        <h4 className="font-medium text-gray-800 mb-3 tracking-wide uppercase text-sm">
          Style
        </h4>
        <div className="flex flex-wrap gap-3">
          {["Without Sleeves", "With Sleeves"].map((style) => (
            <button
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`px-4 py-2 text-sm border transition-all duration-200 ${
                selectedStyle === style
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 text-gray-700 hover:border-gray-500"
              }`}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <h4 className="font-medium text-gray-800 mb-3 tracking-wide uppercase text-sm">
          Quantity
        </h4>
        <div className="inline-flex items-center border border-gray-300">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-2 text-lg hover:bg-gray-100 transition"
          >
            –
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, parseInt(e.target.value) || 1))
            }
            className="w-12 text-center text-gray-800 outline-none"
          />
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-2 text-lg hover:bg-gray-100 transition"
          >
            +
          </button>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-green-600 text-white px-5 py-3 rounded-md text-sm md:text-base hover:bg-green-700 transition-all shadow-md w-full sm:w-auto"
      >
        <FaWhatsapp className="text-lg" />
        Chat on WhatsApp
      </a>

      {/* Product Details */}
      <div className="pt-4 border-t border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-3 uppercase text-sm tracking-wide">
          Product Details
        </h3>
        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          {product.details && product.details.length > 0 ? (
            product.details.map((detail, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-gray-800">•</span>
                <span>{detail}</span>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No additional details available.</li>
          )}
        </ul>
      </div>

      {/* Description */}
      {product.description && (
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 uppercase text-sm tracking-wide">
            Description
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {product.description}
          </p>
        </div>
      )}

      {/* Shipping */}
      {product.shipping && (
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 uppercase text-sm tracking-wide">
            Shipping
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {product.shipping}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
