import Image, { StaticImageData } from "next/image";
import React from "react";
import image14 from "@/public/products/image14.png";
import { BsHandbag, BsStarFill } from "react-icons/bs";
import { PiScalesThin } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import Link from "next/link";
import LoaderWrapper from "../loader/LoaderWrapper";

const ProductImage = ({
  src,
  alt,
  link,
}: {
  src: string | StaticImageData;
  alt: string;
  link: string;
}) => (
  <LoaderWrapper height="h-full" isLoading={true}>
    <Link href={link} className="relative block w-full h-full ">
      <Image
        src={src}
        alt={alt}
        priority
        className="object-cover absolute w-full h-full"
      />
    </Link>
    <ProductActions />
  </LoaderWrapper>
);

const ProductActions = ({ isLoading }: { isLoading?: boolean }) => (
  <div
    className={`flex flex-col justify-start items-center gap-y-2 absolute top-2 right-2 ${
      !isLoading && " opacity-0 group-hover/list:opacity-100"
    }  transition-all ease duration-300 z-10`}
  >
    <button className="bg-white p-3 rounded-full hover:bg-blue-700 hover:text-white transition-all ease-in-out duration-300">
      <GoSearch />
    </button>
  </div>
);

const ProductCardList = () => {
  return (
    <div className="flex-col xs:flex-row flex w-full bg-white p-2.5 border border-gray-200">
      <div className="w-full xs:w-64 h-64  xs:h-72 group/list">
        <ProductImage src={image14} alt="Product Image" link="/product/hello" />
      </div>
      <article className="flex flex-col  flex-1 justify-center p-2 xs:px-4">
        <h1 className="text-lg text-[#222222] font-semibold ">
          Reception Chair
        </h1>
        <div className="flex items-center gap-x-0.5 my-1">
          {[...Array(5)].map((_, index) => (
            <BsStarFill
              key={index}
              size={12}
              className={index < 5 ? "text-[#ff9933]" : "text-gray-300"}
            />
          ))}
          <span className="text-xs font-base text-gray-600 ml-2">
            2 reviews
          </span>
        </div>
        <h1 className="text-lg text-[#222222] font-semibold my-2">Kes 5000</h1>
        <p className="text-sm text-gray-600 font-light">
          Ultrices eros in cursus turpis massa tincidunt cursus mattis. Volutpat
          ac tincidunt vitae semper quis lectus. Aliquam id diam maecenas…
        </p>
        <div className="flex items-center gap-x-2 mt-4">
          <button className="text-sm font-semibold p-1 xxs:py-2.5 xxs:px-4 border-2 rounded-md border-gray-700 text-gray-700 hover:border-blue-600  hover:bg-blue-600 hover:text-white transition-colors duration-300 ease-in-out uppercase flex items-center gap-x-2">
            <BsHandbag size={20} />
            <span className="hidden xxs:inline-block">Add to cart</span>
          </button>
          <button className="bg-white p-2 rounded-full hover:bg-blue-700 hover:text-white transition-all ease-in-out duration-300">
            <PiScalesThin size={24} />
          </button>
        </div>
      </article>
    </div>
  );
};

export default ProductCardList;
