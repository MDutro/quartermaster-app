import axiosConfig from "./axiosConfig";
import { IProductFormInitialValues } from "../types/product";

class ProductDataService {
  getAll() {
    return axiosConfig.get("/products");
  }

  createNewProduct(newProduct: IProductFormInitialValues) {
    return axiosConfig.post("/products/create-product", newProduct);
  }
}

export default new ProductDataService();
