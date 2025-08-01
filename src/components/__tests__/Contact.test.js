import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Test the heading", () => {
  render(<Contact />);

  // Querying
  const heading = screen.getByRole("heading");

  // Assertion
  expect(heading).toBeInTheDocument();

});

test("Test the input place holder", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("Enter Name");

  expect(inputName).toBeInTheDocument();

});

test("Test the Submit Button", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();

});

test("Test the Submit Button", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");

  expect(button).toBeInTheDocument();

});

test("Should load 2 input boxs on the contact component", () => {
  render(<Contact />);

  const inputBox = screen.getAllByRole("textbox");

  expect(inputBox[0]).toBeInTheDocument();

});

test("Should load 2 input boxs on the contact component for length", () => {
  render(<Contact />);

  const inputBox = screen.getAllByRole("textbox");

  console.log(inputBox.length)

  expect(inputBox.length).toBe(2);

});