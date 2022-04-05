import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, getProducts } from "../actions/actions";
import ProductCard from "../Component/ProductCard";
import { getAllProductsFromAPI } from "../helperFunction/product";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const state = useSelector((state) => state);

  const handleProductAdd = (product) => (event) => {
    event.preventDefault();
    dispatch(addProductToCart(product));
    console.log(state);
  };

  useEffect(() => {
    // Fetching all product
    getAllProductsFromAPI().then((res) => {
      // console.log(res.data);
      dispatch(getProducts(res.data));
    });
  }, []);

  console.log(state);
  return (
    <div className="containerDivProduct">
      {products.length > 0 &&
        products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            buttonFunction={handleProductAdd(product)}
          />
        ))}
    </div>
  );
};

export default Product;
