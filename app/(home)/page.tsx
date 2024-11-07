import React from "react";
import Hero from "@/features/home/hero/Hero";
import Collections from "@/features/home/collections/Collections";
import Banner from "@/features/home/banner/Banner";
import ForYouSlider from "@/features/home/ForYou/ForYouSlider";

const Home = () => {
  return (
    <main className="w-full h-fit p-2 lg:p-0">
      <Hero />
      <Collections />
      <Banner />
      <ForYouSlider/>
    </main>
  );
};

export default Home;
