import React, { useState as useStateMock } from "react";
import { shallow } from "enzyme";
import Login from "../Login";
import * as Credentials from "../../utils/Credentials";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
  useEffect: (f) => f(),
}));

describe("Login", () => {
  const setState = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setState]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    const wrapper = shallow(<Login.WrappedComponent history location />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should be able to dismiss the error", () => {
    const wrapper = shallow(<Login.WrappedComponent history location />);
    const ErrorMessage = wrapper.find("ErrorMessage");

    ErrorMessage.at(0).simulate("click");

    expect(setState).toHaveBeenCalledWith("");
  });

  it("should update the username state when data is typed through the handleUserChange", () => {
    const wrapper = shallow(<Login.WrappedComponent history location />);
    const InputErrors = wrapper.find("InputError");
    const value = "username";

    InputErrors.at(0).simulate("change", { target: { value } });

    expect(setState).toHaveBeenCalledWith(value);
  });

  it("should update the password state when data is typed through the handlePassChange", () => {
    const wrapper = shallow(<Login.WrappedComponent history location />);
    const InputErrors = wrapper.find("InputError");
    const value = "password";

    InputErrors.at(1).simulate("change", { target: { value } });

    expect(setState).toHaveBeenCalledWith(value);
  });

  it("should set the no username state when the login button is being pressed", () => {
    const wrapper = shallow(<Login.WrappedComponent history location />);
    const form = wrapper.find("form").at(0);
    form.simulate("submit", {
      preventDefault() {},
    });

    expect(setState).toHaveBeenCalledWith("Username is required");
  });

  it("should set the no password state when the login button is being pressed", () => {
    useStateMock
      // error useState
      .mockImplementationOnce((stateValue) => [
        (stateValue = "error"),
        setState,
      ])
      // username useState
      .mockImplementationOnce((stateValue) => [
        (stateValue = "username"),
        setState,
      ]);

    const wrapper = shallow(<Login.WrappedComponent history location />);
    const InputErrors = wrapper.find("InputError");
    InputErrors.at(0).simulate("change", { target: { value: "username" } });
    const form = wrapper.find("form").at(0);
    form.simulate("submit", {
      preventDefault() {},
    });

    expect(setState).toHaveBeenCalledTimes(2);
    expect(setState).toHaveBeenNthCalledWith(2, "Password is required");
  });

  it("should set the locked out state when the locked out credentials are used", () => {
    useStateMock
      // error useState
      .mockImplementationOnce((stateValue) => [
        (stateValue = "error"),
        setState,
      ])
      // username useState
      .mockImplementationOnce((stateValue) => [
        (stateValue = "username"),
        setState,
      ])
      // password useState
      .mockImplementationOnce((stateValue) => [
        (stateValue = "password"),
        setState,
      ]);

    const verifyCredentialsSpy = jest.spyOn(Credentials, "verifyCredentials");
    const isLockedOutUserSpy = jest.spyOn(Credentials, "isLockedOutUser");
    verifyCredentialsSpy.mockReturnValueOnce(true);
    isLockedOutUserSpy.mockReturnValueOnce(true);

    const wrapper = shallow(<Login.WrappedComponent history location />);
    const InputErrors = wrapper.find("InputError");
    InputErrors.at(0).simulate("change", { target: { value: "username" } });
    InputErrors.at(1).simulate("change", { target: { value: "password" } });
    const form = wrapper.find("form").at(0);
    form.simulate("submit", {
      preventDefault() {},
    });

    expect(verifyCredentialsSpy).toHaveBeenCalledTimes(1);
    expect(isLockedOutUserSpy).toHaveBeenCalledTimes(1);
    expect(setState).toHaveBeenCalledTimes(3);
    expect(setState).toHaveBeenNthCalledWith(
      3,
      "Sorry, this user has been locked out."
    );

    verifyCredentialsSpy.mockClear();
    isLockedOutUserSpy.mockClear();
  });

  it("should set the data does not match state when incorrect credentials are used", () => {
    useStateMock
      // error useState
      .mockImplementationOnce((stateValue) => [
        (stateValue = "error"),
        setState,
      ])
      // username useState
      .mockImplementationOnce((stateValue) => [
        (stateValue = "username"),
        setState,
      ])
      // password useState
      .mockImplementationOnce((stateValue) => [
        (stateValue = "password"),
        setState,
      ]);

    const verifyCredentialsSpy = jest.spyOn(Credentials, "verifyCredentials");
    verifyCredentialsSpy.mockReturnValueOnce(false);

    const wrapper = shallow(<Login.WrappedComponent history location />);
    const InputErrors = wrapper.find("InputError");
    InputErrors.at(0).simulate("change", { target: { value: "username" } });
    InputErrors.at(1).simulate("change", { target: { value: "password" } });
    const form = wrapper.find("form").at(0);
    form.simulate("submit", {
      preventDefault() {},
    });

    expect(verifyCredentialsSpy).toHaveBeenCalledTimes(1);
    expect(setState).toHaveBeenCalledTimes(3);
    expect(setState).toHaveBeenNthCalledWith(
      3,
      "Username and password do not match any user in this service"
    );

    verifyCredentialsSpy.mockClear();
  });

  it("should redirect when valid credentials are used", () => {
    useStateMock
      // error useState
      .mockImplementationOnce((stateValue) => [
        (stateValue = "error"),
        setState,
      ])
      // username useState
      .mockImplementationOnce((stateValue) => [
        (stateValue = "username"),
        setState,
      ])
      // password useState
      .mockImplementationOnce((stateValue) => [
        (stateValue = "password"),
        setState,
      ]);

    const verifyCredentialsSpy = jest.spyOn(Credentials, "verifyCredentials");
    const isLockedOutUserSpy = jest.spyOn(Credentials, "isLockedOutUser");
    verifyCredentialsSpy.mockReturnValueOnce(true);
    isLockedOutUserSpy.mockReturnValueOnce(false);

    const historyProps = { push: jest.fn() };
    const wrapper = shallow(
      <Login.WrappedComponent history={historyProps} location />
    );
    const InputErrors = wrapper.find("InputError");
    InputErrors.at(0).simulate("change", { target: { value: "username" } });
    InputErrors.at(1).simulate("change", { target: { value: "password" } });
    const form = wrapper.find("form").at(0);
    form.simulate("submit", {
      preventDefault() {},
    });

    expect(verifyCredentialsSpy).toHaveBeenCalledTimes(1);
    expect(isLockedOutUserSpy).toHaveBeenCalledTimes(1);
    expect(setState).toHaveBeenCalledTimes(2);
    expect(historyProps.push).toBeCalledWith("/inventory.html");

    verifyCredentialsSpy.mockClear();
    isLockedOutUserSpy.mockClear();
  });

  it("should set the redirect error state", () => {
    const value = "redirected-path";
    const locationProps = { state: { from: { pathname: value } } };
    shallow(<Login.WrappedComponent history location={locationProps} />);

    expect(setState).toHaveBeenCalledWith(
      `You can only access '${value}' when you are logged in.`
    );
  });
});
