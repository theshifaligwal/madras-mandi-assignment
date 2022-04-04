import { LOGIN, LOGOUT, REGISTER } from "../actionType";
import { API_URL } from "../api";
import { login, register, removeUserData } from "../helperFunction/user";

const initialState = {
  products: [],
  cart: {
    products: [],
    loading: false,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      console.log(action.user);
      login(action.user);
      return state;
    }

    case REGISTER: {
      console.log(action.user);
      register(action.user);
      return state;
    }

    case LOGOUT: {
      removeUserData();
      return state;
    }

    default:
      return state;
  }
};

export default rootReducer;
