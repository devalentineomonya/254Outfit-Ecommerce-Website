import React from "react";
import image1 from "@/public/products/image6.png";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { useIsMobile } from "@/hooks/useMobile";
const HeroCarouselItem = () => {
  const isMobile = useIsMobile();
  return (
    <figure className="relative isolate w-full h-full rounded-md p-4 flex items-center justify-between flex-row-reverse
     md:flex-row gap-x-5 bg-[linear-gradient(180deg,_#0F2B28_25%,_#275f67_60%,_#5BBAB2_100%)] overflow-hidden min-h-72">
      <figure className="flex-1 w-1/2  flex items-center justify-center ">
        <Image
          className="-z-10"
          priority
          placeholder="empty"
          src={image1}
          fill={isMobile}
          objectFit="cover"
          alt="Hero image"
        />
      </figure>
      <article className="flex-1 w-full md:w-1/2 h-ful flex flex-col items-start">
        <h2 className="text-lg font-medium uppercase text-white xl:text-base whitespace-nowrap">
          New Collections
        </h2>
        <h1 className="my-0.5 mt-1 font-bold capitalize text-white text-3xl xl:text-5xl whitespace-nowrap">
          Women Wear
        </h1>
        <h6 className="flex items-center gap-x-2 text-white font-normal whitespace-nowrap">
          <span>Starting at</span>
          <p className="text-xl lg:text-2xl font-bold my-2 xl:my-3">
            Ksh 400.00
          </p>
        </h6>
        <Link
          className="bg-white px-3 py-2 text-sm rounded-full flex items-center gap-x-3"
          href="/shop"
        >
          <span>Shop Now</span>
          <div className="w-5 aspect-square rounded-full  grid place-content-center text-white bg-blue-700">
            <BiChevronRight size={20} />
          </div>
        </Link>
      </article>
    </figure>
  );
};

export default HeroCarouselItem;
