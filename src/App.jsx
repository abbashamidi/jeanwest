import HeaderDesktop from "./components/HeaderForDesktopComp";
import { HeaderForMobileComp } from "./components/HeaderForMobileComp";
import ImageCaroselHandle from "./components/ImageCarosel";

function App() {
  console.log("App component rendered");
  return (
    <>
      <div>
      <HeaderForMobileComp className="md:hidden" />
      <HeaderDesktop className="hidden md:block"/>
      <ImageCaroselHandle/>
      </div>
    </>
  );
}

export default App;
