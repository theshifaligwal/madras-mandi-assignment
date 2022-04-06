import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  removeProductToCart,
  resetCart,
} from "../actions/actions";
import ProductCard from "../Component/ProductCard";
import { setOrderData } from "../helperFunction/order";
import { getUserData } from "../helperFunction/user";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartProducts);
  const userIsAuthenticated = useSelector((state) => state.userIsAuthenticated);

  const handelRemoveFromCart = (product) => (event) => {
    event.preventDefault();
    dispatch(removeProductToCart(product));
  };

  const getUser = getUserData();

  const handleBuy = () => {
    setOrderData(products);
    dispatch(resetCart());
  };

  // Using Math.random same multiple product
  // can be added so id will be same
  return (
    <div className="containerDivProduct">
      {products.length === 0 && <h3>No item in cart please add the product</h3>}
      {products?.map((product) => (
        <ProductCard
          key={Math.random()}
          product={product}
          isCart
          buttonFunction={handelRemoveFromCart(product)}
        />
      ))}
      {products.length > 0 &&
        (!(userIsAuthenticated || getUser) ? (
          <p className="loginToBuy">Please Login to Buy</p>
        ) : (
          <button onClick={handleBuy} className="btnRemoveFromCart">
            Buy Now
          </button>
        ))}
    </div>
  );
};

export default Cart;
