import { TbShoppingBag } from "react-icons/tb";
import React, { useState } from "react";
import NikeLogo from "../assets/nike-logo.svg?react"; //?react is a vite thing
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

function Nav() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-between">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* Burger Button */}
      <button
        onClick={() => setIsMobileMenuShown((prevState) => !prevState)}
        className=" rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 lg:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>
      {/* Menu List */}
      <div
        className={`${
          !isMobileMenuShown && "hidden"
        } w-full lg:block lg:w-auto`}
      >
        <ul className=" flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 lg:flex-row lg:space-x-8 lg:border-none lg:bg-transparent">
          {ROUTES.map((route, i) => (
            <li
              key={route}
              className={`cursor-pointer rounded-lg px-3 py-2 font-sans text-lg hover:bg-gray-100 sm:first:bg-blue-500 sm:first:text-white  lg:first:bg-transparent lg:first:text-blue-500 lg:hover:bg-transparent lg:hover:text-blue-500 ${
                (i === 3 || i === 4) && "lg:text-white"
              } `}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>
      <div className="fixed bottom-4 left-4 lg:static">
        <div className="flex-center btn-press-animation h-12 w-12 cursor-pointer rounded-full bg-white shadow-md lg:mr-8">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
