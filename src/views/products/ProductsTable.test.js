import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductsTable from "./ProductsTable";
import render from "../../utils/testRenderComponent";

test("on render the table is displayed", () => {
  render(<ProductsTable />);
  expect(
    screen.getByRole("grid", { queryFallbacks: true })
  ).toBeInTheDocument();
});
