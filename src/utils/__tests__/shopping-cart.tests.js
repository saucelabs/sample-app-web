import { ShoppingCart } from "../../utils/shopping-cart";

describe("shopping-cart", () => {
  beforeEach(() => {
    // Clear the testing storage
    window.localStorage.removeItem("cart-contents");

    // Rest the listeners
    ShoppingCart.LISTENERS = [];
  });

  it("should be able to add an item to the cart", () => {
    window.localStorage.setItem("cart-contents", JSON.stringify([1, 2]));

    expect(window.localStorage.getItem("cart-contents")).toEqual(
      JSON.stringify([1, 2])
    );

    ShoppingCart.addItem(3);

    expect(ShoppingCart.getCartContents()).toEqual([1, 2, 3]);
  });

  it("should be able to remove an item from the cart", () => {
    window.localStorage.setItem("cart-contents", JSON.stringify([1, 2, 3]));

    expect(window.localStorage.getItem("cart-contents")).toEqual(
      JSON.stringify([1, 2, 3])
    );

    ShoppingCart.removeItem(2);

    expect(ShoppingCart.getCartContents()).toEqual([1, 3]);
  });

  it("should get an empty array when there are no items in the cart", () => {
    expect(ShoppingCart.getCartContents()).toEqual([]);
  });

  it("should get the cart content if there are items", () => {
    const items = [1, 2, 3];
    window.localStorage.setItem("cart-contents", JSON.stringify(items));

    expect(ShoppingCart.getCartContents()).toEqual(items);
  });

  it("should be able to set the content in the cart", () => {
    const items = [1, 2, 3];

    expect(window.localStorage.getItem("cart-contents")).toEqual(null);

    ShoppingCart.setCartContents(items);

    expect(window.localStorage.getItem("cart-contents")).toEqual(
      JSON.stringify(items)
    );
  });

  it("should be able to reset the cart", () => {
    const items = JSON.stringify([1, 2, 3]);
    window.localStorage.setItem("cart-contents", items);

    ShoppingCart.resetCart();

    expect(window.localStorage.getItem("cart-contents")).toEqual(null);
  });

  it("should be able to register cart listeners", () => {
    expect(ShoppingCart.LISTENERS).toEqual([]);

    ShoppingCart.registerCartListener({ foo: true });

    expect(ShoppingCart.LISTENERS).toEqual([{ foo: true }]);
  });
});
