import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Inventory from "../Inventory";
import * as Credentials from "../../utils/Credentials";
import { InventoryData } from "../../utils/InventoryData";
import { InventoryDataLong } from "../../utils/InventoryDataLong";

function renderInventory(data = InventoryData, props = {}) {
  return render(
    <MemoryRouter>
      <Inventory.WrappedComponent data={data} {...props} />
    </MemoryRouter>,
  );
}

describe("Inventory", () => {
  afterEach(() => {
    jest.restoreAllMocks(); // restore spy implementations, not just call tracking
    window.localStorage.removeItem("favorite-items");
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

  it("should show only favorited items when the Favorites filter is selected", () => {
    window.localStorage.setItem("favorite-items", JSON.stringify([1]));
    const { getByTestId, queryByTestId } = renderInventory();
    fireEvent.click(getByTestId("inventory-favorites-filter-favorites"));
    expect(
      getByTestId(
        `inventory-item-${InventoryData[1].name
          .replace(/\s+/g, "-")
          .toLowerCase()}-img`,
      ),
    ).toBeInTheDocument();
    InventoryData.forEach((item, i) => {
      if (i === 1) {
        return;
      }
      expect(
        queryByTestId(
          `inventory-item-${item.name.replace(/\s+/g, "-").toLowerCase()}-img`,
        ),
      ).not.toBeInTheDocument();
    });
  });

  it("should show an empty state when there are no favorites in the Favorites view", () => {
    const { getByTestId } = renderInventory();
    fireEvent.click(getByTestId("inventory-favorites-filter-favorites"));
    expect(getByTestId("inventory-empty-favorites")).toHaveTextContent(
      "No favorites yet",
    );
  });

  it("should update the favorites view when favorites change elsewhere", () => {
    const { getByTestId, queryByTestId } = renderInventory();
    fireEvent.click(getByTestId("favorite-toggle-0"));
    fireEvent.click(getByTestId("inventory-favorites-filter-favorites"));
    expect(queryByTestId("inventory-empty-favorites")).not.toBeInTheDocument();
  });

  it("should switch back to the All view when All is selected", () => {
    const { getByTestId } = renderInventory();
    fireEvent.click(getByTestId("inventory-favorites-filter-favorites"));
    fireEvent.click(getByTestId("inventory-favorites-filter-all"));
    expect(getByTestId("inventory-list")).toBeInTheDocument();
  });

  it("should not render the favorites filter or toggles when favorites are disabled", () => {
    const { queryByTestId } = renderInventory(InventoryDataLong, {
      enableFavorites: false,
    });
    expect(queryByTestId("inventory-favorites-filter")).not.toBeInTheDocument();
    expect(queryByTestId("favorite-toggle-0")).not.toBeInTheDocument();
  });
});
