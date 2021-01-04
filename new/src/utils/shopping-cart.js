export class ShoppingCart {
  static addItem(itemId) {
    // pull out our current cart contents
    var curContents = ShoppingCart.getCartContents();

    if (curContents.indexOf(itemId) < 0) {
      // Item's not yet present - add it now
      curContents.push(itemId);

      // We modified our cart, so store it now
      ShoppingCart.setCartContents(curContents);
    }
  }

  static removeItem(itemId) {
    // pull out our current cart contents
    var curContents = ShoppingCart.getCartContents();
    var itemIndex = curContents.indexOf(itemId);

    if (itemIndex >= 0) {
      // Remove this item from the array
      curContents.splice(itemIndex, 1);

      // We modified our cart, so store it now
      ShoppingCart.setCartContents(curContents);
    }
  }

  static isItemInCart(itemId) {
    // pull out our current cart contents
    var curContents = ShoppingCart.getCartContents();

    // If the item is in the array, return true
    return curContents.indexOf(itemId) >= 0;
  }

  static getCartContents() {
    // pull out our current cart contents
    var curContents = window.localStorage.getItem("cart-contents");

    // Make an empty list if this is the first item
    if (curContents == null) {
      curContents = [];
    } else {
      // We have an existing cart, so deserialize it now since localStorage stores in JSON strings
      curContents = JSON.parse(curContents);
    }

    return curContents;
  }

  static setCartContents(newContents) {
    window.localStorage.setItem("cart-contents", JSON.stringify(newContents));

    // Notify our listeners
    ShoppingCart.LISTENERS.forEach((curListener) => {
      curListener.forceUpdate();
    });
  }

  static resetCart() {
    window.localStorage.removeItem("cart-contents");

    // Notify our listeners
    ShoppingCart.LISTENERS.forEach((curListener) => {
      curListener.forceUpdate();
    });
  }

  static registerCartListener(handler) {
    ShoppingCart.LISTENERS.push(handler);
  }
}

ShoppingCart.LISTENERS = [];
