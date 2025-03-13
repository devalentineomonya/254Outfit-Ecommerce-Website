"use client"
import FilterSelect from "@/screens/shop/components/FilterSelect";
import VendorHero from "../components/VendorHero";
import VendorProductSearch from "../components/VendorProductSearch";
import VendorProducts from "./VendorProducts";

const sortingOptions = [
  { label: "Default sorting", value: "menu_order" },
  { label: "Sort by popularity", value: "popularity" },
  { label: "Sort by average rating", value: "rating" },
  { label: "Sort by latest", value: "date" },
  { label: "Sort by price: low to high", value: "price" },
  { label: "Sort by price: high to low", value: "price-desc" },
];

const VendorPage = () => {
  const handleItemsPerPageChange = (value: string) => {
    console.log("Items per page:", value);
  };


  return (
    <div className="w-full">
      <VendorHero />
      <div className="border p-4 rounded-md my-4">Products</div>
      <div className="flex justify-between items-center">
        <VendorProductSearch />
        <FilterSelect
          onSelectChange={handleItemsPerPageChange}
          options={sortingOptions}
        />
      </div>
      <VendorProducts/>
    </div>
  );
};

export default VendorPage;
