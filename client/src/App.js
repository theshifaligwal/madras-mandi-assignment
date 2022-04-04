import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./component/LogIn";
import SignUp from "./component/SignUp";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Order from "./component/Order";
import "./App.css";
import Home from "./component/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}  />
        <Route path="/signup" exact element={<SignUp/>} />
        <Route path="/login" exact element={<LogIn />} />
        <Route path="/product" exact element={<Product />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/order" exact element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
