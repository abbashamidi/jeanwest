import HeaderDesktop from "./components/HeaderForDesktopComp";
import { HeaderForMobileComp } from "./components/HeaderForMobileComp";
import ImageCaroselHandle from "./components/ImageCarosel";
import ShppingCard from "./components/ShoppingCards";

function App() {
  console.log("App component rendered");
  return (
    <>
      <div>
        <HeaderForMobileComp className="md:hidden" />
        <HeaderDesktop className="hidden md:block" />
        <ImageCaroselHandle />
      </div>
      <ShppingCard />
    </>
  );
}

export default App;
