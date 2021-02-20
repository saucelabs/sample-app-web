import React from "react";
import { shallow } from "enzyme/build";
import ErrorMessage from "../ErrorMessage";

describe("ErrorMessage", () => {
  it("should render no error message when there is not error", () => {
    const props = {
      isError: false,
      errorMessage: "Error Message",
    };
    const component = shallow(<ErrorMessage {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should render an error message when there is an error", () => {
    const props = {
      isError: true,
      errorMessage: "Error Message",
    };
    const component = shallow(<ErrorMessage {...props} />);

    expect(component).toMatchSnapshot();
  });
});
