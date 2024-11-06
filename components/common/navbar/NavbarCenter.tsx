import React from "react";
import { productCategories } from "./navbarCotegories";
import { BiSearch } from "react-icons/bi";
import { BsTelephone, BsHandbag } from "react-icons/bs";
import Image from "next/image";
import Logo from "@/public/logo.png";
const NavbarCenter = () => {
  return (
    <section className="h-20 w-full flex items-center justify-center">
      <div className="w-full max-w-8xl grid grid-cols-12 ">
        <div className="col-span-1 h-full font-bold text-3xl flex items-center">
          {" "}
          <Image src={Logo} className="w-14 aspect-square" alt="Logo" />
          <span className="-ml-2">OutFit</span>
        </div>
        <div className="col-span-8 flex items-center justify-center">
          <div className="w-full max-w-3xl min-h-11 rounded-full border px-3 flex items-center justify-center">
            <select
              name="cateogry"
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
            <div className="ml-2 border-l border-gray-400  pl-3 w-full">
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
        <div className="col-span-3  h-full flex items-center justify-end">
          <div className="flex">
            <div className="flex items-center gap-x-2 pr-5 border-r border-r-gray-300">
              <BsTelephone size={32} />
              <div>
                <p className="text-sm">Call Us now:</p>
                <p className="text-base font-medium">+254 712 345 678</p>
              </div>
            </div>
            <div className="relative pl-4">
              <BsHandbag size={36} />
              <span className="w-5 aspect-square rounded-full bg-blue-700 text-white text-sm text-center absolute -top-2 -right-2">
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
