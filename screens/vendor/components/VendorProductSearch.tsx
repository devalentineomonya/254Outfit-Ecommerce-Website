import React from "react";

const VendorProductSearch = () => {
  return (
    <div className="flex items-center w-full sm:w-fit">
      <input className="py-2 px-4 outline-none border w-full" />

      <button className="bg-[#ff9933] text-white px-6 py-2 rounded-sm">
        Search
      </button>
    </div>
  );
};

export default VendorProductSearch;
