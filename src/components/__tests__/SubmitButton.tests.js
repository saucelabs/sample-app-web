import React from "react";
import { shallow } from "enzyme";
import SubmitButton from "../SubmitButton";

describe("SubmitButton", () => {
  it("should render with default props", () => {
    const props = {
      value: "Submit",
    };
    const component = shallow(<SubmitButton {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should render with a testId", () => {
    const props = {
      testId: "test-id",
      value: "Submit",
    };
    const component = shallow(<SubmitButton {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should render with a testId and a name prop", () => {
    const props = {
      testId: "test-id",
      value: "Submit",
      name: "name-id",
    };
    const component = shallow(<SubmitButton {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should render with custom props", () => {
    const props = {
      value: "Submit",
      foo: "bar",
      bar: "foo",
    };
    const component = shallow(<SubmitButton {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should render with a custom class", () => {
    const props = {
      customClass: "custom_class",
      value: "Submit",
    };
    const component = shallow(<SubmitButton {...props} />);

    expect(component).toMatchSnapshot();
  });
});
