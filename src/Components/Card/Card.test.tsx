import { render, screen } from "@testing-library/react";
import Card from "./Card";

it("Card is rendered", () => {
  render(
    <Card
      name="Buzz"
      tagline="A Real Bitter Experience."
      image_url="https://images.punkapi.com/v2/keg.png"
      abv={4.5}
      ph={4.4}
    />
  );
  const name = screen.getByRole("heading", { name: /Buzz/i });
  expect(name).toBeInTheDocument();
});
