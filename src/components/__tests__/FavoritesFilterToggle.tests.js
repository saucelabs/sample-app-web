import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FavoritesFilterToggle, {
  FAVORITES_FILTER_VIEWS,
} from "../FavoritesFilterToggle";

let props;

describe("FavoritesFilterToggle", () => {
  beforeEach(() => {
    props = {
      activeView: FAVORITES_FILTER_VIEWS.ALL,
      onChange: jest.fn(),
    };
  });

  it("should render with the All option active", () => {
    const { getByText } = render(<FavoritesFilterToggle {...props} />);
    expect(getByText("All")).toHaveAttribute("aria-pressed", "true");
    expect(getByText("Favorites")).toHaveAttribute("aria-pressed", "false");
  });

  it("should render with the Favorites option active", () => {
    const { getByText } = render(
      <FavoritesFilterToggle
        {...props}
        activeView={FAVORITES_FILTER_VIEWS.FAVORITES}
      />,
    );
    expect(getByText("All")).toHaveAttribute("aria-pressed", "false");
    expect(getByText("Favorites")).toHaveAttribute("aria-pressed", "true");
  });

  it("should call onChange with 'all' when All is clicked", () => {
    const { getByText } = render(
      <FavoritesFilterToggle
        {...props}
        activeView={FAVORITES_FILTER_VIEWS.FAVORITES}
      />,
    );
    fireEvent.click(getByText("All"));
    expect(props.onChange).toHaveBeenCalledWith(FAVORITES_FILTER_VIEWS.ALL);
  });

  it("should call onChange with 'favorites' when Favorites is clicked", () => {
    const { getByText } = render(<FavoritesFilterToggle {...props} />);
    fireEvent.click(getByText("Favorites"));
    expect(props.onChange).toHaveBeenCalledWith(
      FAVORITES_FILTER_VIEWS.FAVORITES,
    );
  });

  it("should render with a test id", () => {
    const { getByTestId } = render(
      <FavoritesFilterToggle {...props} testId="favorites-filter" />,
    );
    expect(getByTestId("favorites-filter")).toBeInTheDocument();
    expect(getByTestId("favorites-filter-all")).toBeInTheDocument();
    expect(getByTestId("favorites-filter-favorites")).toBeInTheDocument();
  });

  it("should render without a test id", () => {
    const { container } = render(<FavoritesFilterToggle {...props} />);
    expect(container.querySelector("span")).not.toHaveAttribute("data-test");
  });
});
