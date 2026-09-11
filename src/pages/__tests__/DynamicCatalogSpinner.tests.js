import React from "react";
import { act, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DynamicCatalogSpinner, {
  MAX_SPINNER_DELAY_MS,
  MIN_SPINNER_DELAY_MS,
  getRandomSpinnerDelay,
} from "../DynamicCatalogSpinner";
import { InventoryData } from "../../utils/InventoryData";

function renderPage() {
  return render(
    <MemoryRouter>
      <DynamicCatalogSpinner />
    </MemoryRouter>,
  );
}

describe("DynamicCatalogSpinner", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should show a spinner while loading", () => {
    const { getByTestId, queryByTestId } = renderPage();
    expect(getByTestId("dynamic-catalog-spinner")).toBeInTheDocument();
    expect(
      queryByTestId("dynamic-catalog-spinner-grid"),
    ).not.toBeInTheDocument();
  });

  it("should render every item once the loading delay elapses", () => {
    const { getByTestId, queryByTestId } = renderPage();

    act(() => {
      jest.advanceTimersByTime(MAX_SPINNER_DELAY_MS);
    });

    expect(queryByTestId("dynamic-catalog-spinner")).not.toBeInTheDocument();
    InventoryData.forEach((item) => {
      expect(getByTestId(`spinner-item-${item.id}-name`)).toBeInTheDocument();
    });
  });

  it("should generate a random delay within the expected bounds", () => {
    for (let i = 0; i < 20; i++) {
      const delay = getRandomSpinnerDelay();
      expect(delay).toBeGreaterThanOrEqual(MIN_SPINNER_DELAY_MS);
      expect(delay).toBeLessThanOrEqual(MAX_SPINNER_DELAY_MS);
    }
  });
});
