import React from "react";
import { render } from "@testing-library/react";
import OrderReceipt from "../OrderReceipt";

// @react-pdf/renderer's primitives are meant for its own PDF reconciler, not
// react-dom. Stub them as plain host elements so we can render via react-dom
// and assert on the receipt's own logic (branches/text) without a real PDF engine.
jest.mock("@react-pdf/renderer", () => {
  const ReactLib = require("react");
  return {
    Document: ({ children }) => ReactLib.createElement("div", null, children),
    Page: ({ children }) => ReactLib.createElement("div", null, children),
    View: ({ children }) => ReactLib.createElement("div", null, children),
    Text: ({ children }) => ReactLib.createElement("span", null, children),
    StyleSheet: { create: (styles) => styles },
  };
});

const baseOrder = {
  items: [
    { id: 4, name: "Sauce Labs Backpack", price: 29.99 },
    { id: 1, name: "Sauce Labs Bolt T-Shirt", price: 15.99 },
  ],
  orderTotal: 45.98,
  orderTax: "3.68",
  orderGrandTotal: "49.66",
  orderDate: "2026-07-07T15:31:06.000Z",
};

describe("OrderReceipt", () => {
  it("should render the items, full shipping info, and totals", () => {
    const { getByText } = render(
      <OrderReceipt
        order={{
          ...baseOrder,
          personalInfo: {
            firstName: "John",
            lastName: "Doe",
            postalCode: "12345",
          },
        }}
      />,
    );

    expect(getByText("Sauce Labs Backpack")).toBeInTheDocument();
    expect(getByText("Sauce Labs Bolt T-Shirt")).toBeInTheDocument();
    expect(getByText("John Doe")).toBeInTheDocument();
    expect(getByText("12345")).toBeInTheDocument();
    expect(getByText("$49.66")).toBeInTheDocument();
  });

  it("should fall back to a dash when there is a postal code but no name", () => {
    const { getByText } = render(
      <OrderReceipt
        order={{ ...baseOrder, personalInfo: { postalCode: "99999" } }}
      />,
    );

    expect(getByText("-")).toBeInTheDocument();
    expect(getByText("99999")).toBeInTheDocument();
  });

  it("should render a partial name when only the last name is present", () => {
    const { getByText } = render(
      <OrderReceipt
        order={{ ...baseOrder, personalInfo: { lastName: "Doe" } }}
      />,
    );

    expect(getByText("Doe")).toBeInTheDocument();
  });

  it("should omit the shipping section when there is no personal info", () => {
    const { queryByText } = render(
      <OrderReceipt order={{ ...baseOrder, personalInfo: undefined }} />,
    );

    expect(queryByText("Ship To")).not.toBeInTheDocument();
  });
});
