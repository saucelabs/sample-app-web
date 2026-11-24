import { Favorites } from "../favorites";

describe("favorites", () => {
  beforeEach(() => {
    window.localStorage.removeItem("favorite-items");
    Favorites.LISTENERS = [];
  });

  it("should be able to add an item to favorites", () => {
    window.localStorage.setItem("favorite-items", JSON.stringify([1, 2]));

    expect(window.localStorage.getItem("favorite-items")).toEqual(
      JSON.stringify([1, 2]),
    );

    Favorites.addItem(3);

    expect(Favorites.getFavoriteItems()).toEqual([1, 2, 3]);
  });

  it("should be able to remove an item from favorites", () => {
    window.localStorage.setItem("favorite-items", JSON.stringify([1, 2, 3]));

    expect(window.localStorage.getItem("favorite-items")).toEqual(
      JSON.stringify([1, 2, 3]),
    );

    Favorites.removeItem(2);

    expect(Favorites.getFavoriteItems()).toEqual([1, 3]);
  });

  it("should get an empty array when there are no favorites", () => {
    expect(Favorites.getFavoriteItems()).toEqual([]);
  });

  it("should get the favorites if there are items", () => {
    const items = [1, 2, 3];
    window.localStorage.setItem("favorite-items", JSON.stringify(items));

    expect(Favorites.getFavoriteItems()).toEqual(items);
  });

  it("should be able to set the favorites", () => {
    const items = [1, 2, 3];

    expect(window.localStorage.getItem("favorite-items")).toEqual(null);

    Favorites.setFavoriteItems(items);

    expect(window.localStorage.getItem("favorite-items")).toEqual(
      JSON.stringify(items),
    );
  });

  it("should know when an item is in favorites", () => {
    window.localStorage.setItem("favorite-items", JSON.stringify([1, 2]));

    expect(Favorites.isItemInFavorites(1)).toEqual(true);
    expect(Favorites.isItemInFavorites(3)).toEqual(false);
  });

  it("should be able to register favorites listeners", () => {
    expect(Favorites.LISTENERS).toEqual([]);

    Favorites.registerFavoritesListener({ foo: true });

    expect(Favorites.LISTENERS).toEqual([{ foo: true }]);
  });
});
