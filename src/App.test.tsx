import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

it("should render the form", () => {
  // arrange
  render(<App />);
  // act
  const nav = screen.getByRole("nav");

  // assert

  expect(nav).toBeInTheDocument();
});
