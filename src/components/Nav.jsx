import React from "react";
import NikeLogo from "../assets/nike-logo.svg?react"; //?react is a vite thing
import { RxHamburgerMenu } from "react-icons/rx";

function Nav() {
  return (
    <nav className="flex items-center justify-between">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* Burger Button */}
      <button className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu size={25} />
      </button>
    </nav>
  );
}

export default Nav;
