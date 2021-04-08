import React from "react";
import { shallow } from "enzyme";
import Select from "../Select";

let props;

describe("Select", () => {
  beforeEach(() => {
    props = {
      activeOption: "az",
      options: [
        { key: "az", value: "Name (A to Z)" },
        { key: "za", value: "Name (Z to A)" },
        { key: "lohi", value: "Price (low to high)" },
        { key: "hilo", value: "Price (high to low)" },
      ],
      onChange: jest.fn(),
    };
  });

  it("should render with default props", () => {
    const component = shallow(<Select {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should render with a testID", () => {
    const component = shallow(<Select testId="foo" {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should be able to trigger the onChange", () => {
    const component = shallow(<Select {...props} />);
    component
      .find("select")
      .at(0)
      .simulate("change", {
        target: { value: "za", name: "Name (Z to A)" },
      });

    expect(props.onChange).toHaveBeenCalledTimes(1);
  });
});
