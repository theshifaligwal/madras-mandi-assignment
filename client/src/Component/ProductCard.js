import React from "react";
import { API_URL } from "../api";

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
        {/* <span className="product-catagory">Women,bag</span> */}
        <h4>
          <a href="">{product.attributes.name}</a>
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
