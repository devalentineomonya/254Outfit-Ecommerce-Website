import React from "react";
import Image2 from "@/public/products/image2.png";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { PiScalesThin } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import Link from "next/link";
import LoaderWrapper from "../loader/LoaderWrapper";
const ProductCard = () => {
  return (
    <div className="w-full aspect-[9/16] max-h-[438px] rounded p-2 bg-white">
      <LoaderWrapper height="h-2/3" isLoading={true}>
        <Link href="/product/ame">
          <Image
            src={Image2}
            alt="Product Image"
            priority
            className="object-cover absolute"
            fill
          />
          <div className="flex flex-col justify-start items-center gap-y-2 absolute top-2 right-2">
            <LoaderWrapper height="" isLoading={true}>
              <button className="bg-white p-2 rounded-full">
                <PiScalesThin size={24} />
              </button>
            </LoaderWrapper>
            <button className="bg-white p-3 rounded-full">
              <GoSearch />
            </button>
          </div>
        </Link>
      </LoaderWrapper>
      <article className="h-1/3  p-2">
        <h3 className="text-base font-normal text-gray-600">
          <Link href="/product/ame">Lenovo Idea Pad</Link>
        </h3>
        <div className="flex items-center justify-between my-2">
          <div className="flex items-center gap-x-0.5">
            <BsStarFill className="text-[#ff9933]" />
            <BsStarFill className="text-[#ff9933]" />
            <BsStarFill className="text-[#ff9933]" />
            <BsStarFill className="text-[#ff9933]" />
            <BsStarFill className="text-gray-300" />
            <span className="text-xs font-base text-gray-600 ml-2">2</span>
          </div>
          <p className="text-xs font-base text-gray-600 flex items-center justify-center gap-x-1">
            <FaCheck className="text-green-600" />
            <span>In Stock</span>
          </p>
        </div>
          <bdi>Kes 3,000</bdi> - <bdi>Kes 6,000</bdi>
        <p className="text-base font-medium flex items-center justify-start gap-x-2 whitespace-nowrap my-0.5 ">
        </p>
        <Link
          className="py-2 w-full text-center text-blue-500 border border-blue-500 text-sm  mt-2 inline-flex rounded items-center justify-center hover:text-white hover:bg-blue-500"
          href="/product/product-name"
        >
          Select Options
        </Link>
      </article>
    </div>
  );
};

export default ProductCard;
