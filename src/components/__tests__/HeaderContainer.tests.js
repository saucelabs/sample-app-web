import React from "react";
import { shallow } from "enzyme";
import HeaderContainer from "../HeaderContainer";
import * as Credentials from "../../utils/Credentials";

describe("HeaderContainer", () => {
  it("should render without any props", () => {
    const component = shallow(<HeaderContainer />);

    expect(component).toMatchSnapshot();
  });

  it("should render for a visual user", () => {
    const isVisualUserSpy = jest.spyOn(Credentials, "isVisualUser");
    isVisualUserSpy.mockReturnValue(true);
    const component = shallow(<HeaderContainer />);

    expect(component).toMatchSnapshot();
    isVisualUserSpy.mockClear();
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
