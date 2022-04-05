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
import { API_URL } from "../api";
import { removeOrderData } from "../helperFunction/order";
import { getAllProductsFromAPI } from "../helperFunction/product";
import { login, register, removeUserData } from "../helperFunction/user";

const initialState = {
  products: [],
  cartProducts: [],
  orderProducts: [],
  productItem: null,
  userIsAuthenticated: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      login(action.user);
      console.log({ ...state, userIsAuthenticated: true });
      return { ...state, userIsAuthenticated: true };
    }

    case REGISTER: {
      register(action.user);
      return { ...state, userIsAuthenticated: true };
    }

    case LOGOUT: {
      removeUserData();
      removeOrderData();
      return { ...state, userIsAuthenticated: false };
    }

    case GET_ALL_PRODUCT: {
      return { ...state, products: action.products };
    }

    case GET_PRODUCT_BY_ID: {
      return { ...state, productItem: action.product };
    }

    case ADD_ITEM_TO_CART: {
      state.cartProducts.push(action.product);
      return state;
    }

    case REMOVE_ITEM_FROM_CART: {
      let newState = state;
      newState.cartProducts = newState.cartProducts.filter(
        (product) => product !== action.product
      );
      return newState;
    }

    case RESET_CART: {
      return { ...state, cartProducts: [] };
    }

    default:
      return state;
  }
};

export default rootReducer;
