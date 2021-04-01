import React from "react";
import { shallow } from "enzyme";
import Footer from "../Footer";

describe("Footer", () => {
  beforeEach(() => {
    jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1234);
  });

  it("should render correctly", () => {
    const component = shallow(<Footer />);

    expect(component).toMatchSnapshot();
  });
});
