import React, { useState as useStateMock } from "react";
import { shallow } from "enzyme";
import InventoryItem from "../InventoryItem";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
  useEffect: (f) => f(),
}));

let props;
let location;

describe("InventoryItem", () => {
  const setState = jest.fn();
  const spyScrollTo = jest.fn();

  beforeEach(() => {
    props = {
      history: {
        push: jest.fn(),
      },
    };
    location = {
      ...window.location,
      search: "?id=4",
    };
    Object.defineProperty(window, "location", {
      writable: true,
      value: location,
    });
    Object.defineProperty(global.window, "scrollTo", { value: spyScrollTo });
    Object.defineProperty(global.window, "scrollY", { value: 1 });
    spyScrollTo.mockClear();
    useStateMock.mockImplementation((init) => [init, setState]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render with default props", () => {
    const component = shallow(<InventoryItem.WrappedComponent {...props} />);

    expect(component).toMatchSnapshot();
    expect(spyScrollTo).toHaveBeenCalledTimes(1);
    expect(setState).toHaveBeenCalledTimes(0);
  });

  it("should render with error data if a not known product is opened", () => {
    location = {
      ...window.location,
      search: "?id=999",
    };
    Object.defineProperty(window, "location", {
      writable: true,
      value: location,
    });
    const component = shallow(<InventoryItem.WrappedComponent {...props} />);

    expect(component).toMatchSnapshot();
  });
  //
  // it("should be able to open the details page when the swag image is clicked", () => {
  //   const component = shallow(
  //     <InventoryListItem.WrappedComponent {...props} />
  //   );
  //
  //   const imageLink = component.find(`#item_${props.id}_img_link`).at(0);
  //   imageLink.simulate("click", {
  //     preventDefault() {},
  //   });
  //   expect(props.history.push).toBeCalledWith(
  //     `/inventory-item.html?id=${props.id}`
  //   );
  // });
  //
  // it("should be able to open the details page when the swag item title is clicked", () => {
  //   const component = shallow(
  //     <InventoryListItem.WrappedComponent {...props} />
  //   );
  //
  //   const imageLink = component.find(`#item_${props.id}_title_link`).at(0);
  //   imageLink.simulate("click", {
  //     preventDefault() {},
  //   });
  //   expect(props.history.push).toBeCalledWith(
  //     `/inventory-item.html?id=${props.id}`
  //   );
  // });
  //
  // it("should be able to set the image url and id for a problem user", () => {
  //   const isProblemUserSpy = jest.spyOn(Credentials, "isProblemUser");
  //   isProblemUserSpy.mockReturnValue(true);
  //   const component = shallow(
  //     <InventoryListItem.WrappedComponent {...props} />
  //   );
  //   const imageLink = component.find(`#item_${props.id}_title_link`).at(0);
  //   imageLink.simulate("click", {
  //     preventDefault() {},
  //   });
  //
  //   expect(props.history.push).toBeCalledWith(
  //     `/inventory-item.html?id=${props.id + 1}`
  //   );
  //   expect(setState).toHaveBeenCalledWith(
  //     `${props.image_url}WithGarbageOnItToBreakTheUrl`
  //   );
  //
  //   isProblemUserSpy.mockClear();
  // });
});
