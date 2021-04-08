import React, { useState as useStateMock } from "react";
import { shallow } from "enzyme";
import CartButton from "../CartButton";
import { ShoppingCart } from "../../utils/shopping-cart";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
  useEffect: (f) => f(),
}));
jest.mock("../../utils/shopping-cart");

let props;

describe("CartButton", () => {
  const setState = jest.fn();

  beforeEach(() => {
    props = {
      history: {
        push: jest.fn(),
      },
    };
    useStateMock.mockImplementation((init) => [init, setState]);
    ShoppingCart.getCartContents = jest.fn().mockReturnValue([]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render with default props", () => {
    const component = shallow(<CartButton.WrappedComponent {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should render the badge if products have been added into the cart", () => {
    const cartContents = [1, 2, 3];
    ShoppingCart.registerCartListener = jest.fn().mockReturnValue((f) => f());
    ShoppingCart.getCartContents = jest.fn().mockReturnValue(cartContents);
    const component = shallow(<CartButton.WrappedComponent {...props} />);
    expect(ShoppingCart.getCartContents).toHaveBeenCalledTimes(1);
    expect(ShoppingCart.registerCartListener).toHaveBeenCalledTimes(1);
    expect(useStateMock).toHaveBeenCalledWith(cartContents);
    expect(component).toMatchSnapshot();
  });

  it("should be able to go to the cart", () => {
    const component = shallow(<CartButton.WrappedComponent {...props} />);
    const cartButton = component.find(".shopping_cart_link").at(0);
    cartButton.simulate("click", {
      preventDefault() {},
    });

    expect(props.history.push).toBeCalledWith("/cart.html");
  });
});
