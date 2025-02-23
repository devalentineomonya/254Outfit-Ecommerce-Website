"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import VendorCard from "../components/VendorCard";

const TopVendor = () => {
  return (
    <section className="mt-12">
      <h1 className="mb-4 font-semibold text-gray-800 text-2xl">
        Top Weekly Vendors
      </h1>
      <div className="bg-white p-3">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            1200: { slidesPerView: 5 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            576: { slidesPerView: 2.5 },
            0: { slidesPerView: 1.5 },
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            renderBullet: (_, className) => {
              return `
                <span class="${className} w-3.5 h-3.5 rounded-full inline-flex items-center justify-center bg-gray-500 [&.swiper-pagination-bullet-active]:bg-blue-600 [&.swiper-pagination-bullet-active]:px-2 [&.swiper-pagination-bullet-active]:rounded-md duration-500 transition-all ease-in-out"></span>
              `;
            },
          }}
          className="w-full"
        >
          {[...Array(6)].map((_, index) => (
            <SwiperSlide key={index}>
              <VendorCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="custom-pagination flex justify-center gap-[0.375rem] mt-4" />
    </section>
  );
};

export default TopVendor;
