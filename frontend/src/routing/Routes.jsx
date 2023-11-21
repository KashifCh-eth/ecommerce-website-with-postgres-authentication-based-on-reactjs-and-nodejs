import React from "react";
import { Routes, Route } from "react-router-dom";
import HOME from "../pages/Home/index.jsx";
import Products from "../pages/Products/index.jsx";
import ProductDetails from "../pages/ProductDetails/ProductDetails.jsx";
import Login from "../pages/Login/Login.jsx";
import Cart from "../pages/Cart/Cart.jsx";
import NavBar from "../components/NavBar/index.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import About from "../pages/About/About.jsx";
import ContactUs from "../pages/ContactUs/ContactUs.jsx";
import ErrorPage from "../pages/ErrPage/ErrorPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Checkout from "../pages/Checkout/Checkout.jsx";
import Fproduct from "../components/Fproduct/Fproduct.jsx";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HOME />} />
          <Route
            path="checkout"
            element={
              <ProtectedRoute>
                <Checkout/>
              </ProtectedRoute>
            }
          />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<ProductDetails />}>
            <Route index element={<Fproduct />} />
          </Route>

          {/* //:id is a parameter */}
          <Route path="products" element={<Products />}>
            {/* <Route path="/" element={<Products />} /> 
                <Route path="1" element={<h1>elment 1</h1>} />
                <Route path="2" element={<h1>elment 2</h1>} />
                <Route path="3" element={<h1>elment 3</h1>} /> */}
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default MyRoutes;
