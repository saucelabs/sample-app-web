import React from "react";
import { shallow } from "enzyme";
import Cart from "../Cart";
import { ShoppingCart } from "../../utils/shopping-cart";

jest.mock("../../utils/shopping-cart");

let props;

describe("Cart", () => {
  beforeEach(() => {
    props = {
      history: { push: jest.fn() },
    };
    ShoppingCart.getCartContents = jest.fn().mockReturnValue([]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly without any items", () => {
    const wrapper = shallow(<Cart.WrappedComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly items", () => {
    const cartContents = [1, 2, 3];
    ShoppingCart.getCartContents = jest.fn().mockReturnValue(cartContents);
    const wrapper = shallow(<Cart.WrappedComponent {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should redirect when trying to continue shopping", () => {
    const wrapper = shallow(<Cart.WrappedComponent {...props} />);
    const ContinueShopping = wrapper.find("Button").at(0);
    ContinueShopping.simulate("click", {
      preventDefault() {},
    });

    expect(props.history.push).toBeCalledWith("/inventory.html");
  });

  it("should redirect when trying to checkout", () => {
    const wrapper = shallow(<Cart.WrappedComponent {...props} />);
    const Checkout = wrapper.find("Button").at(1);
    Checkout.simulate("click", {
      preventDefault() {},
    });

    expect(props.history.push).toBeCalledWith("/checkout-step-one.html");
  });
});
