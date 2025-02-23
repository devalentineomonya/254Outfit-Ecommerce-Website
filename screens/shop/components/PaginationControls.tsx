// PaginationControls.tsx
"use client";
import React from "react";
import FilterSelect from "./FilterSelect";

const PaginationControls = () => {
  // Define your items per page options
  const itemsPerPageOptions = [
    { value: "9", label: "Show 9" },
    { value: "12", label: "Show 12" },
    { value: "24", label: "Show 24" },
    { value: "36", label: "Show 36" }
  ];

  const handleItemsPerPageChange = (value: string) => {
    console.log("Items per page:", value);
    // Update your pagination logic here
  };

  return (
    <FilterSelect
      options={itemsPerPageOptions}
      selectedOption="12"
      onSelectChange={handleItemsPerPageChange}
    />
  );
};

export default PaginationControls;
