import Home from "./pages/home";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import Login from "./pages/login";
import About from "./pages/about";
import ProductDetails from "./pages/productDetails";

import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import ShoppingCart from "./pages/shoppingCart";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exaxt path="/signup" element={<Signup />} />
        <Route
          path="/shop/productDetails/:productId"
          element={<ProductDetails />}
        />
        <Route exact path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
};

export default App;
