import React, { useEffect, useState } from "react";
import { CgChevronRight } from "react-icons/cg";
import { useRouter, usePathname } from "next/navigation";
import { productCategories } from "./navbarCotegories";

const NavbarDesktopCategories = ({
  setShowSideMenu,
}: {
  setShowSideMenu: (state: boolean) => void;
}) => {
  const [selectedCategory, setSelectedCategory] = useState<
    (typeof productCategories)[0] | null
  >(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleSelect = (page: (typeof productCategories)[0]): void => {
    setShowSideMenu(false);
    setSelectedCategory(page);
    router.push(page.link);
  };

  useEffect(() => {
    const currentPage = productCategories.find(
      (page) => page.link === pathname
    );
    if (currentPage) {
      setSelectedCategory(currentPage);
    }
  }, [pathname]);
  const filteredCateories: (typeof productCategories)[0][] =
    productCategories.filter((category) => category !== selectedCategory);

  return (
    <div className="relative min-w-32 lg:min-w-52 w-fit cursor-pointer inline-block bg-blue-700 rounded-md text-white group">
      <div className="flex items-center justify-between px-3 py-2 rounded-md text-sm">
        {selectedCategory ? selectedCategory.name : "All Cateogries"}
        <CgChevronRight
          size={24}
          className=" h-2.5 w-6 fill-white transition-transform duration-300 ease-in-out group-hover:rotate-90 "
        />
      </div>
      <div className="absolute flex flex-col bg-white shadow-md w-full left-0 mt-2 opacity-0 invisible text-slate-950 transition-[opacity_300ms_ease,_visibility_0s_linear_300ms] z-50 p-1 rounded-md group-hover:opacity-100 group-hover:visible">
        {filteredCateories.map((category) => (
          <div
            key={category.name}
            title={category.name.toLowerCase()}
            className="py-1 w-full  hover:bg-gray-100 my-1 text-sm"
            onClick={() => handleSelect(category)}
          >
            <input
              id={category.name}
              name="option"
              type="radio"
              className="hidden"
            />
            <label
              className="p-2 rounded-md text-dark-primary inline-block py-1 text-left  w-full  cursor-pointer"
              htmlFor={category.name}
              data-txt={category.name}
            >
              {category.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarDesktopCategories;
