import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { IProduct } from "../../../types/product";
import ProductDataService from "../../../services/product.service";

const initialState = { products: [] };

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await ProductDataService.getAll();
  return response.data;
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const allProducts = (state: RootState) => state.products.products;

//export const { loadAll } = productSlice.actions;

export default productSlice.reducer;
