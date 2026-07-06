import React from "react";
import { render } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  beforeEach(() => {
    jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1234);
  });

  it("should render correctly", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
