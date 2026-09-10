import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Inventory from "../Inventory";
import * as Credentials from "../../utils/Credentials";
import { InventoryData } from "../../utils/InventoryData";
import { InventoryDataLong } from "../../utils/InventoryDataLong";

function renderInventory(data = InventoryData) {
  return render(
    <MemoryRouter>
      <Inventory.WrappedComponent data={data} />
    </MemoryRouter>,
  );
}

describe("Inventory", () => {
  afterEach(() => {
    jest.restoreAllMocks(); // restore spy implementations, not just call tracking
  });

  it("should render correctly", () => {
    const { asFragment } = renderInventory();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render correctly long", () => {
    const { getByTestId } = renderInventory(InventoryDataLong);
    expect(getByTestId("inventory-list")).toBeInTheDocument();
  });

  it("should render correctly for a problem user", () => {
    const isProblemUserSpy = jest.spyOn(Credentials, "isProblemUser");
    isProblemUserSpy.mockReturnValue(true);
    const { asFragment } = renderInventory();
    expect(asFragment()).toMatchSnapshot();
    isProblemUserSpy.mockClear();
  });

  it("should render correctly for a visual user", () => {
    const isVisualUserSpy = jest.spyOn(Credentials, "isVisualUser");
    isVisualUserSpy.mockReturnValue(true);
    const randomSpy = jest.spyOn(Math, "random");
    randomSpy.mockReturnValue(0.5);
    const { asFragment } = renderInventory();
    expect(asFragment()).toMatchSnapshot();
    isVisualUserSpy.mockClear();
  });
});
