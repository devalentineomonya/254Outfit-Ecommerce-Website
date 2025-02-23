import React from "react";
import NavbarSelect from "./NavbarSelect";
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
    { name: "Contact Us", link: "/contact-us" },
    { name: "About Us", link: "/about-us" },
    { name: "My Account", link: "/my-account" },
  ];

  return (
    <header className="h-11 w-full px-4 md:px-2 flex justify-center items-center border-b border-gray-200 text-gray-700  ">
      <div className="w-full h-full max-w-8xl flex items-center justify-between">
        <p className="text-sm animate-marquee md:animate-none whitespace-nowrap">
          Welcome to 254 Outfits
        </p>

        <div className="flex items-center">
          <div className="hidden sm:flex relative px-3">
            <NavbarSelect
              options={["ENG", "FRA"]}
              initialSelected="ENG"
              onSelect={handleLanguageSelect}
            />
            <NavbarSelect
              options={["KES", "USD"]}
              initialSelected="KES"
              onSelect={handleCurrencySelect}
            />
          </div>
          <div className="pl-4 border-l border-l-gray-400 hidden md:inline-block">
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
          <div className="ml-3 mr-1 hidden lg:flex items-center text-xs">
            <BiUser size={16} />
            <Link href="/login" className="mx-1  hover:text-blue-800">
              Sign In
            </Link>
            /
            <Link href="/register" className="ml-1  hover:text-blue-800">
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarHeader;
