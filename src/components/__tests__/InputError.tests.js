import React from "react";
import { render } from "@testing-library/react";
import InputError, { INPUT_TYPES } from "../InputError";

let props;

describe("InputError", () => {
  beforeEach(() => {
    props = { isError: false, onChange: jest.fn() };
  });

  it("should render correctly with the required options", () => {
    const { asFragment } = render(<InputError {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render secure input", () => {
    const { asFragment } = render(<InputError {...props} type={INPUT_TYPES.PASSWORD} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render an error input", () => {
    const { asFragment } = render(<InputError {...props} isError />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render an input with a testId", () => {
    const { asFragment } = render(<InputError {...props} testId="some-id" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render an input with custom props", () => {
    const { asFragment } = render(
      <InputError {...props} testId="some-id" name="own-name-id" foo="bar" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render an input with full props", () => {
    const { asFragment } = render(
      <InputError
        {...props}
        testId="some-id"
        name="own-name-id"
        foo="bar"
        placeholder="The placeholder"
        value="the value"
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
