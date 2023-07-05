import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import ProductProvider from "./context/productContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as Element | DocumentFragment
);
root.render(
  <React.StrictMode>
    <ProductProvider>
      <Router>
        <App />
      </Router>
    </ProductProvider>
  </React.StrictMode>
);
