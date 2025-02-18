import React from "react";
import Image2 from "@/public/products/image2.png";
import Image, { StaticImageData } from "next/image";
import { BsStarFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { PiScalesThin } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import Link from "next/link";
import LoaderWrapper from "../loader/LoaderWrapper";

const productData = {
  name: "Lenovo Idea Pad",
  href: "/product/ame",
  priceRange: { min: 3000, max: 6000 },
  discount: "26% OFF",
  rating: { stars: 4, totalReviews: 2 },
  inStock: true,
};

const ProductImage = ({
  src,
  alt,
  link,
}: {
  src: string | StaticImageData;
  alt: string;
  link: string;
}) => (
  <LoaderWrapper height="h-2/3" isLoading={false}>
    <Link href={link} className="relative block w-full h-2/3">
      <Image src={src} alt={alt} priority />
    </Link>
<ProductActions />
  </LoaderWrapper>
);

const ProductActions = ({ isLoading }: { isLoading?: boolean }) => (
  <div
    className={`flex flex-col justify-start items-center gap-y-2 absolute top-2 right-2 ${
      !isLoading && " opacity-0 group-hover/product:opacity-100"
    }  transition-all ease duration-300 z-10`}
  >
    <button className="bg-white p-2 rounded-full hover:bg-blue-700 hover:text-white transition-all ease-in-out duration-300">
      <PiScalesThin size={24} />
    </button>
    <button className="bg-white p-3 rounded-full hover:bg-blue-700 hover:text-white transition-all ease-in-out duration-300">
      <GoSearch />
    </button>
  </div>
);

const ProductCard = () => {
  return (
    <div className="relative w-full aspect-[9/16] max-h-[438px] rounded p-2 bg-white group/product">
      <ProductImage src={Image2} alt="Product Image" link={productData.href} />
      {/* Discount Label */}
      <div className="cursor-default w-16 h-5 whitespace-nowrap bg-[#ff9933] text-white text-[13px] font-medium absolute top-4 left-4 rounded-[4px] grid place-content-center">
        {productData.discount}
      </div>

      <article className="h-1/3 p-2">
        {/* Product Name */}
        <h3 className="text-base font-normal text-gray-600">
          <Link href={productData.href}>{productData.name}</Link>
        </h3>
        {/* Rating & Stock */}
        <div className="flex items-center justify-between my-2">
          <div className="flex items-center gap-x-0.5">
            {[...Array(5)].map((_, index) => (
              <BsStarFill
                key={index}
                className={
                  index < productData.rating.stars
                    ? "text-[#ff9933]"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="text-xs font-base text-gray-600 ml-2">
              {productData.rating.totalReviews}
            </span>
          </div>
          <p className="text-xs font-base text-gray-600 flex items-center gap-x-1">
            <FaCheck className="text-green-600" />
            <span>{productData.inStock ? "In Stock" : "Out of Stock"}</span>
          </p>
        </div>
        {/* Price */}
        <bdi>Kes {productData.priceRange.min}</bdi> -{" "}
        <bdi>Kes {productData.priceRange.max}</bdi>
        {/* CTA Button */}
        <Link
          className="py-2 w-full text-center text-blue-500 border border-blue-500 text-sm mt-2 inline-flex rounded items-center justify-center hover:text-white hover:bg-blue-500"
          href={productData.href}
        >
          Select Options
        </Link>
      </article>
    </div>
  );
};

export default ProductCard;
