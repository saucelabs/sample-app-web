import React from "react";
import { render } from "@testing-library/react";
import BrokenComponent from "../BrokenComponent";

describe("BrokenComponent", () => {
  it("should throw an error on render", () => {
    // Suppress React's error boundary console output during this test
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<BrokenComponent />)).toThrow(
      "This component failed to render!",
    );
    spy.mockRestore();
  });
});
