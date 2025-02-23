"use client";

import ProductCard from "@/components/common/card/ProductCard";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const SaleProduct = () => {
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
          Top Weekly Vendors
        </h1>
        <div className="flex items-center gap-2">
          <button
            className="sale-swiper-button-prev custom-nav-button"
            style={{ position: "static", color: "#666666" }}
          >
            <GoChevronLeft size={24} />
          </button>
          <button
            className="sale-swiper-button-next custom-nav-button"
            style={{ position: "static", color: "#666666" }}
          >
             <GoChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="slider-nav-outer">
        <Swiper
          modules={[Navigation]}
          effect="slide"
          spaceBetween={10}
          slidesPerView={5}
                 navigation={{
            nextEl: ".sale-swiper-button-next",
            prevEl: ".sale-swiper-button-prev",
            disabledClass: "opacity-50",
          }}
          breakpoints={{
            1200: { slidesPerView: 5 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            576: { slidesPerView: 2.5 },
            0: { slidesPerView: 1.5 },
          }}
          className="slider-nav-outer"
        >
          {[...Array(7)].map((_, index) => (
            <SwiperSlide key={index}>
              <ProductCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SaleProduct;
