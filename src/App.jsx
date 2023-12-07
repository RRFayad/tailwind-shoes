import React, { useEffect, useState } from "react";

import Nav from "./components/nav";
import ShoeDetail from "./components/ShoeDetail";
import NewArrivalsSection from "./components/NewArrivalsSection";
import Sidebar from "./components/Sidebar";
import Cart from "./components/Cart";

import { SHOE_LIST } from "./constant";
import { BiMoon, BiSun } from "react-icons/bi";

const FAKE_CART_ITEMS = SHOE_LIST.map((shoe) => {
  return {
    product: shoe,
    qty: 1,
    size: 44,
  };
});

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.getItem("isDarkMode") === "true" &&
      window.document.documentElement.classList.add("dark");
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark"),
    );
  };

  return (
    <div className="animate-fadeIn p-10 dark:bg-night xl:px-24">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <Cart cartItems={FAKE_CART_ITEMS} />
      </Sidebar>
      <div className=" fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="rounded-full bg-night-50 px-4 py-2 text-white dark:bg-white dark:text-night"
        >
          <BiSun className={`hidden dark:block`} />
          <BiMoon className={`dark:hidden`} />
        </button>
      </div>
    </div>
  );
}

export default App;
