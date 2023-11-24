import React from "react";
import NikeLogo from "../assets/nike-logo.svg?react"; //?react is a vite thing
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

function Nav() {
  return (
    <nav className="flex flex-col items-center justify-between">
      <div className="flex w-full items-center justify-between ">
        {/* Logo */}
        <a href="#">
          <NikeLogo className="h-20 w-20" />
        </a>
        {/* Burger Button */}
        <button className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
          <RxHamburgerMenu size={25} />
        </button>
      </div>
      <div className="w-full">
        <ul className=" rounded-lg border border-gray-100 bg-gray-50 p-4">
          {ROUTES.map((route) => (
            <li
              key={route}
              className=" cursor-pointer rounded-lg  px-3 py-2 font-sans text-lg first:bg-blue-500 first:text-white hover:bg-gray-100"
            >
              {route}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
