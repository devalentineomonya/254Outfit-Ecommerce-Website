"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useShopFilter } from "@/hooks/useFilter";
import { filterConfig } from "./filterConfig";

const Filters = () => {
  const {
    filters,
    errors,
    setFilter,
    toggleArrayFilter,
    toggleTupleFilter,
    validateFilters,
    clearFilters,
  } = useShopFilter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateFilters();
    if (isValid) {
      console.log("Submitting filters:", filters);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-72 sticky top-2 hidden lg:block p-2">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        {errors.root && (
          <p className="text-red-500 text-sm mb-2">{errors.root}</p>
        )}

        <div className="space-y-6 bg-white p-3">
          <Accordion type="multiple" className="w-full">
            {/* Categories Filter */}
            <AccordionItem value="categories">
              <AccordionTrigger>All Categories</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {filterConfig.categories.map((category) => (
                    <label key={category} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters.categories?.includes(category)}
                        onChange={() =>
                          toggleArrayFilter("categories", category)
                        }
                        className="w-4 h-4"
                      />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Price Filter */}
            <AccordionItem value="price">
              <AccordionTrigger>Price</AccordionTrigger>
              <AccordionContent>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.price.min ?? ""}
                    onChange={(e) =>
                      setFilter("price", {
                        ...filters.price,
                        min: Number(e.target.value) || null,
                      })
                    }
                    className="w-1/2 p-2 border rounded"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.price.max ?? ""}
                    onChange={(e) =>
                      setFilter("price", {
                        ...filters.price,
                        max: Number(e.target.value) || null,
                      })
                    }
                    className="w-1/2 p-2 border rounded"
                  />
                </div>
                {errors.price && (
                  <p className="text-red-500 text-sm mt-1">{errors.price}</p>
                )}
              </AccordionContent>
            </AccordionItem>

            {/* Size Filter */}
            <AccordionItem value="size">
              <AccordionTrigger>Size</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {filterConfig.sizes.map(([size, count]) => (
                    <label
                      key={size}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={filters.sizes?.includes(size)}
                          onChange={() => toggleTupleFilter("sizes", size)}
                          className="w-4 h-4"
                        />
                        <span>{size}</span>
                      </div>
                      <span className="text-gray-500">{count}</span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Brand Filter */}
            <AccordionItem value="brand">
              <AccordionTrigger>Brand</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {filterConfig.brands.map((brand) => (
                    <label key={brand} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters.brands?.includes(brand)}
                        onChange={() => toggleArrayFilter("brands", brand)}
                        className="w-4 h-4"
                      />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Color Filter */}
            <AccordionItem value="color">
              <AccordionTrigger>Color</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {filterConfig.colors.map(([color, count]) => (
                    <label
                      key={color}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={filters.colors?.includes(color)}
                          onChange={() => toggleTupleFilter("colors", color)}
                          className="w-4 h-4"
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
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Apply Filters
          </button>
          <button
            type="button"
            onClick={clearFilters}
            className="w-full border py-2 rounded mt-2"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </form>
  );
};

export default Filters;
