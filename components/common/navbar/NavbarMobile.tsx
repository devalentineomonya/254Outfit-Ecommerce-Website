import React, { useState } from "react";
import { BiChevronRight, BiSearch } from "react-icons/bi";
import { navLinks, productCategories } from "./navbarNavigation";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { useSidebar } from "@/context/sidebarContext";

const NavbarMobile = () => {
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const { isOpen, toggleSidebar } = useSidebar();
  const [mainMenuTab, setMainMenuTab] = useState(true);

  const handleDropdown = (name: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const renderNavLinks = (links: (typeof navLinks)[0][], level = 0) => {
    return (
      <ul className={`pl-${level * 4}`}>
        {links.map((link) => (
          <li key={link.name}>
            <div
              className={`cursor-pointer py-3 text-white text-sm ${
                level < 1 &&
                "border-b border-[#333] flex items-center w-full justify-between"
              }`}
              onClick={() => handleDropdown(link.name)}
            >
              {link.href && (
                <Link href={link.href} onClick={toggleSidebar}>
                  {link.name}
                </Link>
              )}

              {link.subLinks && (
                <>
                  {link.name} <BiChevronRight size={20} />{" "}
                </>
              )}
            </div>
            {link.subLinks && (
              <ul
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openDropdowns.includes(link.name) ? "max-h-48" : "max-h-0"
                }`}
              >
                {renderNavLinks(link.subLinks, level + 1)}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header
      className={`h-full w-full bg-black fixed top-0 right-0 transition-all ease-in-out duration-500 ${
        isOpen ? "bg-opacity-80 z-40" : "bg-opacity-0 -z-10"
      }`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute right-4 top-4 text-white z-50"
      >
        <RxCross1 size={32} />
      </button>
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`max-w-80 w-full h-full bg-[#222222] p-4 absolute z-50 transition-all ease-in-out duration-500 delay-75 shadow-md ${
          isOpen ? "left-0" : "-left-96"
        }`}
      >
        <form action="" className="w-full">
          <div className="flex item-center w-full border border-[#333] rounded-sm px-3">
            <input
              type="text"
              className="w-full text-white border-none outline-none py-2 bg-transparent text-sm"
              placeholder="Search"
            />
            <button type="submit" className="text-white">
              <BiSearch />
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between w-full pt-6 transition-all ease-in-out duration-500">
          <div
            onClick={() => setMainMenuTab(true)}
            className={`flex-1 cursor-pointer uppercase font-medium text-white text-sm text-center border-b-2 pb-2 ${
              !mainMenuTab ? " border-b-white" : "border-b-blue-700 "
            }`}
          >
            Main Menu
          </div>
          <div
            onClick={() => setMainMenuTab(false)}
            className={`flex-1 cursor-pointer uppercase font-medium text-white text-sm text-center border-b-2 pb-2 ${
              mainMenuTab ? " border-b-white" : "border-b-blue-700 "
            }`}
          >
            Categories
          </div>
        </div>
        {mainMenuTab ? (
          <nav className="mt-4">{renderNavLinks(navLinks)}</nav>
        ) : (
          <nav className="mt-4">{renderNavLinks(productCategories)}</nav>
        )}
      </aside>
    </header>
  );
};

export default NavbarMobile;
