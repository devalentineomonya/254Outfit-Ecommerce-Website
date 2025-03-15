"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { RxCross1 } from "react-icons/rx";
import { BiChevronDown } from "react-icons/bi";

import { filterSchema, filterConfig } from "./filterConfig";
import { useShopFilter } from "@/hooks/useFilter";

type FilterFormValues = z.infer<typeof filterSchema>;

const MobileFilter = () => {
  const { isMobileFilterOpen, toggleMobileFilter } = useShopFilter();
  const methods = useForm<FilterFormValues>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      categories: [],
      price: { min: null, max: null },
      sizes: [],
      brands: [],
      colors: [],
    },
  });

  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const onSubmit: SubmitHandler<FilterFormValues> = async (data) => {
    try {

      console.log("Submitting filters:", data);
      toggleMobileFilter();
    } catch (error) {
      console.error("Filter submission error:", error);
    }
  };

  return (
    <div
      className={`h-screen w-full fixed top-0 bg-black z-50 transition-all duration-300 ${
        isMobileFilterOpen
          ? "bg-opacity-50 left-0"
          : "bg-opacity-0 -left-[5000px]"
      }`}
    >
      <div

        className={`fixed  top-0 h-full w-full max-w-xs bg-white shadow-xl ${
          isMobileFilterOpen ? "left-0" : "-left-96"
        }
       `}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Filters</h2>
          <button
            onClick={toggleMobileFilter}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <RxCross1 className="w-5 h-5" />
          </button>
        </div>

        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="h-[calc(100%-4rem)] flex flex-col"
          >
            <div className="flex-1 overflow-y-auto p-4">
              <div className="border-b">
                <button
                  type="button"
                  onClick={() => toggleSection("categories")}
                  className="flex items-center justify-between w-full py-4"
                >
                  <span>Categories</span>
                  <BiChevronDown
                    className={`transform transition-transform ${
                      openSections.includes("categories") ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSections.includes("categories") && (
                  <div className="pb-4 space-y-2">
                    {filterConfig.categories.map((category) => (
                      <label key={category} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="w-4 h-4"
                          {...methods.register("categories")}
                          value={category}
                        />
                        <span>{category}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-b">
                <button
                  type="button"
                  onClick={() => toggleSection("price")}
                  className="flex items-center justify-between w-full py-4"
                >
                  <span>Price</span>
                  <BiChevronDown
                    className={`transform transition-transform ${
                      openSections.includes("price") ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSections.includes("price") && (
                  <div className="pb-4 space-y-4">
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        className="w-1/2 p-2 border rounded"
                        {...methods.register("price.min", {
                          valueAsNumber: true,
                          validate: (value) =>
                            !value || value >= 0 || "Must be positive number",
                        })}
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        className="w-1/2 p-2 border rounded"
                        {...methods.register("price.max", {
                          valueAsNumber: true,
                          validate: (value) =>
                            !value || value >= 0 || "Must be positive number",
                        })}
                      />
                    </div>
                    {methods.formState.errors.price?.message && (
                      <p className="text-red-500 text-sm">
                        {methods.formState.errors.price.message}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="border-b">
                <button
                  type="button"
                  onClick={() => toggleSection("size")}
                  className="flex items-center justify-between w-full py-4"
                >
                  <span>Size</span>
                  <BiChevronDown
                    className={`transform transition-transform ${
                      openSections.includes("size") ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSections.includes("size") && (
                  <div className="pb-4 space-y-2">
                    {filterConfig.sizes.map(([size, count]) => (
                      <label
                        key={size}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="w-4 h-4"
                            {...methods.register("sizes")}
                            value={size}
                          />
                          <span>{size}</span>
                        </div>
                        <span className="text-gray-500">{count}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-b">
                <button
                  type="button"
                  onClick={() => toggleSection("brand")}
                  className="flex items-center justify-between w-full py-4"
                >
                  <span>Brand</span>
                  <BiChevronDown
                    className={`transform transition-transform ${
                      openSections.includes("brand") ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSections.includes("brand") && (
                  <div className="pb-4 space-y-2">
                    {filterConfig.brands.map((brand) => (
                      <label key={brand} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="w-4 h-4"
                          {...methods.register("brands")}
                          value={brand}
                        />
                        <span>{brand}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-b">
                <button
                  type="button"
                  onClick={() => toggleSection("color")}
                  className="flex items-center justify-between w-full py-4"
                >
                  <span>Color</span>
                  <BiChevronDown
                    className={`transform transition-transform ${
                      openSections.includes("color") ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSections.includes("color") && (
                  <div className="pb-4 space-y-2">
                    {filterConfig.colors.map(([color, count]) => (
                      <label
                        key={color}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="w-4 h-4"
                            {...methods.register("colors")}
                            value={color}
                          />
                          <div className="flex items-center gap-1">
                            <span
                              className="w-4 h-4 rounded-full border"
                              style={{ backgroundColor: color.toLowerCase() }}
                            />
                            <span>{color}</span>
                          </div>
                        </div>
                        <span className="text-gray-500">{count}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 border-t">
              {methods.formState.errors.root && (
                <p className="text-red-500 text-sm mb-2">
                  {methods.formState.errors.root.message}
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Apply Filters
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default MobileFilter;
