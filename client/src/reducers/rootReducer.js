import { LOGIN, LOGOUT, REGISTER } from "../actionType";
import { API_URL } from "../api";
import { login, register, removeUserData } from "../helperFunction/user";

const initialState = {
  products: [],
  cart: {
    products: [],
    loading: false,
  },
  userIsAuthenticated: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      login(action.user);
      return { ...state, userIsAuthenticated: true };
    }

    case REGISTER: {
      register(action.user);
      return { ...state, userIsAuthenticated: true };
    }
    
    case LOGOUT: {
      removeUserData();
      return { ...state, userIsAuthenticated: false };
    }

    default:
      return state;
  }
};

export default rootReducer;
