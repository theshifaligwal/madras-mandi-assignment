import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Route from "./Route";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Route />
  </StrictMode>
);
