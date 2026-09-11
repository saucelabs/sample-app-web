import React from "react";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DynamicCatalogSlider, {
  SLIDER_INTERVAL_MS,
} from "../DynamicCatalogSlider";
import { InventoryData } from "../../utils/InventoryData";

function renderPage() {
  return render(
    <MemoryRouter>
      <DynamicCatalogSlider />
    </MemoryRouter>,
  );
}

describe("DynamicCatalogSlider", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should show the first item initially", () => {
    const { getByTestId } = renderPage();
    expect(getByTestId("dynamic-catalog-slider-item-name")).toHaveTextContent(
      InventoryData[0].name,
    );
    expect(getByTestId("dynamic-catalog-slider-dot-0")).toHaveClass("active");
  });

  it("should advance to the next item automatically", () => {
    const { getByTestId } = renderPage();

    act(() => {
      jest.advanceTimersByTime(SLIDER_INTERVAL_MS);
    });

    expect(getByTestId("dynamic-catalog-slider-item-name")).toHaveTextContent(
      InventoryData[1].name,
    );
    expect(getByTestId("dynamic-catalog-slider-dot-1")).toHaveClass("active");
  });

  it("should wrap around to the first item after the last one", () => {
    const { getByTestId } = renderPage();

    act(() => {
      jest.advanceTimersByTime(SLIDER_INTERVAL_MS * InventoryData.length);
    });

    expect(getByTestId("dynamic-catalog-slider-item-name")).toHaveTextContent(
      InventoryData[0].name,
    );
  });

  it("should jump to an item when its dot is clicked", () => {
    const { getByTestId } = renderPage();

    fireEvent.click(getByTestId("dynamic-catalog-slider-dot-3"));

    expect(getByTestId("dynamic-catalog-slider-item-name")).toHaveTextContent(
      InventoryData[3].name,
    );
    expect(getByTestId("dynamic-catalog-slider-dot-3")).toHaveClass("active");
    expect(getByTestId("dynamic-catalog-slider-dot-0")).not.toHaveClass(
      "active",
    );
  });

  it("should stop advancing after unmount", () => {
    const { unmount } = renderPage();
    unmount();
    expect(() => {
      act(() => {
        jest.advanceTimersByTime(SLIDER_INTERVAL_MS);
      });
    }).not.toThrow();
  });
});
