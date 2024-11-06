"use client";
import React from "react";
import NavabrSelect from "./NavabrSelect";
import Link from "next/link";
import { BiUser } from "react-icons/bi";

const NavbarHeader = () => {
  const handleLanguageSelect = (value: string) => {
    console.log("Selected language:", value);
  };

  const handleCurrencySelect = (value: string) => {
    console.log("Selected currency:", value);
  };

  const headerLinks = [
    { name: "Contect Us", link: "/contact-us" },
    { name: "About Us", link: "/about-us" },
    { name: "My Account", link: "/my-account" },
  ];

  return (
    <header className="h-11 w-full md:px-10 flex justify-center items-center border-b border-gray-200 text-gray-700">
      <div className="w-full h-full max-w-8xl flex items-center justify-between">
        <p className="text-sm">Welcome to 254 Outfits</p>
        <div className="flex items-center">
          <div className="flex border-r pr-3">
            <NavabrSelect
              options={["ENG", "FRA"]}
              initialSelected="ENG"
              onSelect={handleLanguageSelect}
            />
            <NavabrSelect
              options={["KES", "USD"]}
              initialSelected="KES"
              onSelect={handleCurrencySelect}
            />
          </div>
          <div className="pl-4">
            <nav className="flex">
              <ul className="flex space-x-5">
                {headerLinks.map((link) => (
                  <li key={link.name} className="text-xs  hover:text-blue-800">
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="ml-3 mr-1 flex items-center text-xs">
            <BiUser size={16}/>
            <Link href="/login" className="mx-1  hover:text-blue-800">Sign In</Link>/
            <Link href="/regster" className="ml-1  hover:text-blue-800">Regiter</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarHeader;
