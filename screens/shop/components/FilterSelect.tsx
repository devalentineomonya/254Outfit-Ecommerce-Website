"use client";
import React from "react";
import { useShopFilter } from "@/hooks/useFilter";
import { BsFilter } from "react-icons/bs";
interface FilterSelectProps {
  options: { value: string; label: string }[];
  selectedOption?: string;
  onSelectChange: (value: string) => void;
  label?: string;
  showLabel?: boolean;
  filterButton?:boolean
}

const FilterSelect = ({
  options,
  selectedOption = "12",
  onSelectChange,
  label = "Show",
  showLabel = false,
  filterButton=false
}: FilterSelectProps) => {
  const { toggleMobileFilter } = useShopFilter();
  return (
    <div className="flex items-center gap-x-2">
      {showLabel && (
        <label htmlFor="count" className="hidden lg:inline-block">
          {label}
        </label>
      )}
      {filterButton && (
        <button
          className="lg:hidden  p-1 rounded-md transition-colors text-blue-600 bg-blue-200 grid place-content-center"
          onClick={toggleMobileFilter}
        >
          <BsFilter className="size-7" />
        </button>
      )}
      <div className="relative max-w-44">
        <select
          name="count"
          value={selectedOption}
          onChange={(e) => onSelectChange(e.target.value)}
          className="count form-control w-full bg-transparent text-slate-700
           text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300
            ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm
             focus:shadow-md appearance-none cursor-pointer"
          aria-label="Items per page"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.2"
          stroke="currentColor"
          className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </div>
    </div>
  );
};

export default FilterSelect;
