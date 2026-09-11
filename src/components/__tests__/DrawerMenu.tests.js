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

  it("should toggle the dynamic catalog submenu open and closed", () => {
    const { getByTestId, queryByTestId } = render(
      <DrawerMenu.WrappedComponent {...props} />,
    );
    expect(queryByTestId("dynamic-catalog-submenu")).not.toBeInTheDocument();

    fireEvent.click(getByTestId("dynamic-catalog-sidebar-link"), {
      preventDefault() {},
    });
    expect(getByTestId("dynamic-catalog-submenu")).toBeInTheDocument();
    expect(
      getByTestId("dynamic-catalog-sidebar-link").getAttribute("aria-expanded"),
    ).toEqual("true");

    fireEvent.click(getByTestId("dynamic-catalog-sidebar-link"), {
      preventDefault() {},
    });
    expect(queryByTestId("dynamic-catalog-submenu")).not.toBeInTheDocument();
  });

  it("should be able to redirect to the lazy load page when clicking on the submenu link", () => {
    const { getByTestId } = render(<DrawerMenu.WrappedComponent {...props} />);
    fireEvent.click(getByTestId("dynamic-catalog-sidebar-link"), {
      preventDefault() {},
    });
    fireEvent.click(getByTestId("dynamic-catalog-lazy-load-link"), {
      preventDefault() {},
    });
    expect(props.history.push).toHaveBeenCalledWith(
      "/dynamic-catalog-lazy-load.html",
    );
  });

  it("should be able to redirect to the spinner page when clicking on the submenu link", () => {
    const { getByTestId } = render(<DrawerMenu.WrappedComponent {...props} />);
    fireEvent.click(getByTestId("dynamic-catalog-sidebar-link"), {
      preventDefault() {},
    });
    fireEvent.click(getByTestId("dynamic-catalog-spinner-link"), {
      preventDefault() {},
    });
    expect(props.history.push).toHaveBeenCalledWith(
      "/dynamic-catalog-spinner.html",
    );
  });

  it("should be able to redirect to the slider page when clicking on the submenu link", () => {
    const { getByTestId } = render(<DrawerMenu.WrappedComponent {...props} />);
    fireEvent.click(getByTestId("dynamic-catalog-sidebar-link"), {
      preventDefault() {},
    });
    fireEvent.click(getByTestId("dynamic-catalog-slider-link"), {
      preventDefault() {},
    });
    expect(props.history.push).toHaveBeenCalledWith(
      "/dynamic-catalog-slider.html",
    );
  });
});
