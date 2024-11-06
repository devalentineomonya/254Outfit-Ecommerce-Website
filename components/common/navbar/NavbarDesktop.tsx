"use client";
import React, { useState } from "react";
import NavbarDesktopCategories from "./NavbarDesktopCategories";
import { SlLocationPin } from "react-icons/sl";
import { BiChevronDown } from "react-icons/bi";
import { RxReload } from "react-icons/rx";
import Link from "next/link";

const NavbarDesktop = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showRecentlyViewed, setShowRecentlyViewed] = useState(false);

  const navLinks = [
    { name: "Products", href: "/products" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "About Us", href: "/about-us" },
    { name: "My Account", href: "/my-account" },
  ];

  return (
    <header className="w-full h-14 bg-sky-100 flex items-center justify-center">
      <div className="w-full relative max-w-8xl flex items-center gap-x-6 relative">
        <NavbarDesktopCategories setShowSideMenu={setShowSideMenu} />
        <nav>
          <ul className="flex items-center gap-x-5 text-base">
            {navLinks.map((link) => (
              <li key={link.name} className="whitespace-nowrap hover:text-blue-800">
                <Link href={link.href}>{link.name}</Link>
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