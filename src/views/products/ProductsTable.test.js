import { render as renderWithRedux, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import ProductsTable from "./ProductsTable";
import { Provider } from "react-redux"
import store from "../../state/store";

const render = component => renderWithRedux(
  <Provider store={store}>
  {component}
</Provider>
)

test("on render the table is displayed", () => {
  render(<ProductsTable />);
  expect(screen.getByRole("grid", {queryFallbacks: true})).toBeInTheDocument();
});
