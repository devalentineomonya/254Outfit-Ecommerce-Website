"use client";
import React, { useEffect } from "react";
import HeroCarouselItem from "./HeroCarouselItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { useIsMobile } from "@/hooks/useMobile";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroCarousel = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      .hero-nav-button::before,
      .hero-nav-button::after {
        display: none !important;
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="w-full md:w-2/3 h-full relative">
      <Swiper
        className="h-full"
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
          disabledClass: "opacity-50",
        }}
        pagination={{
          clickable: true,
          renderBullet: (_, className) => {
            return `
              <span class="${className} w-3.5 h-3.5 rounded-full inline-flex items-center justify-center
              bg-gray-200 [&.swiper-pagination-bullet-active]:bg-white [&.swiper-pagination-bullet-active]:px-2
              [&.swiper-pagination-bullet-active]:rounded-md duration-300 transition-all ease-in-out"></span>
            `;
          },
        }}
        slidesPerView={1}
      >
        {[...Array(4)].map((_, index) => (
          <SwiperSlide className="min-h-72" key={index}>
            <HeroCarouselItem />
          </SwiperSlide>
        ))}
      </Swiper>

      {!isMobile && (
        <>
          <button
            className="hero-prev hero-nav-button absolute left-0 top-1/2 -translate-y-1/2 z-10
              text-white rounded-full p-2 transition-all"
            style={{
              fontFamily: "monospace",
              fontSize: "14px",
              marginLeft: "10px",
            }}
          >
            <GoChevronLeft size={28} />
          </button>
          <button
            className="hero-next hero-nav-button absolute right-0 top-1/2 -translate-y-1/2 z-10
              text-white rounded-full p-2 transition-all"
            style={{
              fontFamily: "monospace",
              fontSize: "14px",
              marginRight: "10px",
            }}
          >
            <GoChevronRight size={28} />
          </button>
        </>
      )}
    </div>
  );
};

export default HeroCarousel;
