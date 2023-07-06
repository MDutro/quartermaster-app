import { useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import Topbar from "./views/global/Topbar";
import Sidebar from "./views/global/Sidebar";
import { ProductsTable } from "./views/products";
import { IProduct } from "./types/product";
import ProuctDataService from "./services/product.service";
import { useAppSelector, useAppDispatch } from "./state/hooks";
import {
  allProducts,
  fetchProducts,
} from "./state/features/product/productSlice";

function App() {
  const [theme, colorMode] = useMode();
  const products = useAppSelector(allProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("@@@ useEffect running!!! @@@");
    const fetchData = async () => {
      const response = await ProuctDataService.getAll();
      //setProductsContext(response.data);
      dispatch(fetchProducts());
    };
    fetchData();
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode as any}>
      <ThemeProvider theme={theme as Theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/products-table" element={<ProductsTable />}></Route>
              {/* <Route path="/products" element={<Products />}></Route> */}
              {/* <Route path="/form" element={<Form />}></Route> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
