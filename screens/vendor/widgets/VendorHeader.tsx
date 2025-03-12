"use client";
import FilterSelect from "@/screens/shop/components/FilterSelect";
import { useState } from "react";
import { FaList } from "react-icons/fa6";

const filterItems = [
  {
    value: "most_recent",
    label: "Most Recent",
  },
  {
    value: "total_orders",
    label: "Most Popular",
  },
  {
    value: "random",
    label: "Random",
  },
];
const VendorHeader = () => {
  const handleSortChange = (value: string) => {
    console.log("Items per page:", value);
  };
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="px-4 ">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center  gap-x-2">
          <button
            onClick={() => setIsSearchOpen((prev) => !prev)}
            className="flex items-center gap-x-4 border-2 text-blue-500 hover:bg-blue-500
         hover:text-white border-blue-500 transition-all ease-in-out duration-300 rounded-sm
          py-1 px-4 text-lg font-medium "
          >
            <FaList size={15} />
            <span>Filter</span>
          </button>
          <h2>Total store showing 80</h2>
        </div>
        <FilterSelect
          label="Sort by:"
          onSelectChange={handleSortChange}
          showLabel
          options={filterItems}
        />
      </div>
      <div
        className={`w-full flex items-center gap-x-4 bg-white ${
          isSearchOpen ? " h-[4.2rem]  mb-3 p-4 " : "h-0"
        } transtion-all ease-in-out duration-300 `}
      >
        <input
        placeholder="Search Vendor "
          className={`w-full px-4 text-sm ${
            isSearchOpen ? "h-full border py-1" : "h-0"
          } outline-none `}
        />
        <button
          className={`bg-sky-700 text-white rounded-sm ${
            isSearchOpen ? "py-1 px-4  h-full" : "h-0"
          }`}
        >
          Apply
        </button>
      </div>
    </div>
  );
};
export default VendorHeader;
