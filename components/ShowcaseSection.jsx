"use client";
import React from "react";
import Image from "next/image";

const ShowcaseSection = () => {
  return (
    <section className="relative w-full border-t border-gray-200 mt-20 pt-12">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <p className="text-lg md:text-xl text-gray-700 font-light italic mb-12">
          "Originality, exquisite craftsmanship and extraordinary attention to detail, define us."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* --- Column 1 --- */}
          <div className="relative">
            <Image
              src="/assets/ts018056.jpg"
              alt="Luxury Kaftan"
              width={688}
              height={766}
              className="mx-auto object-cover rounded-lg w-[456px] h-[500px] md:w-[688px] md:h-[766px]"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
              <p className="text-sm uppercase tracking-wide">New Arrival</p>
              <h3 className="text-xl font-medium mt-1 mb-2">Luxury Kaftan</h3>
              <a
                href="/products/AllProducts"
                className="text-sm underline tracking-wide hover:text-gray-200"
              >
                Shop Now
              </a>
            </div>
          </div>

          {/* --- Column 2 --- */}
          <div className="relative">
            <Image
              src="/assets/ts017282.jpg"
              alt="Timeless Prints"
              width={688}
              height={766}
              className="mx-auto object-cover rounded-lg w-[456px] h-[500px] md:w-[688px] md:h-[766px]"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
              <p className="text-sm uppercase tracking-wide">Signature Collection</p>
              <h3 className="text-xl font-medium mt-1 mb-2">Timeless Prints</h3>
              <a
                href="/products/AllProducts"
                className="text-sm underline tracking-wide hover:text-gray-200"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
