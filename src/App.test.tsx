import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import CardContainer from "./Containers/CardContainer/CardContainer";
import Nav from "./Containers/NavBar/Nav";

it("search functionality works", async () => {
  render(<App />);
  // act
  const searchInput = screen.getByRole("Search");
  fireEvent.change(searchInput, { target: { value: "buzz" } });

  // assert
  expect(screen.getByText("buzz")).toBeDefined();
  expect(searchInput).toHaveValue("buzz");
});
