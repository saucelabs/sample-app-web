import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import * as Credentials from "../../utils/Credentials";
import InventoryItem from "../InventoryItem";
import { ShoppingCart } from "../../utils/shopping-cart";

jest.mock("@backtrace-labs/react", () => {
  const React = require("react");
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
      return { hasError: true };
    }
    render() {
      return this.state.hasError
        ? this.props.fallback || null
        : this.props.children;
    }
  }
  return { ErrorBoundary };
});

jest.mock("../../utils/shopping-cart");

let props;
let location;

function renderInventoryItem() {
  return render(
    <MemoryRouter>
      <InventoryItem.WrappedComponent {...props} />
    </MemoryRouter>,
  );
}

describe("InventoryItem", () => {
  const spyScrollTo = jest.fn();

  beforeEach(() => {
    props = { history: { push: jest.fn() } };
    location = { ...window.location, search: "?id=4" };
    Object.defineProperty(window, "location", { writable: true, value: location });
    Object.defineProperty(global.window, "scrollTo", { value: spyScrollTo });
    Object.defineProperty(global.window, "scrollY", { value: 1 });
    spyScrollTo.mockClear();
    ShoppingCart.getCartContents = jest.fn().mockReturnValue([]);
    ShoppingCart.registerCartListener = jest.fn();
    ShoppingCart.isItemInCart = jest.fn().mockReturnValue(false);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render with default props", () => {
    const { asFragment } = renderInventoryItem();
    expect(asFragment()).toMatchSnapshot();
    expect(spyScrollTo).toHaveBeenCalledTimes(1);
  });

  it("should render with error data if a not known product is opened", () => {
    Object.defineProperty(window, "location", {
      writable: true,
      value: { ...window.location, search: "?id=999" },
    });
    const { asFragment } = renderInventoryItem();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with BrokenComponent for an error user", () => {
    const isErrorUserSpy = jest.spyOn(Credentials, "isErrorUser");
    // Use mockReturnValue (not Once) so all render calls during error recovery return true
    isErrorUserSpy.mockReturnValue(true);
    const { asFragment } = renderInventoryItem();
    expect(asFragment()).toMatchSnapshot();
    expect(isErrorUserSpy).toHaveBeenCalled();
  });
});
