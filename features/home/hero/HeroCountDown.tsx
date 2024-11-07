import React from "react";
import Image from "next/image";
import image7 from "@/public/products/image7.png";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
const HeroCountDown = () => {
  return (
    <figure className="flex flex-col justify-between md:justify-center items-center p-0 md:p-8">
      <h1 className="font-medium whitespace-nowrap text-xl xl:text-2xl text-white capitalize mb-2">Hot Deals Of The Day</h1>
      <div className="max-h-64 w-full hidden md:block">
        <Image src={image7} alt="Hero image" priority  />
      </div>
      <div className="flex items-center gap-x-2 -mt-12">
        <div className="w-14 lg:w-16 rounded-md bg-white aspect-square  shadow-sm grid place-content-center">
          <h6 className="font-medium text-black/80 text-xl">240</h6>
          <p className="font-normal text-sm text-black/50">Mins</p>
        </div>
        <div className="w-14 lg:w-16 rounded-md bg-white aspect-square  shadow-sm grid place-content-center">
          <h6 className="font-medium text-black/80 text-xl">240</h6>
          <p className="font-normal text-sm text-black/50">Mins</p>
        </div>
        <div className="w-14 lg:w-16 rounded-md bg-white aspect-square  shadow-sm grid place-content-center">
          <h6 className="font-medium text-black/80 text-xl">240</h6>
          <p className="font-normal text-sm text-black/50">Mins</p>
        </div>
        <div className="w-14 lg:w-16 rounded-md bg-white aspect-square  shadow-sm grid place-content-center">
          <h6 className="font-medium text-black/80 text-xl">240</h6>
          <p className="font-normal text-sm text-black/50">Mins</p>
        </div>
      </div>
        <Link
          className=" bg-blue-700 hover:bg-blue-700/95 text-white px-3 py-2 text-sm rounded-full flex items-center gap-x-3 mt-4"
          href="/shop"
        >
          <span>Shop Now</span>
          <div className="w-5 aspect-square rounded-full  grid place-content-center text-blue-700 hover:bg-gray-50 bg-white ">
            <BiChevronRight size={20} />
          </div>
        </Link>
    </figure>
  );
};

export default HeroCountDown;
