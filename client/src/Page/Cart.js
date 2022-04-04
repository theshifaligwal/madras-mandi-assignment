import React from "react";
import ProductCard from "../Component/ProductCard";
import products from "../products.json";

const Cart = () => {
  const handelRemoveFromCart = () => {};
  return (
    <div className="containerDivProduct">
      {products.data?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isCart
          buttonFunction={handelRemoveFromCart}
        />
      ))}
    </div>
  );
};

export default Cart;
