import React, { useState } from "react";
import { API_URL } from "../api";
import { getOrderData } from "../helperFunction/order";
import { useSelector } from "react-redux";
import { getUserData } from "../helperFunction/user";
import { Navigate } from "react-router-dom";

const Order = () => {
  const [products] = useState(getOrderData());
  const userIsAuthenticated = useSelector((state) => state.userIsAuthenticated);
  const getUser = getUserData();

  return (
    <div className="container">
      {!(userIsAuthenticated || getUser) && <Navigate to="/" />}
      {!!products &&
        products.map((product) => (
          <div key={Math.random()} className="container-order-item">
            <h2 className="name-order-item">{product.attributes.name}</h2>
            <div className="meta-div-order-item">
              <img
                className="image-order-item"
                src={`${API_URL}${product.attributes.Image.data.attributes.url}`}
              ></img>
              <div>
                <p className="description-order-item">
                  {product.attributes.meta_description.slice(0, 100)}
                </p>
                <p className="price-order-item">${product.attributes.price}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Order;
