import HeaderDesktop from "./components/HeaderForDesktopComp";
import { HeaderForMobileComp } from "./components/HeaderForMobileComp";
import ImageCaroselHandle from "./components/ImageCarosel";
import ShppingCard from "./components/ShoppingCards";
import ProductsCategories from "./components/ProductsCategories";
import Banner from "./components/banner";

function App() {
  console.log("App component rendered");
  return (
    <>
      <HeaderForMobileComp className="md:hidden" />
      <HeaderDesktop className="hidden md:block" />
      <ImageCaroselHandle />
      <ShppingCard className="hidden md:block" />
      <ProductsCategories/>
      <Banner src={"images/Banner/Banner.jpg"}/>
    </>
  );
}

export default App;
