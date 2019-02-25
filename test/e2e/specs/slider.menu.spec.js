const TestUtils = require('../test-utils');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');
const SliderMenuPage = require('../pages/slider-menu.page');
const InventoryListPage = require('../pages/inventory.list.page');

describe('Slider Menu', () => {

  beforeEach(() => {
    browser.url('/');
    
    // We sometimes manipulate the cart in these tests, so make sure session storage is clear.
    // This has to happen AFTER a browser.url call, otherwise you will get:
    // Failed to read the 'sessionStorage' property from 'Window': Storage is disabled inside 'data:' URLs.
    browser.clearSessionStorage();

    // Make sure we're logged in before our tests start, and verify that we're at the right starting point
    LoginPage.loginWithStandardUser();
    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');
    expect(SliderMenuPage.isSliderMenuPresent()).toEqual(false);
  });

  it('should be able to open and close the slider menu', () => {
    HeaderPage.getSliderMenuButton().click();
    TestUtils.saveScreenshot('slider-menu', 'menu-1-slider-menu-click');

    SliderMenuPage.waitForSliderMenuVisible();    
    TestUtils.saveScreenshot('slider-menu', 'menu-2-slider-menu-open');
    expect(SliderMenuPage.isSliderMenuPresent()).toEqual(true);
    
    SliderMenuPage.getSliderMenuOverlay().click();
    SliderMenuPage.waitForSliderMenuHidden();
    TestUtils.saveScreenshot('slider-menu', 'menu-3-slider-menu-closed');
    expect(SliderMenuPage.isSliderMenuPresent()).toEqual(false);
  });

  it('should be able to navigate to menu about page', () => {
    HeaderPage.getSliderMenuButton().click();
    TestUtils.saveScreenshot('slider-menu', 'menu-about-1-slider-menu-click');

    SliderMenuPage.waitForSliderMenuVisible();    
    TestUtils.saveScreenshot('slider-menu', 'menu-about-2-slider-menu-open');
    expect(SliderMenuPage.isSliderMenuPresent()).toEqual(true);

    SliderMenuPage.getSliderMenuAboutLink().click();
    TestUtils.saveScreenshot('slider-menu', 'menu-about-3-slider-about-link-click');

    expect(browser.getUrl()).toEqual('https://saucelabs.com/');
  });

  it('should be able to log out via menu', () => {
    HeaderPage.getSliderMenuButton().click();
    TestUtils.saveScreenshot('slider-menu', 'menu-logout-1-slider-menu-click');

    SliderMenuPage.waitForSliderMenuVisible();    
    TestUtils.saveScreenshot('slider-menu', 'menu-logout-2-slider-menu-open');
    expect(SliderMenuPage.isSliderMenuPresent()).toEqual(true);

    SliderMenuPage.getSliderMenuLogoutLink().click();
    TestUtils.saveScreenshot('slider-menu', 'menu-logout-3-slider-logout-link-click');

    expect(browser.getUrl()).toEqual('http://localhost/index.html');
  });

  it('should be able to navigate to menu inventory page', () => {
    // By default we land on the inventory list page - it won't be a very effective test if we are already there,
    // we need to navigate elsewhere to make sure we actually navigate on click
    HeaderPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('inventory-list', 'menu-inventory-1-cart-click');
    expect(browser.getUrl()).toEqual('http://localhost/cart.html');
    
    HeaderPage.getSliderMenuButton().click();
    TestUtils.saveScreenshot('slider-menu', 'menu-inventory-2-slider-menu-click');

    SliderMenuPage.waitForSliderMenuVisible();    
    TestUtils.saveScreenshot('slider-menu', 'menu-inventory-3-slider-menu-open');
    expect(SliderMenuPage.isSliderMenuPresent()).toEqual(true);

    SliderMenuPage.getSliderMenuInventoryLink().click();
    TestUtils.saveScreenshot('slider-menu', 'menu-inventory-4-slider-inventory-link-click');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');
  });

  it('should clear the cart on reset app state', () => {
    // Now add an item to the cart
    InventoryListPage.addFirstUnaddedItemToCart();
    TestUtils.saveScreenshot('inventory-list', 'menu-reset-1-add-to-cart-click');
    
    expect(HeaderPage.getShoppingCartCount()).toEqual(1);
    
    HeaderPage.getSliderMenuButton().click();
    TestUtils.saveScreenshot('slider-menu', 'menu-reset-2-slider-menu-click');

    SliderMenuPage.waitForSliderMenuVisible();    
    TestUtils.saveScreenshot('slider-menu', 'menu-reset-3-slider-menu-open');
    expect(SliderMenuPage.isSliderMenuPresent()).toEqual(true);

    SliderMenuPage.getSliderMenuResetLink().click();
    TestUtils.saveScreenshot('slider-menu', 'menu-reset-4-slider-reset-link-click');
    expect(HeaderPage.getShoppingCartCount()).toEqual(0);
    
    SliderMenuPage.getSliderMenuOverlay().click();
    SliderMenuPage.waitForSliderMenuHidden();
    TestUtils.saveScreenshot('slider-menu', 'menu-reset-5-slider-menu-closed');
    expect(SliderMenuPage.isSliderMenuPresent()).toEqual(false);
  });
});