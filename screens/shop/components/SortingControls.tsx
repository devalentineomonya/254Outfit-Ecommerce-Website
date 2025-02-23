"use client";
import React from "react";
import FilterSelect from "./FilterSelect";

const SortingControls = () => {
  const sortingOptions = [
    { value: "menu_order", label: "Default sorting" },
    { value: "popularity", label: "Sort by popularity" },
    { value: "rating", label: "Sort by average rating" },
    { value: "date", label: "Sort by latest" },
    { value: "price", label: "Sort by price: low to high" },
    { value: "price-desc", label: "Sort by price: high to low" },
  ];

  const handleSortChange = (value: string) => {
    console.log("Selected sorting:", value);
  };
  return (
    <FilterSelect showLabel label="Sort By:" options={sortingOptions} onSelectChange={handleSortChange} />
  );
};

export default SortingControls;
