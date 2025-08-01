import { fireEvent, render, screen } from "@testing-library/react";
import Heading from "../Heading";
import { Provider } from "react-redux";
import appStore from "../../utility/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Heading />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");
  // const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

test("Should render header component with a cart itmes 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Heading />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart (0 items)");
  // const loginButton = screen.getByText("Login");

  expect(cartItems).toBeInTheDocument();
});

test("Should render header component with a cart itmes 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Heading />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);
  // const loginButton = screen.getByText("Login");

  expect(cartItems).toBeInTheDocument();
});

test("Should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Heading />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByText("Login");
  
  fireEvent.click(loginButton);

  const logoutButton = screen.getByText("Logout");

  expect(logoutButton).toBeInTheDocument();
});