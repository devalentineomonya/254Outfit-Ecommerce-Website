import React from "react";
import Hero from "@/screens/home/hero/Hero";
import Collections from "@/screens/home/collections/Collections";
import Banner from "@/screens/home/banner/Banner";
import ForYouSlider from "@/screens/home/foryou/ForYouSlider";
import TopVendor from "@/screens/home/topvendor/TopVendor";
import SaleProduct from "@/screens/home/saleproduct/SaleProduct";
import TrustedBy from "@/screens/home/trustedby/TrustedBy";
import OurArticles from "@/screens/home/ourarticles/OurArticles";

const Home = () => {
  return (
    <main className="w-full h-fit p-2 lg:p-0">
      <Hero />
      <Collections />
      <Banner />
      <ForYouSlider />
      <TopVendor />
      <SaleProduct />
      <TrustedBy />
      <OurArticles />
    </main>
  );
};

export default Home;
