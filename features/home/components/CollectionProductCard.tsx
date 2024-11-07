import Image from "next/image";
import React from "react";
import Image2 from "@/public/products/image2.png"
const CollectionProductCard = () => {
  return (
    <figure className="h-full w-full bg-white col-span-4">
      <figure className="h-4/5">
      <Image src={Image2} alt="Product Image" priority />
      </figure>
      <article className="h-1/5 text-center ">
      <h6 className="text-sm text-gray-700 font-medium truncate max-w-28 text-center w-full mx-auto">Name of the product</h6>
      <h5 className="text-base text-gray-800 truncate font-bold ">Ke 200.00</h5>
      </article>
    </figure>
  );
};

export default CollectionProductCard;
