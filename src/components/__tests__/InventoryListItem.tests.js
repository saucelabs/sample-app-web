import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InventoryListItem from "../InventoryListItem";
import * as Credentials from "../../utils/Credentials";

let props;

describe("InventoryListItem", () => {
  beforeEach(() => {
    props = {
      desc: "Swag Item description",
      history: { push: jest.fn() },
      id: 1,
      image_url: "image.png",
      name: "Swag Item name",
      price: 9.99,
      isTextAlignRight: false,
      missAlignButton: false,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render with default props", () => {
    const { asFragment } = render(
      <InventoryListItem.WrappedComponent {...props} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with text aligned right", () => {
    const { asFragment } = render(
      <InventoryListItem.WrappedComponent {...props} isTextAlignRight />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should be able to open the details page when the swag image is clicked", () => {
    const { getByTestId } = render(
      <InventoryListItem.WrappedComponent {...props} />,
    );
    fireEvent.click(getByTestId(`item-${props.id}-img-link`));
    expect(props.history.push).toBeCalledWith(
      `/inventory-item.html?id=${props.id}`,
    );
  });

  it("should be able to open the details page when the swag item title is clicked", () => {
    const { getByTestId } = render(
      <InventoryListItem.WrappedComponent {...props} />,
    );
    fireEvent.click(getByTestId(`item-${props.id}-title-link`));
    expect(props.history.push).toBeCalledWith(
      `/inventory-item.html?id=${props.id}`,
    );
  });

  it("should be able to open the details page for a problem user when the swag item title is clicked", () => {
    const isProblemUserSpy = jest.spyOn(Credentials, "isProblemUser");
    isProblemUserSpy.mockReturnValue(true);
    const { getByTestId } = render(
      <InventoryListItem.WrappedComponent {...props} />,
    );
    fireEvent.click(getByTestId(`item-${props.id}-title-link`));
    expect(props.history.push).toBeCalledWith(
      `/inventory-item.html?id=${props.id + 1}`,
    );
    isProblemUserSpy.mockClear();
  });
});
