"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,EffectFade } from "swiper/modules";
import ArticleCard from "../components/ArticleCard";

const OurArticles = () => {
  return (
    <section className="mt-12">
      <div className="flex items-center mb-4">
        <h1 className="font-semibold text-gray-800 text-2xl">Our Articles</h1>

      </div>

      <div className="slider-nav-outer slider-nav-fade">
        <Swiper
          modules={[Pagination, EffectFade]}
          effect="slide"
          spaceBetween={20}
          slidesPerView={4}
          navigation={{
            nextEl: ".articles-next",
            prevEl: ".articles-prev",
            disabledClass: "opacity-50 cursor-not-allowed"
          }}
          pagination={{
            clickable: true,
            el: '.articles-pagination',
            renderBullet: (_, className) => {
              return `
                <span class="${className} w-3.5 h-3.5 rounded-full inline-flex items-center justify-center
                 bg-gray-500 [&.swiper-pagination-bullet-active]:bg-blue-600 [&.swiper-pagination-bullet-active]:px-2
                  [&.swiper-pagination-bullet-active]:rounded-md duration-500 transition-all ease-in-out"></span>
              `;
            },
          }}
          breakpoints={{
            992: { slidesPerView: 4 },
            768: { slidesPerView: 2.5 },
            576: { slidesPerView: 2 },
            0: { slidesPerView: 1 }
          }}
          className="slider-nav-outer"
        >
          {[...Array(4)].map((_, index) => (
            <SwiperSlide key={index}>
              <ArticleCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination container */}
      <div className="articles-pagination flex justify-center gap-[0.375rem] mt-4" />
    </section>
  );
};

export default OurArticles;
