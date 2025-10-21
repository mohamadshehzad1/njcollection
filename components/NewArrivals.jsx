import React from "react";
import products from "../data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";

const NewArrivals = () => {
  return (
    <section className="bg-[#f7f1f0] py-20 md:py-24 w-full">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Heading */}
        <h2 className="text-center text-[28px] md:text-[32px] font-light tracking-[3px] uppercase text-black mb-3 font-serif leading-tight">
          New Arrivals
        </h2>

        {/* View All */}
        <div className="text-center mb-12">
          <Link
            href="/products/AllProducts" // ← FIXED: lowercase 'p'
            className="text-[12px] font-normal tracking-[1px] uppercase underline text-black hover:opacity-70 transition-opacity duration-300 inline-block"
          >
            View All
          </Link>
        </div>

        {/* Swiper Section */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".new-arrivals-next",
            prevEl: ".new-arrivals-prev",
          }}
          slidesPerView={1.5}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2.5, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 32 },
          }}
          loop={false}
          className="w-full px-2"
        >
          {products.slice(0, 10).map((product) => (
            <SwiperSlide key={product.id}>
              <Link href={`/products/${product.id}`}> {/* ← FIXED: Use Link instead of onClick */}
                <div className="cursor-pointer">
                  {/* Product Image */}
                  <div className="relative overflow-hidden bg-white mb-6">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={500}
                      height={500}
                      className="w-full h-[500px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="px-2">
                    <h3 className="text-[14px] font-normal tracking-[1px] uppercase text-black mb-2 leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-[14px] font-light text-black tracking-wide">
                      Rs {product.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper Navigation */}
        <div className="flex justify-center gap-5 mt-10">
          <button className="new-arrivals-prev bg-white border border-black w-[45px] h-[45px] rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
            <svg
              className="w-[18px] h-[18px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button className="new-arrivals-next bg-white border border-black w-[45px] h-[45px] rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
            <svg
              className="w-[18px] h-[18px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;