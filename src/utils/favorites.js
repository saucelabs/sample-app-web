export class Favorites {
  static addItem(itemId) {
    const curContents = Favorites.getFavoriteItems();

    /* istanbul ignore else */
    if (curContents.indexOf(itemId) < 0) {
      curContents.push(itemId);
      Favorites.setFavoriteItems(curContents);
    }
  }

  static removeItem(itemId) {
    const curContents = Favorites.getFavoriteItems();
    const itemIndex = curContents.indexOf(itemId);

    /* istanbul ignore else */
    if (itemIndex >= 0) {
      curContents.splice(itemIndex, 1);
      Favorites.setFavoriteItems(curContents);
    }
  }

  static isItemInFavorites(itemId) {
    const curContents = Favorites.getFavoriteItems();

    return curContents.indexOf(itemId) >= 0;
  }

  static getFavoriteItems() {
    let curContents = window.localStorage.getItem("favorite-items");

    if (curContents == null) {
      curContents = [];
    } else {
      curContents = JSON.parse(curContents);
    }

    return curContents;
  }

  static setFavoriteItems(newContents) {
    window.localStorage.setItem("favorite-items", JSON.stringify(newContents));

    /* istanbul ignore next */
    Favorites.LISTENERS.forEach((curListener) => {
      curListener.forceUpdate();
    });
  }

  static registerFavoritesListener(handler) {
    Favorites.LISTENERS.push(handler);
  }
}

Favorites.LISTENERS = [];
