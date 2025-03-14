// import Header from "./components/HeaderForMobileComp"
// import ImageCarousel from "./components/ImageCarousel"
import HeaderDesktop from "./components/HeaderForDesktopComp";

function App() {
  console.log("App component rendered");
  return (
    <>
      <div>
        <HeaderDesktop/>
        {/* <ImageCarousel /> */}
      </div>
    </>
  );
}

export default App;
