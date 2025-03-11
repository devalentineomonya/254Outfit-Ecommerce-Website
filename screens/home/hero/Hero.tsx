import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroCountDown from "./HeroCountDown";

const Hero = () => {
  return (
    <section className="w-full aspect-video  md:max-h-[350px] lg:max-h-[400px] xl:max-h-[450px]  mt-5 flex flex-col md:flex-row items-center gap-4">
      <HeroCarousel />
      <div className="w-full md:w-1/3 bg-[#F7CC60] max-h-52 md:max-h-none h-full rounded-lg grid place-content-center ">
        <HeroCountDown />
      </div>
    </section>
  );
};

export default Hero;
