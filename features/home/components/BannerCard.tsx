import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import Image8 from "@/public/products/image8.png"
import Image  from "next/image"
const BannerCard = ()=> {
  return (
    <figure className="col-span-12 md:col-span-6 h-full rounded-md grid grid-cols-12 overflow-hidden py-3 px-6 relative isolate text-white">
      <div className="col-span-7 h-full pr-2 ">
        <Image fill objectFit="cover" src={Image8}  alt="Sales Banner" className="absolute object-cover -z-10"/> 
      </div>
      <div className="col-span-5 h-full">
        <h6 className="text-lg font-normal uppercase pt-3">Best Seller</h6>
        <h2 className=" font-bold  text-3xl capitalize">
          New Collections
        </h2>
        <div>
          <p>
            Sale at <span>30% OFF</span>
          </p>
        </div>
        <Link
        
          className="   text-blue-700 hover:bg-gray-50 bg-white px-3 py-2 text-sm rounded-full flex items-center gap-x-3 mt-4 max-w-32"
          href="/shop"
        >
          <span>Shop Now</span>
          <div className="w-5 aspect-square rounded-full  grid place-content-center bg-blue-700 hover:bg-blue-700/95 text-white ">
            <BiChevronRight size={20} />
          </div>
        </Link>
      </div>
    </figure>
  );
};

export default BannerCard;
