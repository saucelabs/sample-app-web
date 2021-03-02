import React, { useState as useStateMock } from "react";
import { shallow } from "enzyme";
import CheckOutStepOne from "../CheckOutStepOne";
import * as Credentials from "../../utils/Credentials";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
  useEffect: (f) => f(),
}));

let props;

describe("CheckOutStepOne", () => {
  const setState = jest.fn();

  beforeEach(() => {
    props = {
      history: {
        push: jest.fn(),
      },
    };
    useStateMock.mockImplementation((init) => [init, setState]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    const wrapper = shallow(<CheckOutStepOne.WrappedComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should be able to dismiss the error", () => {
    const wrapper = shallow(<CheckOutStepOne.WrappedComponent {...props} />);
    const ErrorMessage = wrapper.find("ErrorMessage");

    ErrorMessage.at(0).simulate("click");

    expect(setState).toHaveBeenCalledWith("");
  });

  it("should update the first name state when data is typed in the first name field", () => {
    const wrapper = shallow(<CheckOutStepOne.WrappedComponent {...props} />);
    const InputErrors = wrapper.find("InputError");
    const value = "first name";

    InputErrors.at(0).simulate("change", { target: { value } });

    expect(setState).toHaveBeenCalledWith(value);
  });

  it("should update the last name state when data is typed in the last name field", () => {
    const wrapper = shallow(<CheckOutStepOne.WrappedComponent {...props} />);
    const InputErrors = wrapper.find("InputError");
    const value = "last name";

    InputErrors.at(1).simulate("change", { target: { value } });

    expect(setState).toHaveBeenCalledWith(value);
  });

  it("should update the last name state when data is typed in the last name field for a problem user", () => {
    const isProblemUserSpy = jest.spyOn(Credentials, "isProblemUser");
    isProblemUserSpy.mockReturnValueOnce(true);
    const wrapper = shallow(<CheckOutStepOne.WrappedComponent {...props} />);
    const InputErrors = wrapper.find("InputError");
    const value = "last name";

    InputErrors.at(1).simulate("change", { target: { value } });

    expect(isProblemUserSpy).toHaveBeenCalledTimes(1);
    expect(setState).toHaveBeenCalledWith(value);
  });

  it("should update the zip code state when data is typed in the zip code field", () => {
    const wrapper = shallow(<CheckOutStepOne.WrappedComponent {...props} />);
    const InputErrors = wrapper.find("InputError");
    const value = "zip code";

    InputErrors.at(2).simulate("change", { target: { value } });

    expect(setState).toHaveBeenCalledWith(value);
  });

  it("should set the no first name state when the checkout button is being pressed", () => {
    const wrapper = shallow(<CheckOutStepOne.WrappedComponent {...props} />);
    const form = wrapper.find("form").at(0);
    form.simulate("submit", {
      preventDefault() {},
    });

    expect(setState).toHaveBeenCalledWith("First Name is required");
  });

  it("should set the no last name state when the checkout button is being pressed", () => {
    useStateMock
      // first name useState
      .mockImplementationOnce((stateValue) => [
        (stateValue = "first name"),
        setState,
      ]);

    const wrapper = shallow(<CheckOutStepOne.WrappedComponent {...props} />);
    const InputErrors = wrapper.find("InputError");
    InputErrors.at(0).simulate("change", { target: { value: "first name" } });
    const form = wrapper.find("form").at(0);
    form.simulate("submit", {
      preventDefault() {},
    });

    expect(setState).toHaveBeenCalledTimes(2);
    expect(setState).toHaveBeenNthCalledWith(2, "Last Name is required");
  });

  it("should set the no zip code state when the checkout button is being pressed", () => {
    useStateMock
      // first name useState
      .mockImplementationOnce((stateValue) => [
        (stateValue = "first name"),
        setState,
      ])
      // last name useState
      .mockImplementationOnce((stateValue) => [
        (stateValue = "last name"),
        setState,
      ]);

    const wrapper = shallow(<CheckOutStepOne.WrappedComponent {...props} />);
    const InputErrors = wrapper.find("InputError");
    InputErrors.at(0).simulate("change", { target: { value: "first name" } });
    InputErrors.at(1).simulate("change", { target: { value: "last name" } });
    const form = wrapper.find("form").at(0);
    form.simulate("submit", {
      preventDefault() {},
    });

    expect(setState).toHaveBeenCalledTimes(3);
    expect(setState).toHaveBeenNthCalledWith(3, "Postal Code is required");
  });

  it("should redirect to the checkout when valid date is used", () => {
    useStateMock
      // first name useState
      .mockImplementationOnce((stateValue) => [
        (stateValue = "first name"),
        setState,
      ])
      // last name useState
      .mockImplementationOnce((stateValue) => [
        (stateValue = "last name"),
        setState,
      ])
      // zip code useState
      .mockImplementationOnce((stateValue) => [
        (stateValue = "zip code"),
        setState,
      ]);

    const wrapper = shallow(<CheckOutStepOne.WrappedComponent {...props} />);
    const InputErrors = wrapper.find("InputError");
    InputErrors.at(0).simulate("change", { target: { value: "first name" } });
    InputErrors.at(1).simulate("change", { target: { value: "last name" } });
    InputErrors.at(2).simulate("change", { target: { value: "zip code" } });
    const form = wrapper.find("form").at(0);
    form.simulate("submit", {
      preventDefault() {},
    });

    expect(setState).toHaveBeenCalledTimes(3);
    expect(props.history.push).toBeCalledWith("/checkout-step-two.html");
  });

  it("should redirect to the cart when the cancel button is clicked", () => {
    const wrapper = shallow(<CheckOutStepOne.WrappedComponent {...props} />);
    const backButton = wrapper.find("Button").at(0);
    backButton.simulate("click", {
      preventDefault() {},
    });

    expect(props.history.push).toBeCalledWith("/cart.html");
  });
});
