import React from "react";
import { shallow } from "enzyme";
import InputError, { INPUT_TYPES } from "../InputError";

let props;

describe("InputError", () => {
  beforeEach(() => {
    props = {
      isError: false,
      onChange: jest.fn(),
    };
  });

  it("should render correctly with the required options", () => {
    const component = shallow(<InputError {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should render secure input", () => {
    const component = shallow(
      <InputError {...props} type={INPUT_TYPES.PASSWORD} />
    );

    expect(component).toMatchSnapshot();
  });

  it("should render an error input", () => {
    const component = shallow(<InputError {...props} isError />);

    expect(component).toMatchSnapshot();
  });

  it("should render an input with a testId", () => {
    const component = shallow(<InputError {...props} testId="some-id" />);

    expect(component).toMatchSnapshot();
  });

  it("should render an input with custom props", () => {
    const component = shallow(
      <InputError {...props} testId="some-id" name="own-name-id" foo="bar" />
    );

    expect(component).toMatchSnapshot();
  });

  it("should render an input with full props", () => {
    const component = shallow(
      <InputError
        {...props}
        testId="some-id"
        name="own-name-id"
        foo="bar"
        placeholder="The placeholder"
        value="the value"
      />
    );

    expect(component).toMatchSnapshot();
  });
});
