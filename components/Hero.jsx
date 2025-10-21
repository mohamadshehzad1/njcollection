import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";

const Hero = () => {
  // ✅ Use URLs instead of imports
  const desktopSlides = [
    { image: "/assets/banner1.jpg" },
    { image: "/assets/banner2.jpg" },
    { image: "/assets/banner3.jpg" },
  ];

  const mobileSlides = [
    { image: "/assets/ts017743.jpg" },
    { image: "/assets/ts017934.JPG" },
    { image: "/assets/ts017158.jpg" },
  ];

  return (
    <section className="w-full relative">
      {/* ✅ Desktop Slider */}
      <div className="hidden md:block">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".hero-pagination-desktop",
          }}
          navigation={{
            nextEl: ".hero-next-desktop",
            prevEl: ".hero-prev-desktop",
          }}
          effect="fade"
          speed={1000}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="heroSwiper"
        >
          {desktopSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <Image
                  src={slide.image}
                  alt={`desktop-slide-${index}`}
                  width={1920}
                  height={850}
                  className="w-full h-[85vh] object-cover"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button className="hero-prev-desktop absolute left-6 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/40 hover:bg-black/60 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
          <svg
            className="w-5 h-5"
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
        <button className="hero-next-desktop absolute right-6 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/40 hover:bg-black/60 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
          <svg
            className="w-5 h-5"
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

        <div className="hero-pagination-desktop absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2"></div>
      </div>

      {/* ✅ Mobile Slider */}
      <div className="block md:hidden">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".hero-pagination-mobile",
          }}
          effect="fade"
          speed={1000}
          modules={[Autoplay, Pagination, EffectFade]}
          className="heroSwiperMobile"
        >
          {mobileSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <Image
                  src={slide.image}
                  alt={`mobile-slide-${index}`}
                  width={1080}
                  height={700}
                  className="w-full h-[70vh] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hero-pagination-mobile absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2"></div>
      </div>
    </section>
  );
};

export default Hero;
