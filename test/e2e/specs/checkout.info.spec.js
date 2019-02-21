const TestUtils = require('../test-utils');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');
const SliderMenuPage = require('../pages/slider-menu.page');
const InventoryListPage = require('../pages/inventory.list.page');
const CartPage = require('../pages/cart.page');
const CheckoutInfoPage = require('../pages/checkout.info.page');

describe('Checkout Info', () => {
  it('should be able to open and close the slider menu', () => {
    browser.url('/');
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-menu-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    const headerPage = new HeaderPage();
    const cartPage = new CartPage();
    const sliderPage = new SliderMenuPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-menu-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    headerPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-menu-3-cart-click');
    expect(browser.getUrl()).toEqual('http://localhost/cart.html');

    cartPage.getCheckoutButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-menu-4-checkout-click');
    expect(browser.getUrl()).toEqual('http://localhost/checkout-step-one.html');

    expect(sliderPage.isSliderMenuPresent()).toEqual(false);

    headerPage.getSliderMenuButton().click();
    TestUtils.saveScreenshot('inventory-item', 'checkout-info-menu-5-slider-menu-click');

    sliderPage.waitForSliderMenuVisible();    
    TestUtils.saveScreenshot('inventory-item', 'checkout-info-menu-6-slider-menu-open');
    expect(sliderPage.isSliderMenuPresent()).toEqual(true);
    
    sliderPage.getSliderMenuOverlay().click();    
    sliderPage.waitForSliderMenuHidden();
    TestUtils.saveScreenshot('inventory-item', 'checkout-info-menu-7-slider-menu-closed');
    expect(sliderPage.isSliderMenuPresent()).toEqual(false);
  });

  it('should be able to navigate to shopping cart page', () => {
    browser.url('/');
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-cart-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    const headerPage = new HeaderPage();
    const cartPage = new CartPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-cart-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    headerPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-cart-3-cart-click');
    expect(browser.getUrl()).toEqual('http://localhost/cart.html');

    cartPage.getCheckoutButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-cart-4-checkout-click');
    expect(browser.getUrl()).toEqual('http://localhost/checkout-step-one.html');

    headerPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-cart-5-cart-click');
    expect(browser.getUrl()).toEqual('http://localhost/cart.html');
  });

  it('should be able to return to cart page from checkout info page', () => {
    browser.url('/');
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-cancel-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    const headerPage = new HeaderPage();
    const cartPage = new CartPage();
    const infoPage = new CheckoutInfoPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-cancel-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    headerPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-cancel-3-cart-click');
    expect(browser.getUrl()).toEqual('http://localhost/cart.html');

    cartPage.getCheckoutButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-cancel-4-checkout-click');
    expect(browser.getUrl()).toEqual('http://localhost/checkout-step-one.html');

    infoPage.getCancelButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-cancel-5-cancel-click');
    expect(browser.getUrl()).toEqual('http://localhost/cart.html');
  });

  it('should be able to continue checkout process from info page', () => {
    browser.url('/');
    // We manipulate the cart in this test, so make sure session storage is clear.
    // This has to happen AFTER a browser.url call, otherwise you will get:
    // Failed to read the 'sessionStorage' property from 'Window': Storage is disabled inside 'data:' URLs.
    browser.clearSessionStorage();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-checkout-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    const headerPage = new HeaderPage();
    const cartPage = new CartPage();
    const infoPage = new CheckoutInfoPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-checkout-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    listPage.getAddToCartButton(0).click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-checkout-3-add-to-cart-click');
    
    expect(headerPage.getShoppingCartCount()).toEqual('1');

    listPage.getAddToCartButton(0).click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-checkout-4-second-add-to-cart-click');

    expect(headerPage.getShoppingCartCount()).toEqual('2');

    headerPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-checkout-5-cart-click');
    expect(browser.getUrl()).toEqual('http://localhost/cart.html');

    expect(cartPage.getCartItemCount()).toEqual(2);

    cartPage.getCheckoutButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-checkout-6-checkout-click');
    expect(browser.getUrl()).toEqual('http://localhost/checkout-step-one.html');

    const firstName = 'Selenium first name';
    const lastName = 'Selenium last name';
    const postalCode = 'H0H 0H0';
    infoPage.getFirstNameInput().addValue(firstName);
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-checkout-7-first-name');
    expect(infoPage.getFirstNameInput().getValue()).toEqual(firstName);

    infoPage.getLastNameInput().addValue(lastName);
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-checkout-8-last-name');
    expect(infoPage.getFirstNameInput().getValue()).toEqual(firstName);
    expect(infoPage.getLastNameInput().getValue()).toEqual(lastName);

    infoPage.getPostalCodeInput().addValue(postalCode);
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-checkout-9-postal-code');
    expect(infoPage.getFirstNameInput().getValue()).toEqual(firstName);
    expect(infoPage.getLastNameInput().getValue()).toEqual(lastName);
    expect(infoPage.getPostalCodeInput().getValue()).toEqual(postalCode);

    infoPage.getContinueButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-cancel-10-continue-click');
    expect(browser.getUrl()).toEqual('http://localhost/checkout-step-two.html');
  });
});