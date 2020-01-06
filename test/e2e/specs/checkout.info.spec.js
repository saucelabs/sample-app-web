const TestUtils = require('../test-utils');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');
const SliderMenuPage = require('../pages/slider-menu.page');
const InventoryListPage = require('../pages/inventory.list.page');
const CartPage = require('../pages/cart.page');
const CheckoutInfoPage = require('../pages/checkout.info.page');

describe('Checkout Info', () => {

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

  it('should be able to open and close the slider menu', () => {
    HeaderPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-menu-1-cart-click');
    expect(CartPage.getCartContentPage().waitForDisplayed(15000)).toEqual(true);

    CartPage.getCheckoutButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-menu-2-checkout-click');
    expect(CheckoutInfoPage.getCheckoutInfoPage().waitForDisplayed(15000)).toEqual(true);

    expect(SliderMenuPage.isSliderMenuPresent()).toEqual(false);

    HeaderPage.getSliderMenuButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-menu-3-slider-menu-click');

    SliderMenuPage.waitForSliderMenuVisible();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-menu-4-slider-menu-open');
    expect(SliderMenuPage.isSliderMenuPresent()).toEqual(true);

    SliderMenuPage.getSliderMenuOverlay().click();
    SliderMenuPage.waitForSliderMenuHidden();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-menu-5-slider-menu-closed');
    expect(SliderMenuPage.isSliderMenuPresent()).toEqual(false);
  });

  it('should be able to navigate to shopping cart page', () => {
    HeaderPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-cart-1-cart-click');
    expect(CartPage.getCartContentPage().waitForDisplayed(15000)).toEqual(true);

    CartPage.getCheckoutButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-cart-2-checkout-click');
    expect(CheckoutInfoPage.getCheckoutInfoPage().waitForDisplayed(15000)).toEqual(true);

    HeaderPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-cart-3-cart-click');
    expect(CartPage.getCartContentPage().waitForDisplayed(15000)).toEqual(true);
  });

  it('should be able to return to cart page from checkout info page', () => {
    HeaderPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-cancel-1-cart-click');
    expect(CartPage.getCartContentPage().waitForDisplayed(15000)).toEqual(true);

    CartPage.getCheckoutButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-cancel-2-checkout-click');
    expect(CheckoutInfoPage.getCheckoutInfoPage().waitForDisplayed(15000)).toEqual(true);

    CheckoutInfoPage.getCancelButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-cancel-3-cancel-click');
    expect(CartPage.getCartContentPage().waitForDisplayed(15000)).toEqual(true);
  });

  it('should be able to continue checkout process from info page', () => {
    InventoryListPage.addFirstUnaddedItemToCart();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-checkout-1-add-to-cart-click');

    expect(HeaderPage.getShoppingCartCount()).toEqual(1);

    InventoryListPage.addFirstUnaddedItemToCart();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-checkout-2-second-add-to-cart-click');

    expect(HeaderPage.getShoppingCartCount()).toEqual(2);

    HeaderPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-checkout-3-cart-click');
    expect(CartPage.getCartContentPage().waitForDisplayed(15000)).toEqual(true);

    expect(CartPage.getCartItemCount()).toEqual(2);

    CartPage.getCheckoutButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-checkout-4-checkout-click');
    expect(CheckoutInfoPage.getCheckoutInfoPage().waitForDisplayed(15000)).toEqual(true);

    const firstName = 'Selenium first name';
    const lastName = 'Selenium last name';
    const postalCode = 'H0H 0H0';
    CheckoutInfoPage.getFirstNameInput().addValue(firstName);
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-checkout-5-first-name');
    expect(CheckoutInfoPage.getFirstNameInput().getValue()).toEqual(firstName);

    CheckoutInfoPage.getLastNameInput().addValue(lastName);
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-checkout-6-last-name');

    // Keep re-checking existing fields to make sure field A isn't mutated when field B
    // is updated
    expect(CheckoutInfoPage.getFirstNameInput().getValue()).toEqual(firstName);
    expect(CheckoutInfoPage.getLastNameInput().getValue()).toEqual(lastName);

    CheckoutInfoPage.getPostalCodeInput().addValue(postalCode);
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-checkout-7-postal-code');
    expect(CheckoutInfoPage.getFirstNameInput().getValue()).toEqual(firstName);
    expect(CheckoutInfoPage.getLastNameInput().getValue()).toEqual(lastName);
    expect(CheckoutInfoPage.getPostalCodeInput().getValue()).toEqual(postalCode);

    CheckoutInfoPage.getContinueButton().click();
    TestUtils.saveScreenshot('checkout-info', 'checkout-info-cancel-8-continue-click');
    expect(browser.getUrl()).toEqual('http://localhost:3000/checkout-step-two.html');
  });
});
