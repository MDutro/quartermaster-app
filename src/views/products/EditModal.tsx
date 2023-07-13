import { Modal, Box } from "@mui/material";
import { ProductForm } from "../form";
import { IProductFormInitialValues } from "../../types/product";

interface IEditModalProps {
  rowData: IProductFormInitialValues;
  setOpen: () => {};
  open: boolean;
}
const EditModal = ({ rowData, setOpen, open }: IEditModalProps) => {
  return (
    <Modal
      open
      aria-labelledby="modal-edit-product"
      aria-describedby="modal to edit product information"
    >
      <Box sx={style}>
        <ProductForm {...rowData} />
      </Box>
    </Modal>
  );
};

export default EditModal;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
