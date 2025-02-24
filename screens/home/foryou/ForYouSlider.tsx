"use client";

import ProductCard from "@/components/common/card/ProductCard";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const ForYouSlider = () => {
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      .custom-nav-button::before,
      .custom-nav-button::after {
        display: none !important;
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-semibold text-gray-800 text-2xl">
          Recommended For You
        </h1>
        <div className="flex items-center gap-2">
          <button
            className="for-you-prev custom-nav-button"
            style={{ position: "static", color: "#666666" }}
          >
             <GoChevronLeft size={24} />
          </button>
          <button
            className="for-you-next custom-nav-button"
            style={{ position: "static", color: "#666666" }}
          >
            <GoChevronRight size={24} />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Grid]}
        spaceBetween={10}
        slidesPerView={5}
        grid={{
          rows: 2,
          fill: "row",
        }}
        navigation={{
          nextEl: ".for-you-next",
          prevEl: ".for-you-prev",
          disabledClass: "opacity-50",
        }}
        breakpoints={{
          1200: { slidesPerView: 5 },
          992: { slidesPerView: 4 },
          768: {
            slidesPerView: 3,
            grid: { rows: 2 },
          },
          576: {
            slidesPerView: 2.5,
            grid: { rows: 2 },
          },
          0: {
            slidesPerView: 1.5,
            grid: { rows: 2 },
          },
        }}
        className="w-full flex flex-nowrap"
      >
        {[...Array(15)].map((_, index) => (
          <SwiperSlide key={index}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ForYouSlider;
