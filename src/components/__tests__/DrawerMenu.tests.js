import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DrawerMenu from "../DrawerMenu";
import * as Credentials from "../../utils/Credentials";
import { ShoppingCart } from "../../utils/shopping-cart";

jest.mock("../../utils/shopping-cart");

let props;

describe("DrawerMenu", () => {
  beforeEach(() => {
    props = {
      history: { push: jest.fn() },
    };
  });

  it("should render correctly", () => {
    const { asFragment } = render(<DrawerMenu.WrappedComponent {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render correctly for a visual user", () => {
    const isVisualUserSpy = jest.spyOn(Credentials, "isVisualUser");
    isVisualUserSpy.mockReturnValue(true);
    const { asFragment } = render(<DrawerMenu.WrappedComponent {...props} />);
    expect(asFragment()).toMatchSnapshot();
    isVisualUserSpy.mockClear();
  });

  it("should render return an incorrect about link for a problem user", () => {
    const isProblemUserSpy = jest.spyOn(Credentials, "isProblemUser");
    isProblemUserSpy.mockReturnValue(true);
    const { getByTestId } = render(<DrawerMenu.WrappedComponent {...props} />);
    expect(getByTestId("about-sidebar-link").getAttribute("href")).toEqual(
      "https://saucelabs.com/error/404",
    );
    isProblemUserSpy.mockClear();
  });

  it("should be able to redirect to the inventory page when clicking on the all items link", () => {
    const { getByTestId } = render(<DrawerMenu.WrappedComponent {...props} />);
    fireEvent.click(getByTestId("inventory-sidebar-link"), {
      preventDefault() {},
    });
    expect(props.history.push).toHaveBeenCalledWith("/inventory.html");
  });

  it("should be able to redirect to the login page when clicking on the logout link", () => {
    const removeCredentialsSpy = jest.spyOn(Credentials, "removeCredentials");
    removeCredentialsSpy.mockReturnValue(true);
    const { getByTestId } = render(<DrawerMenu.WrappedComponent {...props} />);
    fireEvent.click(getByTestId("logout-sidebar-link"), {
      preventDefault() {},
    });
    expect(props.history.push).toHaveBeenCalledWith("/");
    expect(removeCredentialsSpy).toHaveBeenCalledTimes(1);
  });

  it("should be able to reset the storage when Reset App State is being called", () => {
    ShoppingCart.resetCart = jest.fn();
    const { getByTestId } = render(<DrawerMenu.WrappedComponent {...props} />);
    fireEvent.click(getByTestId("reset-sidebar-link"), {
      preventDefault() {},
    });
    expect(ShoppingCart.resetCart).toHaveBeenCalledTimes(1);
  });
});
