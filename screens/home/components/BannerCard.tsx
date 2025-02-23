import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import Image8 from "@/public/products/image8.png"
import Image  from "next/image"
const BannerCard = ()=> {
  return (
    <figure className="h-40 lg:h-[205px] min-h-40 max-h-[205px] rounded-md grid grid-cols-12 overflow-hidden relative isolate text-white">
      <div className="col-span-6 md:col-span-7 h-full pr-2">
        <Image fill src={Image8}  alt="Sales Banner" className="absolute object-cover -z-10"/>
      </div>
      <div className="col-span-6 md:col-span-5 h-full grid place-content-center">
        <h6 className="text-xs lg:text-sm xl:text-lg font-normal uppercase pt-3">Best Seller</h6>
        <h2 className=" font-semibold text-base lg:text2xl  xl:text-3xl capitalize my-2 ">
          New Collections
        </h2>
        <div>
          <p className="text-xs xl:text-base">
            Sale at <span>30% OFF</span>
          </p>
        </div>
        <Link

          className="  text-white md:text-blue-700 md:hover:bg-gray-50 md:bg-white px-3 py-2 text-sm rounded-full flex items-center justify-start gap-x-3 mt-2 max-w-32"
          href="/shop"
        >
          <span>Shop Now</span>
          <div className="w-5 hidden aspect-square rounded-full md:grid place-content-center bg-blue-700 hover:bg-blue-700/95 text-white ">
            <BiChevronRight size={20} />
          </div>
        </Link>
      </div>
    </figure>
  );
};

export default BannerCard;
