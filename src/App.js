import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./sections/index";
import { Home, SingleProduct, Cart, Products_page } from "./Pages/index";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products_page />} />
        <Route path="/:id" element={<SingleProduct />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
