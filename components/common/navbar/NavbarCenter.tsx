"use client";
import React from "react";
import { productCategories } from "./navbarNavigation";
import { BiMenu, BiSearch } from "react-icons/bi";
import { LiaUser } from "react-icons/lia";
import { BsTelephone, BsHandbag } from "react-icons/bs";
import { useIsMobile } from "@/hooks/useMobile";
import { useSidebar } from "@/hooks/useSidebar";
import { useCart } from "@/hooks/useCart";
import Logo from "../logo/Logo";

const NavbarCenter = () => {
  const isMobile = useIsMobile();
  const { toggleSidebar } = useSidebar();
  const { openCart } = useCart();

  return (
    <section className="h-16 lg:h-20 w-full flex items-center justify-center px-4 md:px-2 sticky top-0 z-50 bg-white shadow-md lg:shadow-none lg:static">
      <div className="w-full max-w-8xl flex items-center">
        <button onClick={toggleSidebar} className="inline-block lg:hidden">
          <BiMenu size={32} />
        </button>
        <Logo />
        <div className="w-full flex-1 flex items-center justify-center px-4">
          <div className="w-full max-w-3xl min-h-11 rounded-full border px-3 hidden md:flex items-center justify-center">
            <select
              name="category"
              id="category"
              className="outline-none border-none bg-transparent pr-3 text-sm"
            >
              <option value="" defaultChecked>
                All Categories
              </option>
              {productCategories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            <div className="ml-2 border-l border-gray-400 pl-3 w-full">
              <form className="flex">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="outline-none border-none bg-transparent text-sm flex-1"
                />
                <button className="w-5 hover:text-blue-700">
                  <BiSearch size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="h-full flex items-center justify-end">
          <div className="flex items-center">
            <div className="hidden lg:flex items-center gap-x-2 pr-5 border-r border-r-gray-300">
              <BsTelephone size={isMobile ? 22 : 26} />
              <div>
                <p className="text-sm whitespace-nowrap">Call Us now:</p>
                <p className="text-base font-medium whitespace-nowrap">
                  +254 712 345 678
                </p>
              </div>
            </div>
            <div className="relative pl-4 cursor-pointer lg:hidden inline-block">
              <LiaUser size={26} />
            </div>
            <div
              className="relative pl-4 cursor-pointer"
              onClick={openCart}
            >
              <BsHandbag size={isMobile ? 22 : 26} />
              <span className="w-4 lg:w-5 aspect-square rounded-full bg-blue-700 text-white text-[10px] lg:text-sm text-center absolute -top-2 -right-2">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavbarCenter;
