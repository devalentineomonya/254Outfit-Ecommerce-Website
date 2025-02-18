import React from "react";
import VendorCard from "../components/VendorCard";
const TopVendor = () => {
  return (
    <section className="mt-12 ">
<h1 className="mb-4 font-semibold text-gray-800 text-2xl">Top Weekly Vendors</h1>
    <div className="grid grid-cols-5 gap-x-3 p-3 bg-white">
      <VendorCard />
      <VendorCard />
      <VendorCard />
      <VendorCard />
      <VendorCard />
    </div>
    </section>
  );
};

export default TopVendor;
