"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useCart } from "@/hooks/useCart";

const NavbarCart = () => {
  const { isCartOpen, closeCart } = useCart();

  return (
    <header
      onClick={closeCart}
      className={`h-screen w-full fixed top-0 bg-black z-50 transition-all duration-300 ${
        isCartOpen ? "bg-opacity-30 right-0" : "bg-opacity-0 -right-[5000px]"
      }`}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`w-full h-full absolute max-w-[320px] ${
          isCartOpen ? "right-0" : "-right-96"
        } bg-white shadow-md py-6 px-8 transition-all duration-500 delay-100 ease-in-out`}
      >
        <div className="flex justify-between items-center w-full border-b pb-6">
          <h5 className="font-semibold uppercase whitespace-nowrap">
            Shopping Cart
          </h5>
          <button
            className="flex items-center gap-x-2"
            onClick={closeCart}
          >
            <span>Close</span>
            <BsArrowRight />
          </button>
        </div>
      </aside>
    </header>
  );
};

export default NavbarCart;
