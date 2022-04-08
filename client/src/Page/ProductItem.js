import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addProductToCart, getProductById } from "../actions/actions";
import { API_URL } from "../api";
import { getProductByIdFromAPI } from "../helperFunction/product";

const ProductItem = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productItem);

  const handleProductAdd = (product) => (event) => {
    event.preventDefault();
    dispatch(addProductToCart(product));
  };

  useEffect(() => {
    getProductByIdFromAPI(id).then((res) => {
      // console.log(res);
      dispatch(getProductById(res));
    });
  }, []);

  return (
    !!product && (
      <div className="container-product-item">
        <h2 className="name-product-item">{product.attributes.name}</h2>
        <div className="meta-div-product-item">
          <img
            alt={product.attributes.name}
            className="image-product-item"
            src={`${API_URL}${product.attributes.Image.data.attributes.url}`}
          ></img>
          <div>
            <p className="description-product-item">
              {product.attributes.meta_description}
            </p>
            <p className="price-product-item">${product.attributes.price}</p>
            <button
              onClick={handleProductAdd(product)}
              className="btnRemoveFromCart"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductItem;
