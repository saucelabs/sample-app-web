import React from "react";
import { shallow } from "enzyme";
import CheckOutStepTwo from "../CheckOutStepTwo";
import { ShoppingCart } from "../../utils/shopping-cart";
import * as Credentials from "../../utils/Credentials";

jest.mock("../../utils/shopping-cart");

let props;

describe("CheckOutStepTwo", () => {
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
    const wrapper = shallow(<CheckOutStepTwo.WrappedComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly items", () => {
    const cartContents = [1, 2, 3];
    ShoppingCart.getCartContents = jest.fn().mockReturnValue(cartContents);
    const wrapper = shallow(<CheckOutStepTwo.WrappedComponent {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should redirect when trying to cancel", () => {
    const wrapper = shallow(<CheckOutStepTwo.WrappedComponent {...props} />);
    const ContinueShopping = wrapper.find("Button").at(0);
    ContinueShopping.simulate("click", {
      preventDefault() {},
    });

    expect(props.history.push).toBeCalledWith("/inventory.html");
  });

  it("should redirect when trying to finish", () => {
    const wrapper = shallow(<CheckOutStepTwo.WrappedComponent {...props} />);
    const Checkout = wrapper.find("Button").at(1);
    Checkout.simulate("click", {
      preventDefault() {},
    });

    expect(ShoppingCart.resetCart).toHaveBeenCalledTimes(1);
    expect(props.history.push).toBeCalledWith("/checkout-complete.html");
  });

  it("should give the incorrect order total when we are logged in as a problem user", () => {
    const isProblemUserSpy = jest.spyOn(Credentials, "isProblemUser");
    isProblemUserSpy.mockReturnValue(true);
    const cartContents = [1, 2, 3];
    ShoppingCart.getCartContents = jest.fn().mockReturnValue(cartContents);
    const wrapper = shallow(<CheckOutStepTwo.WrappedComponent {...props} />);

    expect(isProblemUserSpy).toHaveBeenCalledTimes(3);
    expect(wrapper).toMatchSnapshot();
  });

  it("should should not reset the cart when a problem user finishes", () => {
    const isProblemUserSpy = jest.spyOn(Credentials, "isProblemUser");
    isProblemUserSpy.mockReturnValue(true);

    const wrapper = shallow(<CheckOutStepTwo.WrappedComponent {...props} />);
    const Checkout = wrapper.find("Button").at(1);
    Checkout.simulate("click", {
      preventDefault() {},
    });

    expect(isProblemUserSpy).toHaveBeenCalledTimes(1);
    expect(ShoppingCart.resetCart).not.toHaveBeenCalled();
    expect(props.history.push).toBeCalledWith("/checkout-complete.html");
  });
});
