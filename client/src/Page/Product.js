import React from "react";
import ProductCard from "../Component/ProductCard";
import products from "../products.json";

const Product = () => {
  const handleProductAdd = (event) => {
    event.preventDefault();
  };

  return (
    <div className="containerDivProduct">
      {products.data?.map((product) => (
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
