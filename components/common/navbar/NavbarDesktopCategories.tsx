import React, { useEffect, useState } from "react";
import { CgChevronRight } from "react-icons/cg";
import { useRouter, usePathname } from "next/navigation";
import { productCategories } from "./navbarNavigation";
import Link from "next/link";

const NavbarDesktopCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    (typeof productCategories)[0] | null
  >(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleSelect = (page: (typeof productCategories)[0]): void => {
    setSelectedCategory(page);
    router.push(page.href);
  };

  useEffect(() => {
    const currentPage = productCategories.find(
      (page) => page.href === pathname
    );
    if (currentPage) {
      setSelectedCategory(currentPage);
    }
  }, [pathname]);
  const filteredCategories: (typeof productCategories)[0][] =
    productCategories.filter((category) => category !== selectedCategory);

  return (
    <div className="relative min-w-32 xl:min-w-52 w-fit cursor-pointer inline-block bg-blue-700 rounded-md text-white group">
      <div className="flex items-center justify-between px-3 py-2 text-sm whitespace-nowrap">
        {selectedCategory ? selectedCategory.name : "All Categories"}
        <CgChevronRight
          size={24}
          className=" h-2.5 w-6 fill-white transition-transform duration-500 ease-in-out group-hover:rotate-90 "
        />
      </div>
      <div className="absolute  flex-col bg-white shadow-md w-full left-0 -mt-4 hidden text-slate-950  z-50 p-2 group-hover:opacity-100 group-hover:flex group-hover:mt-0 animate-drop">
        {filteredCategories.map((category, index) => (
          <div
            key={category.name}
            title={category.name.toLowerCase()}
            className="py-1 w-full my-1 text-sm border-b" 
            onClick={() => handleSelect(category)}
          >
            <input
              id={category.name}
              name="option"
              type="radio"
              className="hidden"
            />
            <label
              className="p-2 text-dark-primary py-1 ml-0 text-left  w-full hover:text-blue-700 hover:ml-2  transition-all duration-500 ease-in-out cursor-pointer flex justify-between items-center group"
              htmlFor={category.name}
              data-txt={category.name}
            >
             <span className="whitespace-nowrap">{category.name}</span>
             { index < 4 &&   <CgChevronRight size={24} className=" h-2.5 w-6 fill-white " />}

            </label>
          </div>
        ))}
      <Link  className="py-2 w-full my-1 text-sm font-medium "  href="nn">fff</Link>
      </div>
    </div>
  );
};

export default NavbarDesktopCategories;
