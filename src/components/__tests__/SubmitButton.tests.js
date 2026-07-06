import React from "react";
import { render } from "@testing-library/react";
import SubmitButton from "../SubmitButton";

describe("SubmitButton", () => {
  it("should render with default props", () => {
    const { asFragment } = render(<SubmitButton value="Submit" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with a testId", () => {
    const { asFragment } = render(
      <SubmitButton testId="test-id" value="Submit" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with a testId and a name prop", () => {
    const { asFragment } = render(
      <SubmitButton testId="test-id" value="Submit" name="name-id" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with custom props", () => {
    const { asFragment } = render(
      <SubmitButton value="Submit" foo="bar" bar="foo" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with a custom class", () => {
    const { asFragment } = render(
      <SubmitButton customClass="custom_class" value="Submit" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
