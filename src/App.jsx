import "./App.css";
import BannerCarousel from "./Components/BannerCarousel";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <BannerCarousel></BannerCarousel>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
