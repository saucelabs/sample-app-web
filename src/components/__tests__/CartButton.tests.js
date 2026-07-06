import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CartButton from "../CartButton";
import { ShoppingCart } from "../../utils/shopping-cart";

jest.mock("../../utils/shopping-cart");

let props;

describe("CartButton", () => {
  beforeEach(() => {
    props = { history: { push: jest.fn() } };
    ShoppingCart.getCartContents = jest.fn().mockReturnValue([]);
    ShoppingCart.registerCartListener = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render with default props", () => {
    const { asFragment } = render(
      <CartButton.WrappedComponent {...props} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the badge if products have been added into the cart", () => {
    const cartContents = [1, 2, 3];
    ShoppingCart.getCartContents = jest.fn().mockReturnValue(cartContents);
    const { getByTestId, asFragment } = render(
      <CartButton.WrappedComponent {...props} />,
    );
    expect(getByTestId("shopping-cart-badge")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should be able to go to the cart", () => {
    const { getByTestId } = render(<CartButton.WrappedComponent {...props} />);
    fireEvent.click(getByTestId("shopping-cart-link"));
    expect(props.history.push).toHaveBeenCalledWith("/cart.html");
  });
});
