import React from "react";
import NavbarHeader from "./NavbarHeader";
import NavbarCenter from "./NavbarCenter";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import NavbarCart from "./NavbarCart";

const NavbarMain = () => {
  return (
    <>
      <NavbarHeader />
      <NavbarCenter />
      <NavbarCart />
      <NavbarDesktop />
      <NavbarMobile />
    </>
  );
};

export default NavbarMain;
