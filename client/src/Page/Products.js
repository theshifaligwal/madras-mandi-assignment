import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Component/ProductCard";
import products from "../products.json";

const Product = () => {
  const handleProductAdd = (event) => {
    event.preventDefault();
  };

  const products = useSelector((state) => state.products);
  console.log(products);
  return (
    <div className="containerDivProduct">
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          buttonFunction={handleProductAdd}
        />
      ))}
    </div>
  );
};

export default Product;
