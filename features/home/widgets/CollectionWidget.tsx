"use client"
import React from "react";
import CollectionProductCard from "../components/CollectionProductCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/bundle";

export const CollectionWidget = () => {
  return (
    <section className="col-span-12 md:col-span-4 p-3 bg-white aspect-video">
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-base md:text-lg capitalize whitespace-nowrap mb-2">
          Popular Departments
        </h1>
        <div className="flex items-center">
          <button style={{position:"static", color:"#666666",height:"1px",width:"1px", aspectRatio:1 }} className="swiper-button-prev">
            <BsChevronLeft size={10} />
          </button>
          <button style={{position:"static", color:"#666666"}} className="swiper-button-next">
            <BsChevronRight size={14} />
          </button>
        </div>
      </div>
      <div className="h-full max-h-48">
        <Swiper
        modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
     
          breakpoints={{
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            576:{
                slidesPerView:3
            },
            0:{
                slidesPerView:2
            }
          }}
        >
          <SwiperSlide>
            <CollectionProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <CollectionProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <CollectionProductCard />
          </SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>
      </div>
    </section>
  );
};