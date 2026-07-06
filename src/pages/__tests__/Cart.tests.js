import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Cart from "../Cart";
import { ShoppingCart } from "../../utils/shopping-cart";
import * as Credentials from "../../utils/Credentials";

jest.mock("../../utils/shopping-cart");

let props;

function renderCart(extraProps = {}) {
  return render(
    <MemoryRouter>
      <Cart.WrappedComponent {...props} {...extraProps} />
    </MemoryRouter>,
  );
}

describe("Cart", () => {
  beforeEach(() => {
    props = { history: { push: jest.fn() } };
    ShoppingCart.getCartContents = jest.fn().mockReturnValue([]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly without any items", () => {
    const { asFragment } = renderCart();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render correctly for a visual user", () => {
    const isVisualUserSpy = jest.spyOn(Credentials, "isVisualUser");
    isVisualUserSpy.mockReturnValue(true);
    const { asFragment } = renderCart();
    expect(asFragment()).toMatchSnapshot();
    isVisualUserSpy.mockClear();
  });

  it("should render correctly items", () => {
    ShoppingCart.getCartContents = jest.fn().mockReturnValue([1, 2, 3]);
    const { asFragment } = renderCart();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should redirect when trying to continue shopping", () => {
    const { getByTestId } = renderCart();
    fireEvent.click(getByTestId("continue-shopping"));
    expect(props.history.push).toBeCalledWith("/inventory.html");
  });

  it("should redirect when trying to checkout", () => {
    const { getByTestId } = renderCart();
    fireEvent.click(getByTestId("checkout"));
    expect(props.history.push).toBeCalledWith("/checkout-step-one.html");
  });
});
