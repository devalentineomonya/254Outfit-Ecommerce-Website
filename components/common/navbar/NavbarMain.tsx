"use client";
import React from "react";
import NavbarHeader from "./NavbarHeader";
import NavbarCenter from "./NavbarCenter";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import NavbarCart from "./NavbarCart";

const NavbarMain = () => {
  const [showCart, setShowCart] = React.useState(false);
  return (
    <>
      <NavbarHeader />
      <NavbarCenter setShowCart={setShowCart} />
      <NavbarDesktop />
      <NavbarCart setShowCart={setShowCart} showCart={showCart} />
      <NavbarMobile />
    </>
  );
};

export default NavbarMain;
