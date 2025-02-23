import Image from "next/image";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import vendor from "@/public/products/image12.png";
import product1 from "@/public/products/image4.png";
import product2 from "@/public/products/image11.png";
import product3 from "@/public/products/image13.png";
const VendorCard = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-x-2 mb-3">
          <div className="w-[4.5rem] aspect-square relative bg-gray-50">
            <Image
              src={vendor}
              alt="Vendor image"
              className=" object-cover"
              priority
              fill
            />
          </div>
          <div>
            <h4 className="text-sm">Outfit Vendor 1</h4>
            <div className="flex items-center gap-x-1 mt-1">
              <BsStarFill size={13} className="text-[#ff9933]" />
              <BsStarFill size={13} className="text-[#ff9933]" />
              <BsStarFill size={13} className="text-[#ff9933]" />
              <BsStarFill size={13} className="text-[#ff9933]" />
              <BsStarFill size={13} className="text-[#ff9933]" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 h-48 gap-x-2">
          <div className="col-span-8 relative w-full hover:border hover:border-blue-500 transition-all ease-in-out duration-300">
            
            <Image
              src={product1}
              alt="Vendor image"
              className="object-cover"
              priority
              fill
            />
          </div>
          <div className="col-span-4 grid grid-rows-2 gap-y-2">
            <div className="relative  hover:border hover:border-blue-500 transition-all ease-in-out duration-300">
              <Image
                src={product2}
                alt="Vendor image"
                className="object-cover"
                priority
                fill
              />
            </div>
            <div className="relative  hover:border hover:border-blue-500 transition-all ease-in-out duration-300">
              <Image
                src={product3}
                alt="Vendor image"
                className="object-cover"
                priority
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
