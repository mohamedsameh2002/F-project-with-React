import Navbar from "./compoenents/Navbar";
import Slider from "./compoenents/Slider";
import ProductList from "./compoenents/ProductList";
import About from "./compoenents/About";
import { Route, Routes } from "react-router-dom";
import Detail from "./compoenents/Detail"
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={
          <>
            <Slider></Slider>
            <ProductList></ProductList>
          </>
        }></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="products/:productId" element={<Detail></Detail>}></Route>
      </Routes>

    </div>
  );
}

export default App;
