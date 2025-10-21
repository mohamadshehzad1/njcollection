import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductGallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        No images available
      </div>
    );
  }

  const nextImage = () =>
    setSelectedImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full">
      {/* Main Image */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50">
        <img
          src={images[selectedImage]}
          alt={`Product image ${selectedImage + 1}`}
          className="w-full h-full object-cover transition-all duration-300 ease-in-out"
          loading="lazy"
        />

        {/* Navigation Arrows (visible only if multiple images) */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 text-gray-800 shadow-md p-2 hover:bg-white transition z-10"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 text-gray-800 shadow-md p-2 hover:bg-white transition z-10"
            >
              <FaChevronRight />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="flex mt-3 gap-3 overflow-x-auto scrollbar-hide">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 overflow-hidden border-2 transition-all duration-200 ${
                selectedImage === index
                  ? "border-gray-900"
                  : "border-transparent hover:border-gray-400"
              }`}
            >
              <img
                src={img}
                alt={`Product thumbnail ${index + 1}`}
                className="w-20 h-24 object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
