import Home from "./pages/home";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import Login from "./pages/login";
import ProductDetails from "./pages/productDetails";
import Signup from "./pages/signup";
import ShoppingCart from "./pages/shoppingCart";
import AdminDashboard from "./pages/adminDashboard/adminDashboard";
import Blog from "./pages/blog";

import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import UserProvider from "./context/userProvider";
import { ProductProvider } from "./context/productProvider";
import CreatePost from "./pages/createPost";

const App = () => {
  const options = {
    timeout: 1500,
    position: positions.BOTTOM_RIGHT,
  };

  return (
    <div>
      <UserProvider>
        <ProductProvider>
          <Navbar />
          <Provider template={AlertTemplate} {...options}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/shop" element={<Shop />} />
              <Route exact path="/blog" element={<Blog />} />
              <Route exact path="/createPost" element={<CreatePost />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/login" element={<Login />} />
              <Route exaxt path="/signup" element={<Signup />} />
              <Route
                path="/shop/productDetails/:productId"
                element={<ProductDetails />}
              />
              <Route exact path="/shoppingCart" element={<ShoppingCart />} />
              <Route exact path="/dashboard" element={<AdminDashboard />} />
            </Routes>
          </Provider>
        </ProductProvider>
      </UserProvider>
    </div>
  );
};

export default App;
