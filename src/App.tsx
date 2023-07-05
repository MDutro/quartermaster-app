import { useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import Topbar from "./views/global/Topbar";
import Sidebar from "./views/global/Sidebar";
import { Products, ProductsTable } from "./views/products";
//import ProductsTable from "./views/products/ProductsTable";
//import Form from "./views/form";
import { ProductContext } from "./context/productContext";
import { ProductContextType, IProduct } from "./types/product";
import ProuctDataService from "./services/product.service";

function App() {
  const { setProductsContext } = useContext(
    ProductContext
  ) as ProductContextType;
  const [theme, colorMode] = useMode();

  useEffect(() => {
    console.log("@@@ useEffect running!!! @@@");
    const fetchData = async () => {
      const response = await ProuctDataService.getAll();
      setProductsContext(response.data);
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
              <Route path="/products" element={<Products />}></Route>
              {/* <Route path="/form" element={<Form />}></Route> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
