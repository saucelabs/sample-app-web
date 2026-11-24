import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FavoriteCartItem from "../FavoriteCartItem";

let props;

describe("FavoriteCartItem", () => {
  beforeEach(() => {
    props = {
      item: {
        id: 1,
        name: "Swag Item name",
        desc: "Swag Item description",
        price: 9.99,
        image_url: "image.png",
      },
      onMoveToCart: jest.fn(),
    };
  });

  afterEach(() => {
    window.localStorage.removeItem("favorite-items");
  });

  it("should render the item name, description, and price", () => {
    const { getByTestId } = render(<FavoriteCartItem {...props} />);
    expect(getByTestId("inventory-item-name")).toHaveTextContent(
      props.item.name,
    );
    expect(getByTestId("inventory-item-desc")).toHaveTextContent(
      props.item.desc,
    );
    expect(getByTestId("inventory-item-price")).toHaveTextContent("$9.99");
  });

  it("should render a favorite toggle for the item", () => {
    const { getByTestId } = render(<FavoriteCartItem {...props} />);
    expect(getByTestId(`favorite-toggle-${props.item.id}`)).toBeInTheDocument();
  });

  it("should call onMoveToCart with the item id when Move to cart is clicked", () => {
    const { getByTestId } = render(<FavoriteCartItem {...props} />);
    fireEvent.click(getByTestId("move-to-cart-swag-item-name"));
    expect(props.onMoveToCart).toHaveBeenCalledWith(props.item.id);
  });

  it("should render an empty placeholder when there is no item", () => {
    const { container } = render(
      <FavoriteCartItem {...props} item={undefined} />,
    );
    expect(container.querySelector(".removed_cart_item")).toBeInTheDocument();
  });
});
