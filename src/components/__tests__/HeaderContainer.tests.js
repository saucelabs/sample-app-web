import React from "react";
import { shallow } from "enzyme";
import HeaderContainer from "../HeaderContainer";

describe("HeaderContainer", () => {
  it("should render without any props", () => {
    const component = shallow(<HeaderContainer />);

    expect(component).toMatchSnapshot();
  });

  it("should render with all props", () => {
    const component = shallow(
      <HeaderContainer
        customClass="custom_class"
        secondaryHeaderBot
        secondaryLeftComponent={<input type="checkbox" />}
        secondaryRightComponent={<input type="radio" />}
        secondaryTitle="sample title"
      />
    );

    expect(component).toMatchSnapshot();
  });
});
