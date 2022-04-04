import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Route from "./Route";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStore(rootReducer);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Route />
    </Provider>
  </StrictMode>
);
