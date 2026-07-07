import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CheckOutStepTwo from "../CheckOutStepTwo";
import { ShoppingCart } from "../../utils/shopping-cart";
import * as Credentials from "../../utils/Credentials";

jest.mock("../../utils/shopping-cart");

let props;

function renderCheckout() {
  return render(
    <MemoryRouter>
      <CheckOutStepTwo.WrappedComponent {...props} />
    </MemoryRouter>,
  );
}

describe("CheckOutStepTwo", () => {
  beforeEach(() => {
    props = { history: { push: jest.fn() } };
    ShoppingCart.getCartContents = jest.fn().mockReturnValue([]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly without any items", () => {
    const { asFragment } = renderCheckout();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render correctly items", () => {
    ShoppingCart.getCartContents = jest.fn().mockReturnValue([1, 2, 3]);
    const { asFragment } = renderCheckout();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should redirect when trying to cancel", () => {
    const { getByTestId } = renderCheckout();
    fireEvent.click(getByTestId("cancel"));
    expect(props.history.push).toHaveBeenCalledWith("/inventory.html");
  });

  it("should redirect when trying to finish", () => {
    const { getByTestId } = renderCheckout();
    fireEvent.click(getByTestId("finish"));
    expect(ShoppingCart.resetCart).toHaveBeenCalledTimes(1);
    expect(props.history.push).toHaveBeenCalledWith("/checkout-complete.html", {
      state: {
        order: {
          items: [],
          personalInfo: {},
          orderTotal: 0,
          orderTax: "0.00",
          orderGrandTotal: "0.00",
          orderDate: expect.any(String),
        },
      },
    });
  });

  it("should give the incorrect order total when we are logged in as a problem user", () => {
    const isProblemUserSpy = jest.spyOn(Credentials, "isProblemUser");
    isProblemUserSpy.mockReturnValue(true);
    ShoppingCart.getCartContents = jest.fn().mockReturnValue([1, 2, 3]);
    const { asFragment } = renderCheckout();
    expect(isProblemUserSpy).toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should should not reset the cart when a problem user finishes", () => {
    const isProblemUserSpy = jest.spyOn(Credentials, "isProblemUser");
    isProblemUserSpy.mockReturnValue(true);
    const { getByTestId } = renderCheckout();
    fireEvent.click(getByTestId("finish"));
    expect(isProblemUserSpy).toHaveBeenCalled();
    expect(ShoppingCart.resetCart).not.toHaveBeenCalled();
    expect(props.history.push).toHaveBeenCalledWith("/checkout-complete.html", {
      state: {
        order: {
          items: [],
          personalInfo: {},
          orderTotal: 0,
          orderTax: "0.00",
          orderGrandTotal: "0.00",
          orderDate: expect.any(String),
        },
      },
    });
  });
});
