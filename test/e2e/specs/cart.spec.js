const TestUtils = require('../test-utils');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');
const SliderMenuPage = require('../pages/slider-menu.page');
const InventoryListPage = require('../pages/inventory.list.page');
const CartPage = require('../pages/cart.page');

describe('Shopping Cart', () => {

  beforeEach(() => {
    browser.url('/');

    // We sometimes manipulate the cart in these tests, so make sure session storage is clear.
    // This has to happen AFTER a browser.url call, otherwise you will get:
    // Failed to read the 'sessionStorage' property from 'Window': Storage is disabled inside 'data:' URLs.
    browser.clearSessionStorage();

    // Make sure we're logged in before our tests start, and verify that we're at the right starting point
    LoginPage.loginWithStandardUser();
    expect(InventoryListPage.getInventoryListPage().waitForDisplayed(15000)).toEqual(true);
  });

  it('should be able to open and close the cart page slider menu', () => {
    HeaderPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('shopping-cart', 'cart-menu-1-cart-click');
    expect(CartPage.getCartContentPage().waitForDisplayed(15000)).toEqual(true);
    expect(SliderMenuPage.isSliderMenuPresent()).toEqual(false);

    HeaderPage.getSliderMenuButton().click();
    TestUtils.saveScreenshot('inventory-item', 'cart-menu-2-slider-menu-click');

    SliderMenuPage.waitForSliderMenuVisible();
    TestUtils.saveScreenshot('inventory-item', 'cart-menu-3-slider-menu-open');
    expect(SliderMenuPage.isSliderMenuPresent()).toEqual(true);

    SliderMenuPage.getSliderMenuOverlay().click();
    SliderMenuPage.waitForSliderMenuHidden();
    TestUtils.saveScreenshot('inventory-item', 'cart-menu-4-slider-menu-closed');
    expect(SliderMenuPage.isSliderMenuPresent()).toEqual(false);
  });

  // Sure, it's kinda pointless to go to the shopping cart page from the shopping
  // cart page, but we should still verify the standard header link isn't broken
  it('should be able to navigate to cart page shopping cart page', () => {
    HeaderPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('shopping-cart', 'cart-cart-1-cart-click');
    expect(CartPage.getCartContentPage().waitForDisplayed(15000)).toEqual(true);

    HeaderPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('shopping-cart', 'cart-cart-2-cart-click');
    // Should still be at the same spot post-click
    expect(CartPage.getCartContentPage().waitForDisplayed(15000)).toEqual(true);
  });

  it('should be able to add items to cart and see on cart page', () => {
    InventoryListPage.addFirstUnaddedItemToCart();
    TestUtils.saveScreenshot('shopping-cart', 'add-cart-1-add-to-cart-click');

    expect(HeaderPage.getShoppingCartCount()).toEqual(1);

    InventoryListPage.addFirstUnaddedItemToCart();
    TestUtils.saveScreenshot('shopping-cart', 'add-cart-2-second-add-to-cart-click');

    expect(HeaderPage.getShoppingCartCount()).toEqual(2);

    HeaderPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('shopping-cart', 'add-cart-3-cart-click');
    expect(CartPage.getCartContentPage().waitForDisplayed(15000)).toEqual(true);

    expect(CartPage.getCartItemCount()).toEqual(2);
  });

  it('should be able to remove items from cart on cart page', () => {
    InventoryListPage.addFirstUnaddedItemToCart();
    TestUtils.saveScreenshot('shopping-cart', 'remove-cart-1-add-to-cart-click');

    expect(HeaderPage.getShoppingCartCount()).toEqual(1);

    InventoryListPage.addFirstUnaddedItemToCart();
    TestUtils.saveScreenshot('shopping-cart', 'remove-cart-2-second-add-to-cart-click');

    expect(HeaderPage.getShoppingCartCount()).toEqual(2);

    HeaderPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('shopping-cart', 'remove-cart-3-cart-click');
    expect(CartPage.getCartContentPage().waitForDisplayed(15000)).toEqual(true);

    expect(CartPage.getCartItemCount()).toEqual(2);

    CartPage.getRemoveFromCartButton(1).click();
    TestUtils.saveScreenshot('shopping-cart', 'remove-cart-4-remove-from-cart-click-1');

    expect(CartPage.getCartItemCount()).toEqual(1);

    CartPage.getRemoveFromCartButton(0).click();
    TestUtils.saveScreenshot('shopping-cart', 'remove-cart-5-remove-from-cart-click-2');

    expect(CartPage.getCartItemCount()).toEqual(0);
  });

  it('should be able to return to inventory list from cart page', () => {
    HeaderPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('shopping-cart', 'cart-cancel-1-cart-click');
    expect(CartPage.getCartContentPage().waitForDisplayed(15000)).toEqual(true);

    CartPage.getCancelButton().click();
    TestUtils.saveScreenshot('shopping-cart', 'cart-cancel-2-cancel-click');
    expect(browser.getUrl()).toEqual('http://localhost:3000/inventory.html');
  });

  it('should be able to start checkout process from cart page', () => {
    InventoryListPage.addFirstUnaddedItemToCart();
    TestUtils.saveScreenshot('shopping-cart', 'cart-checkout-1-add-to-cart-click');

    expect(HeaderPage.getShoppingCartCount()).toEqual(1);

    InventoryListPage.addFirstUnaddedItemToCart();
    TestUtils.saveScreenshot('shopping-cart', 'cart-checkout-2-second-add-to-cart-click');

    expect(HeaderPage.getShoppingCartCount()).toEqual(2);

    HeaderPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('shopping-cart', 'cart-checkout-3-cart-click');
    expect(CartPage.getCartContentPage().waitForDisplayed(15000)).toEqual(true);

    expect(CartPage.getCartItemCount()).toEqual(2);

    CartPage.getCheckoutButton().click();
    TestUtils.saveScreenshot('shopping-cart', 'cart-checkout-4-checkout-click');
    expect(browser.getUrl()).toEqual('http://localhost:3000/checkout-step-one.html');
  });
});
