import React from "react";
import { API_URL } from "../api";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { product, isCart, buttonFunction } = props;
  return (
    <div className="product-card" key={product.id}>
      <div className="product-tumb">
        <img
          src={`${API_URL}${product.attributes.Image.data.attributes.url}`}
          alt=""
        />
      </div>
      <div className="product-details">
        <h4>
          <Link to={`/product/${product.id}`} href="">
            {product.attributes.name}
          </Link>
        </h4>
        <p>{`${product.attributes.meta_description.slice(0, 200)}...`}</p>
        <div className="product-bottom-details">
          <div className="product-price">
            <small>{`$ ${product.attributes.price + 10}`}</small>
            {product.attributes.price}
          </div>
          <div className="product-links">
            {isCart ? (
              <button onClick={buttonFunction} className="btnRemoveFromCart">
                Remove From Cart
              </button>
            ) : (
              <a onClick={buttonFunction}>
                <i className="fa fa-shopping-cart"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
