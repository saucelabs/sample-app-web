import React from "react";
import { render } from "@testing-library/react";
import DynamicCatalogItemCard from "../DynamicCatalogItemCard";

const item = {
  id: 0,
  name: "Sauce Labs Bike Light",
  price: 9.99,
  image_url: "bike-light-1200x1500.jpg",
};

describe("DynamicCatalogItemCard", () => {
  it("should render the item content when loaded", () => {
    const { getByTestId } = render(
      <DynamicCatalogItemCard item={item} testId="card-0" />,
    );
    expect(getByTestId("card-0-name")).toHaveTextContent(item.name);
    expect(getByTestId("card-0-price")).toHaveTextContent("$9.99");
    expect(getByTestId("card-0-img")).toBeInTheDocument();
  });

  it("should render a placeholder when not loaded", () => {
    const { getByTestId, queryByTestId } = render(
      <DynamicCatalogItemCard item={item} isLoaded={false} testId="card-0" />,
    );
    expect(getByTestId("card-0-placeholder")).toBeInTheDocument();
    expect(queryByTestId("card-0-name")).not.toBeInTheDocument();
  });

  it("should forward a ref to the root element", () => {
    const ref = React.createRef();
    render(<DynamicCatalogItemCard ref={ref} item={item} testId="card-0" />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
