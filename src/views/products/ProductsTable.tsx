import { Box, useTheme } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useAppSelector } from "../../state/hooks";
import { allProducts } from "../../state/features/product/productSlice";

const ProductsTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const products = useAppSelector(allProducts);

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
    { field: "country_of_origin", headerName: "Country", flex: 0.75 },
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
            color: colors.greenAccent[400],
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
          "& .MuiDataGrid-toolbarContainer": {
            "& .MuiButton-text": {
              color: `${colors.gray[100]} !important`,
            },
          },
          "& .MuiFormControl-root .MuiFormLabel-root": {
            color:
              theme.palette.mode === "dark"
                ? colors.gray[100]
                : colors.gray[500],
          },
          "& .MuiButtonBase-root .MuiButton-textPrimary": {
            color:
              theme.palette.mode === "dark"
                ? colors.primary[200]
                : colors.primary[800],
          },
        }}
      >
        <DataGrid
          rows={products as any}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default ProductsTable;
