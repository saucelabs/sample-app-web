import React from "react";
import { shallow } from "enzyme";
import Finish from "../Finish";

jest.mock("../../utils/shopping-cart");

let props;

describe("CheckOutStepTwo", () => {
  beforeEach(() => {
    props = {
      history: { push: jest.fn() },
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly with default props", () => {
    const wrapper = shallow(<Finish.WrappedComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should redirect when clicking on back home", () => {
    const wrapper = shallow(<Finish.WrappedComponent {...props} />);
    const backHome = wrapper.find("Button").at(0);
    backHome.simulate("click", {
      preventDefault() {},
    });

    expect(props.history.push).toBeCalledWith("/inventory.html");
  });
});
