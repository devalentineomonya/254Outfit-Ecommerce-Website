"use client";
import React, { useEffect } from "react";
import CollectionProductCard from "../components/CollectionProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";


export const CollectionWidget = () => {
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
    <section className="col-span-12 md:col-span-4 p-3 bg-white aspect-video">
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-base md:text-lg capitalize whitespace-nowrap mb-2">
          Popular Departments
        </h1>
        <div className="flex items-center">
          <button
            style={{
              position: "static",
              color: "#666666",

            }}
            className="collection-swiper-button-prev custom-nav-button"
          >
            <GoChevronLeft size={24} />
          </button>
          <button
            style={{
              position: "static",
              color: "#666666",
            }}
            className="collection-swiper-button-next custom-nav-button"
          >
            <GoChevronRight size={24} />
          </button>
        </div>
      </div>
      <div className="h-full ">
        <Swiper
         className="h-full grid grid-cols-2 xs:grid-cols-3 md:grid-cols-2 lg:grid-cols-3"
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          navigation={{
            nextEl: ".collection-swiper-button-next",
            prevEl: ".collection-swiper-button-prev",
            disabledClass: "opacity-50",
          }}
          breakpoints={{
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide className="h-full">
            <CollectionProductCard />
          </SwiperSlide>
          <SwiperSlide  className="h-full">
            <CollectionProductCard />
          </SwiperSlide>
          <SwiperSlide  className="h-full">
            <CollectionProductCard />
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
};
