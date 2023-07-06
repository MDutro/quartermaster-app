import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// import ProductProvider from "./context/productContext";
import { Provider } from "react-redux";
import store from "./state/store";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as Element | DocumentFragment
);
root.render(
  <React.StrictMode>
    {/* <ProductProvider> */}
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
    {/* </ProductProvider> */}
  </React.StrictMode>
);
