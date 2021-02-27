import React from "react";
import { shallow } from "enzyme";
import SecondaryHeader from "../SecondaryHeader";
import { Input } from "../../../storybook/stories/InputError.stories";

let props;

describe("SecondaryHeader", () => {
  it("should render without any props", () => {
    const component = shallow(<SecondaryHeader />);

    expect(component).toMatchSnapshot();
  });

  it("should render all props", () => {
    const component = shallow(
      <SecondaryHeader
        headerBot
        leftComponent={<Input type="checkbox" />}
        rightComponent={<Input type="radio" />}
        title="sample title"
      />
    );

    expect(component).toMatchSnapshot();
  });
});
