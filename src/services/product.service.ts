import axiosConfig from "./axiosConfig";

class ProductDataService {
  getAll() {
    return axiosConfig.get("/products");
  }
}

export default new ProductDataService();
