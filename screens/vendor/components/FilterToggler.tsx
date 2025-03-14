"use client"
import { useShopFilter } from "@/hooks/useFilter";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

const FilterToggler = () => {
 const {toggleMobileFilter}  = useShopFilter()
    return (
    <button onClick={toggleMobileFilter} className="z-40 fixed left-0 top-40 w-10 aspect-square rounded-sm bg-black/60 text-white flex items-center justify-center lg:hidden">
      <BiChevronRight size={32}/>
    </button>
  );
};

export default FilterToggler;
