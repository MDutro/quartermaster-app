import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./ProductForm";
import render from "../../utils/testRenderComponent";

test("on render the form is displayed", () => {
  render(<Form />);
  expect(screen.getByLabelText("Name")).toBeInTheDocument();
});
