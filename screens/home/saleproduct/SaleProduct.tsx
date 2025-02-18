import ProductCard from "@/components/common/card/ProductCard";
import React from "react";

const SaleProduct = () => {
  return (
    <section className="mt-12 ">
      <h1 className="mb-4 font-semibold text-gray-800 text-2xl">
        Top Weekly Vendors
      </h1>
      <div className="grid grid-cols-5  bg-white">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default SaleProduct;
