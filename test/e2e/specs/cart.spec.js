const TestUtils = require('../test-utils');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');
const SliderMenuPage = require('../pages/slider-menu.page');
const InventoryListPage = require('../pages/inventory.list.page');
const CartPage = require('../pages/cart.page');

describe('Shopping Cart', () => {
  it('should be able to open and close the cart page slider menu', () => {
    browser.url('/');
    TestUtils.saveScreenshot('shopping-cart', 'cart-menu-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    const headerPage = new HeaderPage();
    const cartPage = new CartPage();
    const sliderPage = new SliderMenuPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('shopping-cart', 'cart-menu-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    headerPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('shopping-cart', 'cart-menu-3-cart-click');
    expect(browser.getUrl()).toEqual('http://localhost/cart.html');
    expect(sliderPage.isSliderMenuPresent()).toEqual(false);

    headerPage.getSliderMenuButton().click();
    TestUtils.saveScreenshot('inventory-item', 'cart-menu-4-slider-menu-click');

    sliderPage.waitForSliderMenuVisible();    
    TestUtils.saveScreenshot('inventory-item', 'cart-menu-5-slider-menu-open');
    expect(sliderPage.isSliderMenuPresent()).toEqual(true);
    
    sliderPage.getSliderMenuOverlay().click();    
    sliderPage.waitForSliderMenuHidden();
    TestUtils.saveScreenshot('inventory-item', 'cart-menu-6-slider-menu-closed');
    expect(sliderPage.isSliderMenuPresent()).toEqual(false);
  });

  // Sure, it's kinda pointless to go to the shopping cart page from the shopping
  // cart page, but we should still verify the standard header link isn't broken
  it('should be able to navigate to cart page shopping cart page', () => {
    browser.url('/');
    TestUtils.saveScreenshot('shopping-cart', 'cart-cart-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    const headerPage = new HeaderPage();
    const cartPage = new CartPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('shopping-cart', 'cart-cart-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    headerPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('shopping-cart', 'cart-cart-3-cart-click');
    expect(browser.getUrl()).toEqual('http://localhost/cart.html');

    headerPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('shopping-cart', 'cart-cart-4-cart-click');
    // Should still be at the same spot post-click
    expect(browser.getUrl()).toEqual('http://localhost/cart.html');
  });

  it('should be able to add items to cart and see on cart page', () => {
    browser.url('/');
    // We manipulate the cart in this test, so make sure session storage is clear.
    // This has to happen AFTER a browser.url call, otherwise you will get:
    // Failed to read the 'sessionStorage' property from 'Window': Storage is disabled inside 'data:' URLs.
    browser.clearSessionStorage();
    TestUtils.saveScreenshot('shopping-cart', 'add-cart-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    const headerPage = new HeaderPage();
    const cartPage = new CartPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('shopping-cart', 'add-cart-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    listPage.getAddToCartButton(0).click();
    TestUtils.saveScreenshot('shopping-cart', 'add-cart-3-add-to-cart-click');
    
    expect(headerPage.getShoppingCartCount()).toEqual('1');

    listPage.getAddToCartButton(0).click();
    TestUtils.saveScreenshot('shopping-cart', 'add-cart-4-second-add-to-cart-click');

    expect(headerPage.getShoppingCartCount()).toEqual('2');

    headerPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('shopping-cart', 'add-cart-5-cart-click');
    expect(browser.getUrl()).toEqual('http://localhost/cart.html');

    expect(cartPage.getCartItemCount()).toEqual(2);
  });

  it('should be able to remove items from cart on cart page', () => {
    browser.url('/');
    // We manipulate the cart in this test, so make sure session storage is clear.
    // This has to happen AFTER a browser.url call, otherwise you will get:
    // Failed to read the 'sessionStorage' property from 'Window': Storage is disabled inside 'data:' URLs.
    browser.clearSessionStorage();
    TestUtils.saveScreenshot('shopping-cart', 'remove-cart-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    const headerPage = new HeaderPage();
    const cartPage = new CartPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('shopping-cart', 'remove-cart-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    listPage.getAddToCartButton(0).click();
    TestUtils.saveScreenshot('shopping-cart', 'remove-cart-3-add-to-cart-click');

    expect(headerPage.getShoppingCartCount()).toEqual('1');

    listPage.getAddToCartButton(0).click();
    TestUtils.saveScreenshot('shopping-cart', 'remove-cart-4-second-add-to-cart-click');

    expect(headerPage.getShoppingCartCount()).toEqual('2');

    headerPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('shopping-cart', 'remove-cart-5-cart-click');
    expect(browser.getUrl()).toEqual('http://localhost/cart.html');

    expect(cartPage.getCartItemCount()).toEqual(2);

    cartPage.getRemoveFromCartButton(1).click();
    TestUtils.saveScreenshot('shopping-cart', 'remove-cart-5-remove-from-cart-click-1');

    expect(cartPage.getCartItemCount()).toEqual(1);

    cartPage.getRemoveFromCartButton(0).click();
    TestUtils.saveScreenshot('shopping-cart', 'remove-cart-6-remove-from-cart-click-2');

    expect(cartPage.getCartItemCount()).toEqual(0);
  });

  it('should be able to return to inventory list from cart page', () => {
    browser.url('/');
    TestUtils.saveScreenshot('shopping-cart', 'cart-cancel-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    const headerPage = new HeaderPage();
    const cartPage = new CartPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('shopping-cart', 'cart-cancel-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    headerPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('shopping-cart', 'cart-cancel-3-cart-click');
    expect(browser.getUrl()).toEqual('http://localhost/cart.html');

    cartPage.getCancelButton().click();
    TestUtils.saveScreenshot('shopping-cart', 'cart-cancel-4-cancel-click');
    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');
  });

  it('should be able to start checkout process from cart page', () => {
    browser.url('/');
    // We manipulate the cart in this test, so make sure session storage is clear.
    // This has to happen AFTER a browser.url call, otherwise you will get:
    // Failed to read the 'sessionStorage' property from 'Window': Storage is disabled inside 'data:' URLs.
    browser.clearSessionStorage();
    TestUtils.saveScreenshot('shopping-cart', 'cart-checkout-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    const headerPage = new HeaderPage();
    const cartPage = new CartPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('shopping-cart', 'cart-checkout-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    listPage.getAddToCartButton(0).click();
    TestUtils.saveScreenshot('shopping-cart', 'cart-checkout-3-add-to-cart-click');
    
    expect(headerPage.getShoppingCartCount()).toEqual('1');

    listPage.getAddToCartButton(0).click();
    TestUtils.saveScreenshot('shopping-cart', 'cart-checkout-4-second-add-to-cart-click');

    expect(headerPage.getShoppingCartCount()).toEqual('2');

    headerPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('shopping-cart', 'cart-checkout-5-cart-click');
    expect(browser.getUrl()).toEqual('http://localhost/cart.html');

    expect(cartPage.getCartItemCount()).toEqual(2);

    cartPage.getCheckoutButton().click();
    TestUtils.saveScreenshot('shopping-cart', 'cart-checkout-6-checkout-click');
    expect(browser.getUrl()).toEqual('http://localhost/checkout-step-one.html');
  });
});