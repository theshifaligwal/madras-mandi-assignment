import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./Page/LogIn";
import SignUp from "./Page/SignUp";
import Products from "./Page/Products";
import Cart from "./Page/Cart";
import Order from "./Page/Order";
import "./App.css";
import ProductItem from "./Page/ProductItem";
import Menu from "./Component/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" exact element={<Products />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/login" exact element={<LogIn />} />
        <Route path="/product/:id" exact element={<ProductItem />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/order" exact element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
