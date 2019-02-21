const TestUtils = require('../test-utils');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');
const SliderMenuPage = require('../pages/slider-menu.page');
const InventoryListPage = require('../pages/inventory.list.page');

describe('Slider Menu', () => {
  it('should be able to open and close the slider menu', () => {
    browser.url('/');
    TestUtils.saveScreenshot('slider-menu', 'menu-1-initial-load');

    const loginPage = new LoginPage();
    const headerPage = new HeaderPage();
    const sliderPage = new SliderMenuPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('slider-menu', 'menu-2-login-complete');

    expect(sliderPage.isSliderMenuPresent()).toEqual(false, 'Menu should be closed on initial load!');

    headerPage.getSliderMenuButton().click();
    TestUtils.saveScreenshot('slider-menu', 'menu-3-slider-menu-click');

    sliderPage.waitForSliderMenuVisible();    
    TestUtils.saveScreenshot('slider-menu', 'menu-4-slider-menu-open');
    expect(sliderPage.isSliderMenuPresent()).toEqual(true, 'Menu should be open after menu button click!');
    
    sliderPage.getSliderMenuOverlay().click();
    sliderPage.waitForSliderMenuHidden();
    TestUtils.saveScreenshot('slider-menu', 'menu-5-slider-menu-closed');
    expect(sliderPage.isSliderMenuPresent()).toEqual(false, 'Menu should be closed after click outside slider menu!');
  });

  it('should be able to navigate to menu about page', () => {
    browser.url('/');
    TestUtils.saveScreenshot('slider-menu', 'menu-about-1-initial-load');

    const loginPage = new LoginPage();
    const headerPage = new HeaderPage();
    const sliderPage = new SliderMenuPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('slider-menu', 'menu-about-2-login-complete');

    expect(sliderPage.isSliderMenuPresent()).toEqual(false, 'Menu should be closed on initial load!');

    headerPage.getSliderMenuButton().click();
    TestUtils.saveScreenshot('slider-menu', 'menu-about-3-slider-menu-click');

    sliderPage.waitForSliderMenuVisible();    
    TestUtils.saveScreenshot('slider-menu', 'menu-about-4-slider-menu-open');
    expect(sliderPage.isSliderMenuPresent()).toEqual(true, 'Menu should be open after menu button click!');

    sliderPage.getSliderMenuAboutLink().click();
    TestUtils.saveScreenshot('slider-menu', 'menu-about-5-slider-about-link-click');

    expect(browser.getUrl()).toEqual('https://saucelabs.com/', 'expected URL mismatch!');
  });

  it('should be able to log out via menu', () => {
    browser.url('/');
    TestUtils.saveScreenshot('slider-menu', 'menu-logout-1-initial-load');

    const loginPage = new LoginPage();
    const headerPage = new HeaderPage();
    const sliderPage = new SliderMenuPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('slider-menu', 'menu-logout-2-login-complete');

    expect(sliderPage.isSliderMenuPresent()).toEqual(false, 'Menu should be closed on initial load!');

    headerPage.getSliderMenuButton().click();
    TestUtils.saveScreenshot('slider-menu', 'menu-logout-3-slider-menu-click');

    sliderPage.waitForSliderMenuVisible();    
    TestUtils.saveScreenshot('slider-menu', 'menu-logout-4-slider-menu-open');
    expect(sliderPage.isSliderMenuPresent()).toEqual(true, 'Menu should be open after menu button click!');

    sliderPage.getSliderMenuLogoutLink().click();
    TestUtils.saveScreenshot('slider-menu', 'menu-logout-5-slider-logout-link-click');

    expect(browser.getUrl()).toEqual('http://localhost/index.html', 'expected URL mismatch!');
  });

  it('should be able to navigate to menu inventory page', () => {
    browser.url('/');
    TestUtils.saveScreenshot('slider-menu', 'menu-inventory-1-initial-load');

    const loginPage = new LoginPage();
    const headerPage = new HeaderPage();
    const sliderPage = new SliderMenuPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('slider-menu', 'menu-inventory-2-login-complete');

    expect(sliderPage.isSliderMenuPresent()).toEqual(false, 'Menu should be closed on initial load!');

    // By default we land on the inventory list page - it won't be a very effective test if we are already there,
    // we need to navigate elsewhere to make sure we actually navigate on click
    headerPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('inventory-list', 'menu-inventory-3-cart-click');
    expect(browser.getUrl()).toEqual('http://localhost/cart.html', 'expected URL mismatch!');
    
    headerPage.getSliderMenuButton().click();
    TestUtils.saveScreenshot('slider-menu', 'menu-inventory-4-slider-menu-click');

    sliderPage.waitForSliderMenuVisible();    
    TestUtils.saveScreenshot('slider-menu', 'menu-inventory-5-slider-menu-open');
    expect(sliderPage.isSliderMenuPresent()).toEqual(true, 'Menu should be open after menu button click!');

    sliderPage.getSliderMenuInventoryLink().click();
    TestUtils.saveScreenshot('slider-menu', 'menu-inventory-6-slider-inventory-link-click');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html', 'expected URL mismatch!');
  });

  it('should clear the cart on reset app state', () => {
    browser.url('/');
    TestUtils.saveScreenshot('slider-menu', 'menu-reset-1-initial-load');

    const loginPage = new LoginPage();
    const headerPage = new HeaderPage();
    const sliderPage = new SliderMenuPage();
    const listPage = new InventoryListPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('slider-menu', 'menu-reset-2-login-complete');

    expect(sliderPage.isSliderMenuPresent()).toEqual(false, 'Menu should be closed on initial load!');

    // Now add an item to the cart
    listPage.getAddToCartButton(0).click();
    TestUtils.saveScreenshot('inventory-list', 'menu-reset-3-add-to-cart-click');
    
    expect(headerPage.getShoppingCartCount()).toEqual('1', 'Expected to have one item in the cart after add-to-cart!');
    
    headerPage.getSliderMenuButton().click();
    TestUtils.saveScreenshot('slider-menu', 'menu-reset-4-slider-menu-click');

    sliderPage.waitForSliderMenuVisible();    
    TestUtils.saveScreenshot('slider-menu', 'menu-reset-5-slider-menu-open');
    expect(sliderPage.isSliderMenuPresent()).toEqual(true, 'Menu should be open after menu button click!');

    sliderPage.getSliderMenuResetLink().click();
    TestUtils.saveScreenshot('slider-menu', 'menu-reset-6-slider-reset-link-click');
    expect(headerPage.getShoppingCartCount()).toEqual('', 'Expected to have nothing in the cart after reset!');
    
    sliderPage.getSliderMenuOverlay().click();
    sliderPage.waitForSliderMenuHidden();
    TestUtils.saveScreenshot('slider-menu', 'menu-reset-7-slider-menu-closed');
    expect(sliderPage.isSliderMenuPresent()).toEqual(false, 'Menu should be closed after click outside slider menu!');
  });
});