import HeaderDesktop from "./components/HeaderForDesktopComp";
import { HeaderForMobileComp } from "./components/HeaderForMobileComp";
import ImageCaroselHandle from "./components/ImageCarosel";
import ShoppingCard from "./components/ShoppingCards";
import ProductsCategories from "./components/ProductsCategories";
import Banner from "./components/banner";
import Suggestion from "./Suggestion";
import Details from "./components/Details";
import Banner2 from "./components/Banner2";
import FooterDesk from "./components/FooterDesk";
import FooterPhone from "./components/FooterPhone";
import FixedFooterPhone from "./components/FixedFooterPhone"
function App() {
  return (
    <>
      <HeaderForMobileComp className="md:hidden" />
      <HeaderDesktop className="hidden md:block" />
      <ImageCaroselHandle />
      <ShoppingCard className="md:block" />
      <ProductsCategories className="md:block"/>
      <Banner className="hidden md:block" src={"images/Banner/Banner.jpg"} />
      <Suggestion className="hidden md:block" />
      <Details className="hidden md:flex" />
      <Banner2 className="hidden md:block" src={"images/Banner2/image1.jpg"} />
      <FooterDesk className="hidden md:block"/>
      <FooterPhone className="md:hidden"/>
      <FixedFooterPhone className="md:hidden"/>

    </>
  );
}

export default App;
