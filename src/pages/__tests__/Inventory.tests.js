import React, { useState as useStateMock } from "react";
import { shallow } from "enzyme";
import Inventory from "../Inventory";
import * as Credentials from "../../utils/Credentials";
import {InventoryData} from "../../utils/InventoryData";
import {InventoryDataLong} from "../../utils/InventoryDataLong";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Inventory", () => {
  const setState = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setState]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    const wrapper = shallow(<Inventory.WrappedComponent data={InventoryData} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly long", () => {
    const wrapper = shallow(<Inventory.WrappedComponent data={InventoryDataLong} />);
    expect(wrapper.find('[data-test="inventory-list"]').length).toEqual(1);
  });

  it("should render correctly for a problem user", () => {
    const isProblemUserSpy = jest.spyOn(Credentials, "isProblemUser");
    isProblemUserSpy.mockReturnValue(true);
    const wrapper = shallow(<Inventory.WrappedComponent data={InventoryData} />);

    expect(wrapper).toMatchSnapshot();
    isProblemUserSpy.mockClear();
  });

  it("should render correctly for a visual user", () => {
    const isVisualUserSpy = jest.spyOn(Credentials, "isVisualUser");
    isVisualUserSpy.mockReturnValue(true);

    const randomSpy = jest.spyOn(Math, "random");
    randomSpy.mockReturnValue(0.5);

    const wrapper = shallow(<Inventory.WrappedComponent data={InventoryData} />);

    expect(wrapper).toMatchSnapshot();
    isVisualUserSpy.mockClear();
  });
});
