import { render as renderWithRedux } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../state/store";

const render = (component) =>
  renderWithRedux(<Provider store={store}>{component}</Provider>);

export default render;
