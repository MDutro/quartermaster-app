import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../../context/productContext";
import { ProductContextType, IProduct } from "../../types/product";

export const Products = () => {
  const { products } = useContext(ProductContext) as ProductContextType;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.length > 0 &&
          products.map((product: IProduct, index) => {
            return (
              <li key={index} style={{ paddingBottom: "20px" }}>
                <div>{product.name}</div>
                <div>{product.description}</div>
                <div>{product.quantity}</div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Products;
