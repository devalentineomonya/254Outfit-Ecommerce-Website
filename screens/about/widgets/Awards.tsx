"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from "next/image"
const awards = [
  {
    image: '/path-to-image1.png',
    title: 'Winner Seo Master MAGT',
    subtitle: 'Smart Start Award 2018'
  },
  {
    image: '/path-to-image2.png',
    title: 'Top Social Media Agencies',
    subtitle: 'Next Partner 2019'
  },
  {
    image: '/path-to-image3.png',
    title: '5 Fastest Growing Abstract',
    subtitle: 'Solution Providers 2020'
  },
  {
    image: '/path-to-image4.png',
    title: 'National Excellence Agencie',
    subtitle: 'Award Winner 2021'
  }
];

const Awards = () => {
  return (
    <section className="px-4 py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-12">Awards</h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
        modules={[Pagination]}
        className="max-w-5xl mx-auto"
      >
        {awards.map((award, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <Image src={award.image} alt={award.title} className="w-16 h-16 mb-4" />
            <div className="text-xl font-semibold">{award.title}</div>
            <div className="text-gray-600">{award.subtitle}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Awards;
