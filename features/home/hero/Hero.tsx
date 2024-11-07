import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroCountDown from "./HeroCountDown";

const Hero = () => {
  return (
    <section className="w-full aspect-video max-h-[450px]  mt-5 flex flex-col md:flex-row items-center gap-4">
      <HeroCarousel />
      <div className="w-full md:w-1/3 bg-[#F7CC60] h-full rounded-lg p-4 ">
        <HeroCountDown />
      </div>
    </section>
  );
};

export default Hero;
