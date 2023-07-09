import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { IProduct, IProductFormInitialValues } from "../../../types/product";
import ProductDataService from "../../../services/product.service";

const ProductsList: IProduct[] = [];

const initialState = { data: ProductsList };

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await ProductDataService.getAll();
  return response.data;
});

export const addNewProduct = createAsyncThunk(
  "addNewProduct",
  async (newProduct: IProductFormInitialValues) => {
    const response = await ProductDataService.createNewProduct(newProduct);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.data.push(action.payload);
      });
  },
});

export const allProducts = (state: RootState) => state.products.data;

//export const { loadAll } = productSlice.actions;

export default productSlice.reducer;
