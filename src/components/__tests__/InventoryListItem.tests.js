import React, { useState as useStateMock } from "react";
import { shallow } from "enzyme";
import InventoryListItem from "../InventoryListItem";
import * as Credentials from "../../utils/Credentials";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

let props;

describe("InventoryListItem", () => {
  const setState = jest.fn();

  beforeEach(() => {
    props = {
      desc: "Swag Item description",
      history: {
        push: jest.fn(),
      },
      id: 1,
      image_url: "image.png",
      name: "Swag Item name",
      price: 9.99,
    };
    useStateMock.mockImplementation((init) => [init, setState]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render with default props", () => {
    const component = shallow(
      <InventoryListItem.WrappedComponent {...props} />
    );

    expect(component).toMatchSnapshot();
  });

  it("should be able to open the details page when the swag image is clicked", () => {
    const component = shallow(
      <InventoryListItem.WrappedComponent {...props} />
    );

    const imageLink = component.find(`#item_${props.id}_img_link`).at(0);
    imageLink.simulate("click", {
      preventDefault() {},
    });
    expect(props.history.push).toBeCalledWith(
      `/inventory-item.html?id=${props.id}`
    );
  });

  it("should be able to open the details page when the swag item title is clicked", () => {
    const component = shallow(
      <InventoryListItem.WrappedComponent {...props} />
    );

    const imageLink = component.find(`#item_${props.id}_title_link`).at(0);
    imageLink.simulate("click", {
      preventDefault() {},
    });
    expect(props.history.push).toBeCalledWith(
      `/inventory-item.html?id=${props.id}`
    );
  });

  it("should be able to open the details page for a problem user when the swag item title is clicked", () => {
    const isProblemUserSpy = jest.spyOn(Credentials, "isProblemUser");
    isProblemUserSpy.mockReturnValue(true);
    const component = shallow(
      <InventoryListItem.WrappedComponent {...props} />
    );
    const imageLink = component.find(`#item_${props.id}_title_link`).at(0);
    imageLink.simulate("click", {
      preventDefault() {},
    });

    expect(props.history.push).toBeCalledWith(
      `/inventory-item.html?id=${props.id + 1}`
    );

    isProblemUserSpy.mockClear();
  });
});
