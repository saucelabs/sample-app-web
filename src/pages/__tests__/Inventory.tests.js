import React, { useState as useStateMock } from "react";
import { shallow } from "enzyme";
import Inventory from "../Inventory";
import * as Credentials from "../../utils/Credentials";

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

  it("should render correctly for a problem user", () => {
    const isProblemUserSpy = jest.spyOn(Credentials, "isProblemUser");
    isProblemUserSpy.mockReturnValue(true);
    const wrapper = shallow(<Inventory.WrappedComponent />);

    expect(wrapper).toMatchSnapshot();
    isProblemUserSpy.mockClear();
  });

  it("should render correctly for a visual user", () => {
    const isVisualUserSpy = jest.spyOn(Credentials, "isVisualUser");
    isVisualUserSpy.mockReturnValue(true);
    const wrapper = shallow(<Inventory.WrappedComponent />);

    expect(wrapper).toMatchSnapshot();
    isVisualUserSpy.mockClear();
  });
});
