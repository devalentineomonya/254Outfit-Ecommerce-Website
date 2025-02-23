"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import partner1 from "@/public/partner1.png";
import partner2 from "@/public/partner2.png";
import partner3 from "@/public/partner3.png";
import partner4 from "@/public/partner4.png";
import partner5 from "@/public/partner5.png";
import partner6 from "@/public/partner6.png";
import partner7 from "@/public/partner4.png";
import partner8 from "@/public/partner6.png";
import Image from "next/image";

const TrustedBy = () => {
  const partners = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8];

  return (
    <section className="bg-white  mt-12">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          576: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
        className="!px-4 !py-7 flex items-center"
      >
        {partners.map((partner, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-12 w-full grayscale hover:grayscale-0 transition-all duration-300 px-4">
              <Image
                src={partner}
                alt="Partner"
                fill
                className="object-contain"
                sizes="(max-width: 576px) 100px, 150px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrustedBy;
