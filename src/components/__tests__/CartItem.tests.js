import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CartItem from "../CartItem";
import { ShoppingCart } from "../../utils/shopping-cart";
import * as Credentials from "../../utils/Credentials";

jest.mock("../../utils/shopping-cart");

let props;

describe("InventoryListItem", () => {
  beforeEach(() => {
    props = {
      history: { push: jest.fn() },
      item: { desc: "Swag Item description", id: 1, name: "Swag Item name", price: 9.99 },
      showButton: true,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render with no item", () => {
    const { asFragment } = render(
      <CartItem.WrappedComponent {...props} item={undefined} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with default props", () => {
    const { asFragment } = render(<CartItem.WrappedComponent {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should be able to open the details page when the swag image is clicked", () => {
    const { getByTestId } = render(<CartItem.WrappedComponent {...props} />);
    fireEvent.click(getByTestId(`item-${props.item.id}-title-link`));
    expect(props.history.push).toHaveBeenCalledWith(
      `/inventory-item.html?id=${props.item.id}`,
    );
  });

  it("should remove the item from the cart when the remove button is clicked", () => {
    ShoppingCart.removeItem = jest.fn();
    const { getByTestId } = render(<CartItem.WrappedComponent {...props} />);
    fireEvent.click(
      getByTestId(`remove-${props.item.name.replace(/\s+/g, "-").toLowerCase()}`),
    );
    expect(ShoppingCart.removeItem).toHaveBeenCalledTimes(1);
    expect(ShoppingCart.removeItem).toHaveBeenCalledWith(1);
  });

  it("should be able to set the link and id for a problem user", () => {
    const isProblemUserSpy = jest.spyOn(Credentials, "isProblemUser");
    isProblemUserSpy.mockReturnValue(true);
    const { getByTestId } = render(<CartItem.WrappedComponent {...props} />);
    fireEvent.click(getByTestId(`item-${props.item.id}-title-link`));
    expect(props.history.push).toHaveBeenCalledWith(
      `/inventory-item.html?id=${props.item.id + 1}`,
    );
    isProblemUserSpy.mockClear();
  });
});
