import Nav from "./components/nav";
import ShoeDetail from "./components/ShoeDetail";
import Card from "./components/Card";
import NewArrivalsSection from "./components/NewArrivalsSection";
import { SHOE_LIST } from "./constant";

function App() {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
    </div>
  );
}

export default App;
