import React, { useState as useStateMock } from "react";
import { shallow } from "enzyme";
import CartItem from "../CartItem";
import { ShoppingCart } from "../../utils/shopping-cart";
import * as Credentials from "../../utils/Credentials";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));
jest.mock("../../utils/shopping-cart");

let props;

describe("InventoryListItem", () => {
  const setState = jest.fn();

  beforeEach(() => {
    props = {
      history: {
        push: jest.fn(),
      },
      item: {
        desc: "Swag Item description",
        id: 1,
        name: "Swag Item name",
        price: 9.99,
      },
      showButton: true,
    };
    useStateMock.mockImplementation((init) => [init, setState]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render with no item", () => {
    delete props.item;
    useStateMock.mockImplementationOnce((init) => [(init = false), setState]);
    const component = shallow(<CartItem.WrappedComponent {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should render with default props", () => {
    const component = shallow(<CartItem.WrappedComponent {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should be able to open the details page when the swag image is clicked", () => {
    const component = shallow(<CartItem.WrappedComponent {...props} />);

    const link = component.find(`#item_${props.item.id}_title_link`).at(0);
    link.simulate("click", {
      preventDefault() {},
    });
    expect(props.history.push).toBeCalledWith(
      `/inventory-item.html?id=${props.item.id}`
    );
  });

  it("should remove the item from the cart when the remove button is clicked", () => {
    const component = shallow(<CartItem.WrappedComponent {...props} />);

    const removeButton = component.find("Button").at(0);
    removeButton.simulate("click", {
      preventDefault() {},
    });
    expect(ShoppingCart.removeItem).toBeCalledTimes(1);
    expect(ShoppingCart.removeItem).toBeCalledWith(1);
  });

  it("should be able to set the link and id for a problem user", () => {
    const isProblemUserSpy = jest.spyOn(Credentials, "isProblemUser");
    isProblemUserSpy.mockReturnValue(true);
    const component = shallow(<CartItem.WrappedComponent {...props} />);
    const link = component.find(`#item_${props.item.id}_title_link`).at(0);
    link.simulate("click", {
      preventDefault() {},
    });

    expect(props.history.push).toBeCalledWith(
      `/inventory-item.html?id=${props.item.id + 1}`
    );

    isProblemUserSpy.mockClear();
  });
});
