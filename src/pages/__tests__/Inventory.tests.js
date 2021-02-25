import React, { useState as useStateMock } from "react";
import { shallow } from "enzyme";
import Inventory from "../Inventory";

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
    const wrapper = shallow(<Inventory.WrappedComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
