import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Cart from "../Cart";
import { ShoppingCart } from "../../utils/shopping-cart";
import { Favorites } from "../../utils/favorites";
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
    window.localStorage.removeItem("favorite-items");
  });

  it("should render correctly without any items", () => {
    const { asFragment } = renderCart();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should not render a favorites section when there are no favorites", () => {
    const { queryByTestId } = renderCart();
    expect(queryByTestId("favorites-list")).not.toBeInTheDocument();
  });

  it("should render a favorites section when there are favorites", () => {
    Favorites.addItem(1);
    const { getByTestId } = renderCart();
    expect(getByTestId("favorites-list")).toBeInTheDocument();
  });

  it("should add a favorited item to the cart without removing it from favorites when Move to cart is clicked", () => {
    Favorites.addItem(1);
    const { getByTestId } = renderCart();
    fireEvent.click(getByTestId("move-to-cart-sauce-labs-bolt-t-shirt"));
    expect(ShoppingCart.addItem).toHaveBeenCalledWith(1);
    expect(Favorites.isItemInFavorites(1)).toBe(true);
  });

  it("should update the cart contents when the cart listener fires", () => {
    const { getByTestId, queryByTestId } = renderCart();
    expect(queryByTestId("inventory-item")).not.toBeInTheDocument();
    ShoppingCart.getCartContents = jest.fn().mockReturnValue([1]);
    const calls = ShoppingCart.registerCartListener.mock.calls;
    const registeredListener = calls[calls.length - 1][0];
    act(() => {
      registeredListener.forceUpdate();
    });
    expect(getByTestId("inventory-item")).toBeInTheDocument();
  });

  it("should update the favorites section when the favorites listener fires", () => {
    const { getByTestId, queryByTestId } = renderCart();
    expect(queryByTestId("favorites-list")).not.toBeInTheDocument();
    act(() => {
      Favorites.addItem(1);
    });
    expect(getByTestId("favorites-list")).toBeInTheDocument();
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
    expect(props.history.push).toHaveBeenCalledWith("/inventory.html");
  });

  it("should redirect when trying to checkout", () => {
    const { getByTestId } = renderCart();
    fireEvent.click(getByTestId("checkout"));
    expect(props.history.push).toHaveBeenCalledWith("/checkout-step-one.html");
  });
});
