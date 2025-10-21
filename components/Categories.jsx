"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const categories = [
  {
    name: "Bridals",
    image: "/assets/ts017131.jpg",
    link: "/products/AllProducts",
  },
  {
    name: "Formals",
    image: "/assets/ts018174.jpg",
    link: "/products/AllProducts",
  },
  {
    name: "FS Luxe",
    image: "/assets/ts017861.jpg",
    link: "/products/AllProducts",
  },
  {
    name: "Menswear",
    image: "/assets/ts017987.jpg",
    link: "/products/AllProducts",
  },
];

export default function Categories() {
  return (
    <section className="bg-[#fffaf8] py-20 md:py-24 w-full">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">
        <h2 className="text-center text-[28px] md:text-[32px] font-light tracking-[3px] uppercase text-black mb-12 font-serif">
          Categories
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {categories.map((category, i) => (
            <Link
              href={category.link}
              key={i}
              className="relative group overflow-hidden cursor-pointer"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={500}
                height={600}
                className="w-full h-[550px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />

              {/* Overlay Button */}
              <div className="absolute bottom-[25px] left-1/2 -translate-x-1/2">
                <div className="border border-white text-white uppercase tracking-[2px] text-[13px] px-6 py-2 font-light transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  {category.name}
                </div>
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
            </Link>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <Swiper spaceBetween={16} slidesPerView={1.1} loop={true}>
            {categories.map((category, i) => (
              <SwiperSlide key={i}>
                <Link
                  href={category.link}
                  className="relative group overflow-hidden cursor-pointer"
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={500}
                    height={600}
                    className="w-full h-[480px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />

                  <div className="absolute bottom-[25px] left-1/2 -translate-x-1/2">
                    <div className="border border-white text-white uppercase tracking-[2px] text-[13px] px-6 py-2 font-light transition-all duration-300 group-hover:bg-white group-hover:text-black">
                      {category.name}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
