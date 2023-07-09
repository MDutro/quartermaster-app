import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
import { useAppDispatch } from "../../state/hooks";
import { addNewProduct } from "../../state/features/product/productSlice";
import { IProductFormInitialValues } from "../../types/product";

const initialValues: IProductFormInitialValues = {
  name: "",
  adjective: "",
  description: "",
  quantity: 0,
  country_of_origin: "",
};

const productSchema = yup.object().shape({
  name: yup.string().required("required"),
  adjective: yup.string(),
  description: yup.string().required("required"),
  quantity: yup.number().required("required"),
  country_of_origin: yup.string().required("required"),
});

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleFormSubmit = (value: IProductFormInitialValues) => {
    dispatch(addNewProduct(value));
    console.log(value);
    navigate("/products-table");
  };

  return (
    <Box m="20px">
      <Header
        title="New Product"
        subtitle="Create all the products you want!"
      />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={productSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              mb="30px"
              gridTemplateColumns="repeat(4, minmax(0,1fr))"
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Adjective"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.adjective}
                name="adjective"
                error={!!touched.adjective && !!errors.adjective}
                helperText={touched.adjective && errors.adjective}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Quantity"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.quantity}
                name="quantity"
                error={!!touched.quantity && !!errors.quantity}
                helperText={touched.quantity && errors.quantity}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Country"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.country_of_origin}
                name="country_of_origin"
                error={
                  !!touched.country_of_origin && !!errors.country_of_origin
                }
                helperText={
                  touched.country_of_origin && errors.country_of_origin
                }
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <TextField
              multiline
              minRows={8}
              maxRows={10}
              variant="filled"
              type="text"
              label="Description"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.description}
              name="description"
              error={!!touched.description && !!errors.description}
              helperText={touched.description && errors.description}
              style={{
                width: "100%",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
              }}
            />
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Product
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
