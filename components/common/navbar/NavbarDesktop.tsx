import NavbarDesktopCategories from "./NavbarDesktopCategories";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";
import { navLinks } from "./navbarNavigation";
import RecentlyViewedDropdown from "./RecentlyViewedDropdown";
import { BiChevronDown } from "react-icons/bi";

const NavbarDesktop = () => {
  return (
    <header className="w-full h-14 bg-sky-100 hidden lg:flex items-center justify-center sticky top-0 z-40 px-5">
      <div className="w-full max-w-8xl flex items-center gap-x-6 relative">
        <NavbarDesktopCategories />
        <nav>
          <ul className="flex items-center gap-x-5 text-sm">
            {navLinks.map((link) => (
              <li key={link.name} className="whitespace-nowrap">
                {link.href ? (
                  <Link className="hover:text-blue-800" href={link.href}>
                    {link.name}
                  </Link>
                ) : (
                  <nav className="relative group h-full py-6">
                    <div className="hover:text-blue-800 cursor-pointer flex items-center gap-x-2">
                      {link.name} <BiChevronDown size={16} />
                    </div>
                    <ul className="absolute hidden mt-0 -ml-6 min-w-56 p-6 shadow bg-white group-hover:mt-5 group-hover:block animate-drop">
                      {link?.subLinks?.map((subLink) => (
                        <li
                          key={subLink.name}
                          className="py-2 hover:text-blue-800"
                        >
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
          <RecentlyViewedDropdown />
        </div>
      </div>
    </header>
  );
};

export default NavbarDesktop;
