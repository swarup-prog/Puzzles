import Home from "./pages/home";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import Login from "./pages/login";
import About from "./pages/about";
import ProductDetails from "./pages/productDetails";
import Signup from "./pages/signup";
import ShoppingCart from "./pages/shoppingCart";

import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { useState } from "react";
import { UserContext } from "./context/userContext";

const App = () => {
  const [user, setUser] = useState();

  const options = {
    timeout: 1500,
    position: positions.BOTTOM_RIGHT,
  };

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Provider template={AlertTemplate} {...options}>
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
        </Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
