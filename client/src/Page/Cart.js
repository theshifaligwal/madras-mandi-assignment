import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  removeProductToCart,
  resetCart,
} from "../actions/actions";
import ProductCard from "../Component/ProductCard";
import { setOrderData } from "../helperFunction/order";
import products from "../products.json";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartProducts);
  const state = useSelector((state) => state);

  const handelRemoveFromCart = (product) => (event) => {
    event.preventDefault();
    dispatch(removeProductToCart(product));
    console.log(state);
  };

  const handleBuy = () => {
    setOrderData(products);
    dispatch(resetCart());
  };

  // Using Math.random same multiple product
  // can be added so id will be same
  return (
    <div className="containerDivProduct">
      {products?.map((product) => (
        <ProductCard
          key={Math.random()}
          product={product}
          isCart
          buttonFunction={handelRemoveFromCart(product)}
        />
      ))}
      {products.length > 0 && (
        <button onClick={handleBuy} className="btnRemoveFromCart">
          Buy Now
        </button>
      )}
    </div>
  );
};

export default Cart;
