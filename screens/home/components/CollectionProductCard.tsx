import Image from "next/image";
import React, { MouseEvent } from "react";
import Image2 from "@/public/products/image2.png";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import LoaderWrapper from "@/components/common/loader/LoaderWrapper";
const CollectionProductCard = () => {
  const handleQuickPreview = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // e.stopImmediatePropagation()
    console.log("Quick Preview");
  };
  return (
    <figure className="h-full w-full bg-white col-span-4">
      <LoaderWrapper height="h-3/4" isLoading={false}>
        <Link href="/product/1" className="relative block w-full h-full">
          <Image
            src={Image2}
            alt="Product Image"
            priority
            className="object-cover absolute w-full h-full"
            fill
          />
        </Link>
          <button
            onClick={handleQuickPreview}
            title="Quick Search"
            aria-label="Quick Search"
            className="z-20 absolute top-2 right-2 bg-white hover:bg-blue-700 hover:text-white bg-opacity-80 p-2 rounded-full opacity-0 group-hover:opacity-90 transition-all ease-in-out duration-500 grid place-content-center"
          >
            <BiSearch size={20} />
          </button>
      </LoaderWrapper>
      <article className="h-1/5 md:h-1/3 lg:h-1/5 text-center bg-white bg-opacity-80 lg:bg-transparent relative lg:static  z-20">
        <Link
          href="/product/1"
          className="text-sm text-gray-700 font-medium truncate px-8 text-center w-full  inline-block hover:text-blue-700"
        >
          Name of the product
        </Link>
        <h5 className="text-sm text-gray-800 truncate font-bold ">
          Ke 200.00
        </h5>
      </article>
    </figure>
  );
};

export default CollectionProductCard;
