// import ImageCarousel from "./components/ImageCarousel"
import HeaderDesktop from "./components/HeaderForDesktopComp";
import { HeaderForMobileComp } from "./components/HeaderForMobileComp";

function App() {
  console.log("App component rendered");
  return (
    <>
      <div>
      <HeaderForMobileComp className="md:hidden" />
      <HeaderDesktop className="hidden md:block"/>
        {/* <ImageCarousel /> */}
      </div>
    </>
  );
}

export default App;
