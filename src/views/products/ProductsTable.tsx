import { useContext } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { ProductContextType } from "../../types/product";
import { ProductContext } from "../../context/productContext";
import Header from "../../components/Header";

const ProductsTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { products } = useContext(ProductContext) as ProductContextType;

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1.05 },
    {
      field: "name",
      headerName: "Name",
      flex: 0.75,
      cellClassName: "name-column--cell",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "adjective", headerName: "Adjective" },
    { field: "description", headerName: "Description", flex: 1 },
    { field: "createdAt", headerName: "Created At", flex: 0.75 },
    { field: "updatedAt", headerName: "Updated At", flex: 0.75 },
  ];

  return (
    <Box m="20px">
      <Header title="Product Table" subtitle="A table for products" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px",
          },
        }}
      >
        <DataGrid rows={products} columns={columns} />
      </Box>
    </Box>
  );
};

export default ProductsTable;
