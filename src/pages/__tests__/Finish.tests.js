import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Finish from "../Finish";
import { ShoppingCart } from "../../utils/shopping-cart";

jest.mock("../../utils/shopping-cart");
jest.mock("@react-pdf/renderer", () => ({
  pdf: jest.fn(() => ({
    toBlob: jest
      .fn()
      .mockResolvedValue(new Blob(["fake-pdf"], { type: "application/pdf" })),
  })),
  Document: ({ children }) => children,
  Page: ({ children }) => children,
  View: ({ children }) => children,
  Text: ({ children }) => children,
  StyleSheet: { create: (styles) => styles },
}));

let props;

const order = {
  items: [{ id: 4, name: "Sauce Labs Backpack", price: 29.99 }],
  personalInfo: { firstName: "John", lastName: "Doe", postalCode: "12345" },
  orderTotal: 29.99,
  orderTax: "2.40",
  orderGrandTotal: "32.39",
  orderDate: "2026-07-07T12:00:00.000Z",
};

function renderFinish() {
  return render(
    <MemoryRouter>
      <Finish.WrappedComponent {...props} />
    </MemoryRouter>,
  );
}

describe("CheckOutStepTwo", () => {
  beforeEach(() => {
    props = { history: { push: jest.fn() } };
    ShoppingCart.getCartContents = jest.fn().mockReturnValue([]);
    ShoppingCart.registerCartListener = jest.fn();
    global.URL.createObjectURL = jest.fn().mockReturnValue("blob:mock-url");
    global.URL.revokeObjectURL = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly with default props", () => {
    const { asFragment } = renderFinish();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should redirect when clicking on back home", () => {
    const { getByTestId } = renderFinish();
    fireEvent.click(getByTestId("back-to-products"));
    expect(props.history.push).toHaveBeenCalledWith("/inventory.html");
  });

  it("should not show the Generate PDF order button without an order", () => {
    const { queryByTestId } = renderFinish();
    expect(queryByTestId("generate-pdf-order")).not.toBeInTheDocument();
  });

  describe("when an order was just completed", () => {
    beforeEach(() => {
      props.location = { state: { order } };
    });

    it("should show the Generate PDF order button", () => {
      const { getByTestId } = renderFinish();
      expect(getByTestId("generate-pdf-order")).toBeInTheDocument();
    });

    it("should generate and download a PDF receipt when clicked", async () => {
      const clickSpy = jest
        .spyOn(HTMLAnchorElement.prototype, "click")
        .mockImplementation(() => {});
      const { getByTestId } = renderFinish();

      fireEvent.click(getByTestId("generate-pdf-order"));

      await waitFor(() =>
        expect(global.URL.createObjectURL).toHaveBeenCalled(),
      );
      expect(clickSpy).toHaveBeenCalledTimes(1);
      expect(global.URL.revokeObjectURL).toHaveBeenCalledWith(
        "blob:mock-url",
      );

      clickSpy.mockRestore();
    });
  });
});
