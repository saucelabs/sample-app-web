import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FavoriteToggle from "../FavoriteToggle";
import { Favorites } from "../../utils/favorites";

describe("FavoriteToggle", () => {
  beforeEach(() => {
    window.localStorage.removeItem("favorite-items");
    Favorites.LISTENERS = [];
  });

  it("should render unfavorited by default", () => {
    const { getByTestId } = render(
      <FavoriteToggle itemId={1} testId="favorite-toggle-1" />,
    );
    const toggle = getByTestId("favorite-toggle-1");
    expect(toggle).toHaveAttribute("aria-pressed", "false");
    expect(toggle).toHaveAttribute("aria-label", "Add to favorites");
  });

  it("should render favorited when the item is already in favorites", () => {
    Favorites.addItem(1);
    const { getByTestId } = render(
      <FavoriteToggle itemId={1} testId="favorite-toggle-1" />,
    );
    const toggle = getByTestId("favorite-toggle-1");
    expect(toggle).toHaveAttribute("aria-pressed", "true");
    expect(toggle).toHaveAttribute("aria-label", "Remove from favorites");
  });

  it("should add the item to favorites when clicked", () => {
    const { getByTestId } = render(
      <FavoriteToggle itemId={1} testId="favorite-toggle-1" />,
    );
    fireEvent.click(getByTestId("favorite-toggle-1"));
    expect(Favorites.isItemInFavorites(1)).toEqual(true);
    expect(getByTestId("favorite-toggle-1")).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("should remove the item from favorites when clicked again", () => {
    Favorites.addItem(1);
    const { getByTestId } = render(
      <FavoriteToggle itemId={1} testId="favorite-toggle-1" />,
    );
    fireEvent.click(getByTestId("favorite-toggle-1"));
    expect(Favorites.isItemInFavorites(1)).toEqual(false);
    expect(getByTestId("favorite-toggle-1")).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  it("should stop the click from bubbling to a surrounding link", () => {
    const parentClick = jest.fn();
    const { getByTestId } = render(
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div onClick={parentClick}>
        <FavoriteToggle itemId={1} testId="favorite-toggle-1" />
      </div>,
    );
    fireEvent.click(getByTestId("favorite-toggle-1"));
    expect(parentClick).not.toHaveBeenCalled();
  });

  it("should render without a test id", () => {
    const { container } = render(<FavoriteToggle itemId={1} />);
    expect(container.querySelector("button")).not.toHaveAttribute("data-test");
  });
});
