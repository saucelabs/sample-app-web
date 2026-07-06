import React from "react";
import { render } from "@testing-library/react";
import Button, { BUTTON_SIZES, BUTTON_TYPES } from "../Button";

let props;

describe("Button", () => {
  beforeEach(() => {
    props = {
      label: "Default button",
      onClick: () => {},
    };
  });

  it("should render correctly with the required options", () => {
    const { asFragment } = render(<Button {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render correctly with a custom class", () => {
    const { asFragment } = render(<Button customClass="custom-class" {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render a Action button", () => {
    const { asFragment } = render(<Button type={BUTTON_TYPES.ACTION} {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render a Back button", () => {
    const { asFragment } = render(<Button type={BUTTON_TYPES.BACK} {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render a Primary button", () => {
    const { asFragment } = render(<Button type={BUTTON_TYPES.PRIMARY} {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render a Secondary button", () => {
    const { asFragment } = render(<Button type={BUTTON_TYPES.SECONDARY} {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render a Small button", () => {
    const { asFragment } = render(<Button size={BUTTON_SIZES.SMALL} {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render a Medium button", () => {
    const { asFragment } = render(<Button size={BUTTON_SIZES.MEDIUM} {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render a Large button", () => {
    const { asFragment } = render(<Button size={BUTTON_SIZES.LARGE} {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render a button with a testId", () => {
    const { asFragment } = render(<Button testId="test-id" {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render a button with custom properties", () => {
    const { asFragment } = render(<Button foo="bar" bar="foo" {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
