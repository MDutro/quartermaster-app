import { Link, Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import Topbar from "./views/global/Topbar";
import Sidebar from "./views/global/Sidebar";
import { Products } from "/home/dutro/code/quartermaster-app/src/views/products/Products";
//import ProductsTable from "./views/products/ProductsTable";
//import Form from "./views/form";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode as any}>
      <ThemeProvider theme={theme as Theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              {/* <Route path="/products-table" element={<ProductsTable />}></Route> */}
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
