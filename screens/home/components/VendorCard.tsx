import React from "react";
import { BsStarFill } from "react-icons/bs";
const VendorCard = () => {
  return (
    <div>
      <div className="flex flex-col justify-center bg-cyan-500">
        <div className="flex items-center gap-x-2">
          <div className="w-14 aspect-square bg-lime-400"></div>
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
        <div className="grid grid-cols-12 bg-purple-700 h-">
          <div className="col-span-8 bg-green-400 w-full"> </div>
          <div className="col-span-4">
            <div className="h-1/2 bg-yellow-500"></div>
            <div className="h-1/2 bg-red-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
