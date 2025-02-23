import React, { useState } from "react";
import NavbarDesktopCategories from "./NavbarDesktopCategories";
import { SlLocationPin } from "react-icons/sl";
import { BiChevronDown } from "react-icons/bi";
import { RxReload } from "react-icons/rx";
import Link from "next/link";
import { navLinks } from "./navbarNavigation";

const NavbarDesktop = () => {
  const [showRecentlyViewed, setShowRecentlyViewed] = useState(false);

  return (
    <header className="w-full h-14 bg-sky-100  hidden lg:flex items-center justify-center sticky top-0 z-40 px-5">
      <div className="w-full max-w-8xl flex items-center gap-x-6 relative">
        <NavbarDesktopCategories />
        <nav>
          <ul className="flex items-center gap-x-5 text-sm">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="whitespace-nowrap"
              >
                {link.href ? (
                  <Link className=" hover:text-blue-800" href={link.href}>{link.name}</Link>
                ) : (
                  <nav className="relative group h-full py-6">
                    <div className=" hover:text-blue-800 cursor-pointer flex items-center gap-x-2">{link.name} <BiChevronDown size={16}/></div>
                    <ul className="absolute hidden mt-0 -ml-6 min-w-56 p-6 shadow bg-white group-hover:mt-5 group-hover:block animate-drop">
                      {link?.subLinks?.map((subLink) => (
                        <li key={subLink.name} className="py-2  hover:text-blue-800">
                          <Link href={subLink.href}>{subLink.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-full flex items-center justify-end gap-x-5 text-sm">
          <div className="flex items-center gap-x-2">
            <div className="p-1 grid place-content-center rounded-full w-11 aspect-square bg-white">
              <SlLocationPin size={20} />
            </div>
            <p>Track Order</p>
          </div>
          <div className=" flex items-center gap-x-2">
            <div className="p-1 grid place-content-center rounded-full w-11 aspect-square bg-white">
              <RxReload className="-rotate-90" size={20} />
            </div>
            <p
              className="flex items-center gap-x-1 cursor-pointer"
              onMouseEnter={() => setShowRecentlyViewed(true)}
            >
              <span>Recently Viewed</span>
              <BiChevronDown />
            </p>
            {showRecentlyViewed && (
              <div
                onMouseLeave={() => setShowRecentlyViewed(false)}
                className="absolute top-full right-0 mt-2 w-full max-w-8xl bg-white rounded-md shadow-lg min-h-14 flex px-3 items-center animate-drop before:absolute before:w-0 before:h-0 before:border-l-8 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-white before:content-[''] before:-top-2 before:right-14"
              >
                <p>There are no recently viewed items.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarDesktop;
