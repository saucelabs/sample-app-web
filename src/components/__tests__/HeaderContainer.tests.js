import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HeaderContainer from "../HeaderContainer";
import * as Credentials from "../../utils/Credentials";

// HeaderContainer renders DrawerMenu and CartButton which use withRouter hooks
function renderWithRouter(ui) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe("HeaderContainer", () => {
  it("should render without any props", () => {
    const { asFragment } = renderWithRouter(<HeaderContainer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render for a visual user", () => {
    const isVisualUserSpy = jest.spyOn(Credentials, "isVisualUser");
    isVisualUserSpy.mockReturnValue(true);
    const { asFragment } = renderWithRouter(<HeaderContainer />);
    expect(asFragment()).toMatchSnapshot();
    isVisualUserSpy.mockClear();
  });

  it("should render with all props", () => {
    const { asFragment } = renderWithRouter(
      <HeaderContainer
        customClass="custom_class"
        secondaryHeaderBot
        secondaryLeftComponent={<input type="checkbox" />}
        secondaryRightComponent={<input type="radio" />}
        secondaryTitle="sample title"
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
