import React from "react";
import { shallow } from "enzyme";
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
    const component = shallow(<Button {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with a custom class", () => {
    const component = shallow(<Button customClass="custom-class" {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should render a Action button", () => {
    const component = shallow(<Button type={BUTTON_TYPES.ACTION} {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should render a Back button", () => {
    const component = shallow(<Button type={BUTTON_TYPES.BACK} {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should render a Primary button", () => {
    const component = shallow(
      <Button type={BUTTON_TYPES.PRIMARY} {...props} />
    );

    expect(component).toMatchSnapshot();
  });

  it("should render a Secondary button", () => {
    const component = shallow(
      <Button type={BUTTON_TYPES.SECONDARY} {...props} />
    );

    expect(component).toMatchSnapshot();
  });

  it("should render a Small button", () => {
    const component = shallow(<Button size={BUTTON_SIZES.SMALL} {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should render a Medium button", () => {
    const component = shallow(<Button size={BUTTON_SIZES.MEDIUM} {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should render a Large button", () => {
    const component = shallow(<Button size={BUTTON_SIZES.LARGE} {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should render a button with a testId", () => {
    const component = shallow(<Button testId="test-id" {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should render a button with custom properties", () => {
    const component = shallow(<Button foo="bar" bar="foo" {...props} />);

    expect(component).toMatchSnapshot();
  });
});
