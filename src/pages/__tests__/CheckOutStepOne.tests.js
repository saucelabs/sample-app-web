import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import * as Credentials from "../../utils/Credentials";
import CheckOutStepOne from "../CheckOutStepOne";

let props;

function renderCheckout() {
  return render(
    <MemoryRouter>
      <CheckOutStepOne.WrappedComponent {...props} />
    </MemoryRouter>,
  );
}

describe("CheckOutStepOne", () => {
  beforeEach(() => {
    props = { history: { push: jest.fn() } };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    const { asFragment } = renderCheckout();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should be able to dismiss the error", () => {
    const { getByTestId } = renderCheckout();
    // Trigger error first by submitting empty form
    fireEvent.submit(getByTestId("continue"));
    expect(screen.getByTestId("error")).toBeInTheDocument();
    // Dismiss it
    fireEvent.click(getByTestId("error-button"));
    expect(screen.queryByTestId("error")).not.toBeInTheDocument();
  });

  it("should update the first name state when data is typed in the first name field", () => {
    const { getByTestId } = renderCheckout();
    fireEvent.change(getByTestId("firstName"), { target: { value: "John" } });
    expect(getByTestId("firstName").value).toBe("John");
  });

  it("should update the last name state when data is typed in the last name field", () => {
    const { getByTestId } = renderCheckout();
    fireEvent.change(getByTestId("lastName"), { target: { value: "Smith" } });
    expect(getByTestId("lastName").value).toBe("Smith");
  });

  it("should update the last name state when data is typed in the last name field for a problem user", () => {
    const isProblemUserSpy = jest.spyOn(Credentials, "isProblemUser");
    isProblemUserSpy.mockReturnValue(true);
    const { getByTestId } = renderCheckout();
    fireEvent.change(getByTestId("lastName"), { target: { value: "Smith" } });
    // problem user: last name change sets first name instead
    expect(getByTestId("firstName").value).toBe("Smith");
    isProblemUserSpy.mockClear();
  });

  it("should throw an error when data is typed in the last name field for an error user", () => {
    const isErrorUserSpy = jest.spyOn(Credentials, "isErrorUser");
    isErrorUserSpy.mockReturnValue(true);
    const consoleError = jest.spyOn(console, "error").mockImplementation(() => {});
    // React 17 re-throws event-handler errors via a window "error" event.
    // Intercept it to prevent jest from failing the test.
    let capturedError;
    const windowErrorHandler = (event) => {
      capturedError = event.error;
      event.preventDefault();
    };
    window.addEventListener("error", windowErrorHandler);
    const { getByTestId } = renderCheckout();
    fireEvent.change(getByTestId("lastName"), { target: { value: "Smith" } });
    window.removeEventListener("error", windowErrorHandler);
    expect(capturedError).toBeInstanceOf(TypeError);
    expect(isErrorUserSpy).toHaveBeenCalled();
    consoleError.mockRestore();
    isErrorUserSpy.mockClear();
  });

  it("should update the zip code state when data is typed in the zip code field", () => {
    const { getByTestId } = renderCheckout();
    fireEvent.change(getByTestId("postalCode"), { target: { value: "12345" } });
    expect(getByTestId("postalCode").value).toBe("12345");
  });

  it("should set the no first name state when the checkout button is being pressed", () => {
    const { getByTestId } = renderCheckout();
    fireEvent.submit(getByTestId("continue"));
    expect(getByTestId("error")).toBeInTheDocument();
    expect(screen.getByText(/First Name is required/i)).toBeInTheDocument();
  });

  it("should set the no last name state when the checkout button is being pressed", () => {
    const { getByTestId } = renderCheckout();
    fireEvent.change(getByTestId("firstName"), { target: { value: "John" } });
    fireEvent.submit(getByTestId("continue"));
    expect(getByTestId("error")).toBeInTheDocument();
    expect(screen.getByText(/Last Name is required/i)).toBeInTheDocument();
  });

  it("should set the no zip code state when the checkout button is being pressed", () => {
    const { getByTestId } = renderCheckout();
    fireEvent.change(getByTestId("firstName"), { target: { value: "John" } });
    fireEvent.change(getByTestId("lastName"), { target: { value: "Smith" } });
    fireEvent.submit(getByTestId("continue"));
    expect(getByTestId("error")).toBeInTheDocument();
    expect(screen.getByText(/Postal Code is required/i)).toBeInTheDocument();
  });

  it("should redirect to the checkout when valid date is used", () => {
    const { getByTestId } = renderCheckout();
    fireEvent.change(getByTestId("firstName"), { target: { value: "John" } });
    fireEvent.change(getByTestId("lastName"), { target: { value: "Smith" } });
    fireEvent.change(getByTestId("postalCode"), { target: { value: "12345" } });
    fireEvent.submit(getByTestId("continue"));
    expect(props.history.push).toBeCalledWith("/checkout-step-two.html");
  });

  it("should redirect to the cart when the cancel button is clicked", () => {
    const { getByTestId } = renderCheckout();
    fireEvent.click(getByTestId("cancel"));
    expect(props.history.push).toBeCalledWith("/cart.html");
  });
});
