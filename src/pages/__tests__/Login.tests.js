import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Login from "../Login";
import * as Credentials from "../../utils/Credentials";

jest.mock("@backtrace/react", () => ({
  BacktraceClient: { instance: { send: jest.fn() } },
}));

function renderLogin(locationProps = {}) {
  const historyProps = { push: jest.fn() };
  const utils = render(
    <Login.WrappedComponent history={historyProps} location={locationProps} />,
  );
  return { ...utils, historyProps };
}

describe("Login", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    const { asFragment } = renderLogin();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should be able to dismiss the error", () => {
    renderLogin();
    // Trigger an error
    fireEvent.submit(screen.getByTestId("login-button"));
    expect(screen.getByTestId("error")).toBeInTheDocument();
    // Dismiss it
    fireEvent.click(screen.getByTestId("error-button"));
    expect(screen.queryByTestId("error")).not.toBeInTheDocument();
  });

  it("should update the username state when data is typed through the handleUserChange", () => {
    renderLogin();
    fireEvent.change(screen.getByTestId("username"), { target: { value: "newuser" } });
    expect(screen.getByTestId("username").value).toBe("newuser");
  });

  it("should update the password state when data is typed through the handlePassChange", () => {
    renderLogin();
    fireEvent.change(screen.getByTestId("password"), { target: { value: "secret" } });
    expect(screen.getByTestId("password").value).toBe("secret");
  });

  it("should set the no username state when the login button is being pressed", () => {
    renderLogin();
    fireEvent.submit(screen.getByTestId("login-button"));
    expect(screen.getByText(/Username is required/i)).toBeInTheDocument();
  });

  it("should set the no password state when the login button is being pressed", () => {
    renderLogin();
    fireEvent.change(screen.getByTestId("username"), { target: { value: "user" } });
    fireEvent.submit(screen.getByTestId("login-button"));
    expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
  });

  it("should set the locked out state when the locked out credentials are used", () => {
    const verifyCredentialsSpy = jest.spyOn(Credentials, "verifyCredentials");
    const isLockedOutUserSpy = jest.spyOn(Credentials, "isLockedOutUser");
    verifyCredentialsSpy.mockReturnValueOnce(true);
    isLockedOutUserSpy.mockReturnValueOnce(true);
    renderLogin();
    fireEvent.change(screen.getByTestId("username"), { target: { value: "locked_out_user" } });
    fireEvent.change(screen.getByTestId("password"), { target: { value: "secret_sauce" } });
    fireEvent.submit(screen.getByTestId("login-button"));
    expect(screen.getByText(/Sorry, this user has been locked out/i)).toBeInTheDocument();
  });

  it("should set the data does not match state when incorrect credentials are used", () => {
    const verifyCredentialsSpy = jest.spyOn(Credentials, "verifyCredentials");
    verifyCredentialsSpy.mockReturnValueOnce(false);
    renderLogin();
    fireEvent.change(screen.getByTestId("username"), { target: { value: "bad_user" } });
    fireEvent.change(screen.getByTestId("password"), { target: { value: "wrong" } });
    fireEvent.submit(screen.getByTestId("login-button"));
    expect(
      screen.getByText(/Username and password do not match/i),
    ).toBeInTheDocument();
  });

  it("should redirect when valid credentials are used", () => {
    const verifyCredentialsSpy = jest.spyOn(Credentials, "verifyCredentials");
    const isLockedOutUserSpy = jest.spyOn(Credentials, "isLockedOutUser");
    verifyCredentialsSpy.mockReturnValueOnce(true);
    isLockedOutUserSpy.mockReturnValueOnce(false);
    const { historyProps } = renderLogin();
    fireEvent.change(screen.getByTestId("username"), { target: { value: "standard_user" } });
    fireEvent.change(screen.getByTestId("password"), { target: { value: "secret_sauce" } });
    fireEvent.submit(screen.getByTestId("login-button"));
    expect(historyProps.push).toHaveBeenCalledWith("/inventory.html");
  });

  it("should set the redirect error state", () => {
    const locationProps = { state: { from: { pathname: "redirected-path" } } };
    renderLogin(locationProps);
    expect(
      screen.getByText(/You can only access 'redirected-path'/i),
    ).toBeInTheDocument();
  });
});
