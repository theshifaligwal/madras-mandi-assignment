import {
  ADD_ITEM_TO_CART,
  GET_ALL_PRODUCT,
  GET_PRODUCT_BY_ID,
  LOGIN,
  LOGOUT,
  REGISTER,
  REMOVE_ITEM_FROM_CART,
  RESET_CART,
} from "../actionType";

// Get all product
export const getProducts = (products) => {
  return {
    type: GET_ALL_PRODUCT,
    products,
  };
};

// Get product by Id
export const getProductById = (product) => {
  return {
    type: GET_PRODUCT_BY_ID,
    product,
  };
};

// Buy Products
export const resetCart = () => {
  return {
    type: RESET_CART,
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
    type: REGISTER,
    user,
  };
};

// Logout
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
