import * as React from "react";
import { ProductContextType, IProduct } from "../types/product";

export const ProductContext = React.createContext<ProductContextType>({
  products: [],
  setProductsContext: () => {},
});

const ProductProvider: React.FC<any> = ({ children }) => {
  const [products, setProducts] = React.useState<IProduct[]>([]);

  const setProductsContext = (products: IProduct[]) => {
    console.log("@@@ setProductsContext running!!! @@@");
    setProducts(products);
  };

  return (
    <ProductContext.Provider value={{ products, setProductsContext }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
