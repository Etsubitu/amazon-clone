// import { Carousel } from "react-responsive-carousel";
import "./App.css";
import CarouselEffect from "./Components/Carousel/CarouselEffect";
import Header from "./Components/Header/Header";
import Category from "./Components/Category/category";
import Product from "./Components/Product/Product";

function App() {
  return (
    <>
      <Header />
      <CarouselEffect />
      <Category />
      <Product />
    </>
  );
}

export default App;
