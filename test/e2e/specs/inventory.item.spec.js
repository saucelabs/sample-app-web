const TestUtils = require('../test-utils');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');
const SliderMenuPage = require('../pages/slider-menu.page');
const InventoryListPage = require('../pages/inventory.list.page');
const InventoryItemPage = require('../pages/inventory.item.page');

describe('Inventory Item', () => {
  it('should be able to open and close the item page slider menu', () => {
    browser.url('/');
    TestUtils.saveScreenshot('inventory-item', 'item-menu-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    const headerPage = new HeaderPage();
    const sliderPage = new SliderMenuPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('inventory-item', 'item-menu-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    listPage.getItemTitleLink(1).click();
    TestUtils.saveScreenshot('inventory-item', 'item-menu-3-item-link-click');

    expect(browser.getUrl()).toEqual(jasmine.stringMatching(/^http:\/\/localhost\/inventory-item\.html\?id=.$/));
    expect(sliderPage.isSliderMenuPresent()).toEqual(false);

    headerPage.getSliderMenuButton().click();
    TestUtils.saveScreenshot('inventory-item', 'item-menu-4-slider-menu-click');

    sliderPage.waitForSliderMenuVisible();    
    TestUtils.saveScreenshot('inventory-item', 'item-menu-5-slider-menu-open');
    expect(sliderPage.isSliderMenuPresent()).toEqual(true);
    
    sliderPage.getSliderMenuOverlay().click();    
    sliderPage.waitForSliderMenuHidden();
    TestUtils.saveScreenshot('inventory-item', 'item-menu-6-slider-menu-closed');
    expect(sliderPage.isSliderMenuPresent()).toEqual(false);
  });

  it('should be able to navigate to item page shopping cart page', () => {
    browser.url('/');
    TestUtils.saveScreenshot('inventory-item', 'item-cart-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    const headerPage = new HeaderPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('inventory-item', 'item-cart-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    listPage.getItemTitleLink(1).click();
    TestUtils.saveScreenshot('inventory-item', 'item-cart-3-item-link-click');

    expect(browser.getUrl()).toEqual(jasmine.stringMatching(/^http:\/\/localhost\/inventory-item\.html\?id=.$/));

    headerPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('inventory-item', 'item-cart-4-cart-click');
    expect(browser.getUrl()).toEqual('http://localhost/cart.html');
  });

  it('should be able to add items to cart and remove items from cart', () => {
    browser.url('/');
    // We manipulate the cart in this test, so make sure session storage is clear.
    // This has to happen AFTER a browser.url call, otherwise you will get:
    // Failed to read the 'sessionStorage' property from 'Window': Storage is disabled inside 'data:' URLs.
    browser.clearSessionStorage();
    TestUtils.saveScreenshot('inventory-item', 'add-cart-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    const itemPage = new InventoryItemPage();
    const headerPage = new HeaderPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('inventory-item', 'add-cart-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    listPage.getItemTitleLink(1).click();
    TestUtils.saveScreenshot('inventory-item', 'add-cart-3-item-link-click');

    expect(browser.getUrl()).toEqual(jasmine.stringMatching(/^http:\/\/localhost\/inventory-item\.html\?id=.$/));

    itemPage.getAddToCartButton().click();
    TestUtils.saveScreenshot('inventory-item', 'add-cart-4-add-to-cart-click');
    
    expect(headerPage.getShoppingCartCount()).toEqual('1');

    itemPage.getRemoveFromCartButton().click();
    TestUtils.saveScreenshot('inventory-item', 'add-cart-5-remove-from-cart-click');
    
    expect(headerPage.getShoppingCartCount()).toEqual('');
  });

  it('should be able to navigate back to item list page from item page', () => {
    browser.url('/');
    TestUtils.saveScreenshot('inventory-item', 'item-back-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    const itemPage = new InventoryItemPage();
    const headerPage = new HeaderPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('inventory-item', 'item-back-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    listPage.getItemTitleLink(1).click();
    TestUtils.saveScreenshot('inventory-item', 'item-back-3-item-link-click');

    expect(browser.getUrl()).toEqual(jasmine.stringMatching(/^http:\/\/localhost\/inventory-item\.html\?id=.$/));

    itemPage.getBackButton().click();
    TestUtils.saveScreenshot('inventory-item', 'item-back-4-back-click');
    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');
  });

  it('should have the same title on the list and item pages', () => {
    browser.url('/');
    TestUtils.saveScreenshot('inventory-item', 'item-title-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    const itemPage = new InventoryItemPage();
    const headerPage = new HeaderPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('inventory-item', 'item-title-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    // Before we switch pages, capture the current item's title
    const listItemTitle = listPage.getItemTitleText(1);
    
    listPage.getItemTitleLink(1).click();
    TestUtils.saveScreenshot('inventory-item', 'item-title-3-item-link-click');

    expect(browser.getUrl()).toEqual(jasmine.stringMatching(/^http:\/\/localhost\/inventory-item\.html\?id=.$/));

    // Now get the title on the current page and make sure it matches what we thought we clicked on
    TestUtils.saveScreenshot('inventory-item', 'item-title-4-item-title-compare');
    const itemTitle = itemPage.getItemTitleText();
    expect(itemTitle).toEqual(listItemTitle);
  });
});