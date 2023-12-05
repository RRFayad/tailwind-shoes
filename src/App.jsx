import Nav from "./components/nav";
import ShoeDetail from "./components/ShoeDetail";
import NewArrivalsSection from "./components/NewArrivalsSection";
import Sidebar from "./components/Sidebar";

import { SHOE_LIST } from "./constant";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        Hi
      </Sidebar>
    </div>
  );
}

export default App;
