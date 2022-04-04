import {
  ADD_ITEM_TO_CART,
  BUY,
  GET_ALL_PRODUCT,
  LOGIN,
  LOGOUT,
  REMOVE_ITEM_FROM_CART,
} from "../actionType";

// Get all product
export const getProducts = () => {
  return {
    type: GET_ALL_PRODUCT,
  };
};

// Buy Products
export const buyProducts = () => {
  return {
    type: BUY,
  };
};

// Add product to cart
export const addProductToCart = (product) => {
  return {
    type: ADD_ITEM_TO_CART,
    product,
  };
};

// Remove product from cart
export const removeProductToCart = (product) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    product,
  };
};

// Login
export const login = (user) => {
  return {
    type: LOGIN,
    user,
  };
};

// Register
export const register = (user) => {
  return {
    type: LOGIN,
    user,
  };
};

// Logout
export const logout = () => {
  return {
    type: LOGOUT,
  };
};


