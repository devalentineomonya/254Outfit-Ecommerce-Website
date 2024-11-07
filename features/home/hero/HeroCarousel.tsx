"use client";
import React from "react";
import HeroCarouselItem from "./HeroCarouselItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { useIsMobile } from "@/hooks/useMobile";

const HeroCarousel = () => {
  const isMobile = useIsMobile();
  return (
    <div className="w-full md:w-2/3 h-full">
      <Swiper
        className="h-full"
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation={isMobile ? false : {
          
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          disabledClass: "opacity-50",
          
        }}
        pagination={{ 
          clickable: true,
        }}
        slidesPerView={1}
        color="white"
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          992: { slidesPerView: 1 },
        }}
      >
        <SwiperSlide className="h-ful">
          <HeroCarouselItem />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <HeroCarouselItem />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <HeroCarouselItem />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <HeroCarouselItem />
        </SwiperSlide>
        <button
          style={{ color: "white", fontFamily:"monospace", fontWeight:"thin", fontSize:"14px", marginLeft:"10px" }}
          className="swiper-button-prev absolute  z-10 text-white bg-opacity-50 hover:bg-opacity-100 rounded-full p-2 hidden md:inline-block"
        >
          <GoChevronLeft size={14} />
        </button>
        <button
          style={{ color: "white", fontFamily:"monospace", fontWeight:"thin", fontSize:"14px", marginRight:"10px"}}
          className="swiper-button-next absolute  z-10 text-white bg-opacity-50 hover:bg-opacity-100 rounded-full p-2 hidden md:inline-block"
        >
          <GoChevronRight size={14} />
        </button>
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
