import React from "react";
import { shallow } from "enzyme";
import DrawerMenu from "../DrawerMenu";
import * as Credentials from "../../utils/Credentials";
import { ShoppingCart } from "../../utils/shopping-cart";

jest.mock("../../utils/shopping-cart");

let props;

describe("DrawerMenu", () => {
  beforeEach(() => {
    props = {
      history: {
        push: jest.fn(),
      },
    };
  });

  it("should render correctly", () => {
    const component = shallow(<DrawerMenu.WrappedComponent {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should render return an incorrect about link for a problem user", () => {
    const isProblemUserSpy = jest.spyOn(Credentials, "isProblemUser");
    isProblemUserSpy.mockReturnValue(true);
    const component = shallow(<DrawerMenu.WrappedComponent {...props} />);
    const aboutLink = component.find("a").at(1);
    aboutLink.simulate("click", {
      preventDefault() {},
    });

    expect(isProblemUserSpy).toHaveBeenCalledTimes(1);
    expect(aboutLink.props().href).toEqual("https://saucelabs.com/error/404");

    isProblemUserSpy.mockClear();
  });

  it("should be able to redirect to the inventory page when clicking on the all items link", () => {
    const component = shallow(<DrawerMenu.WrappedComponent {...props} />);
    const allItemsLink = component.find("a").at(0);
    allItemsLink.simulate("click", {
      preventDefault() {},
    });

    expect(props.history.push).toHaveBeenCalledWith("/inventory.html");
  });

  it("should be able to redirect to the login page when clicking on the logout link", () => {
    const component = shallow(<DrawerMenu.WrappedComponent {...props} />);
    const logoutLink = component.find("a").at(2);
    const removeCredentialsSpy = jest.spyOn(Credentials, "removeCredentials");
    removeCredentialsSpy.mockReturnValue(true);
    logoutLink.simulate("click", {
      preventDefault() {},
    });

    expect(props.history.push).toHaveBeenCalledWith("/");
    expect(removeCredentialsSpy).toHaveBeenCalledTimes(1);
  });

  it("should be able to reset the storage when Reset App State is being called", () => {
    const component = shallow(<DrawerMenu.WrappedComponent {...props} />);
    const resetAppStateLink = component.find("a").at(3);
    ShoppingCart.resetCart = jest.fn();
    resetAppStateLink.simulate("click", {
      preventDefault() {},
    });

    expect(ShoppingCart.resetCart).toHaveBeenCalledTimes(1);
  });
});
