import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./Page/LogIn";
import SignUp from "./Page/SignUp";
import Product from "./Page/Product";
import Cart from "./Page/Cart";
import Order from "./Page/Order";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Product />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/login" exact element={<LogIn />} />
        {/* <Route path="/product" exact element={<Product />} /> */}
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/order" exact element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
