const TestUtils = require('../test-utils');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');
const SliderMenuPage = require('../pages/slider-menu.page');
const InventoryListPage = require('../pages/inventory.list.page');
const InventoryItemPage = require('../pages/inventory.item.page');

describe('Inventory Item', () => {

  beforeEach(() => {
    browser.url('/');
    
    // We sometimes manipulate the cart in these tests, so make sure session storage is clear.
    // This has to happen AFTER a browser.url call, otherwise you will get:
    // Failed to read the 'sessionStorage' property from 'Window': Storage is disabled inside 'data:' URLs.
    browser.clearSessionStorage();

    // Make sure we're logged in before our tests start, and verify that we're at the right starting point
    LoginPage.loginWithStandardUser();
    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');
  });

  it('should be able to open and close the item page slider menu', () => {
    InventoryListPage.getItemTitleLink(1).click();
    TestUtils.saveScreenshot('inventory-item', 'item-menu-1-item-link-click');

    expect(browser.getUrl()).toEqual(jasmine.stringMatching(/^http:\/\/localhost\/inventory-item\.html\?id=.$/));
    expect(SliderMenuPage.isSliderMenuPresent()).toEqual(false);

    HeaderPage.getSliderMenuButton().click();
    TestUtils.saveScreenshot('inventory-item', 'item-menu-2-slider-menu-click');

    SliderMenuPage.waitForSliderMenuVisible();    
    TestUtils.saveScreenshot('inventory-item', 'item-menu-3-slider-menu-open');
    expect(SliderMenuPage.isSliderMenuPresent()).toEqual(true);
    
    SliderMenuPage.getSliderMenuOverlay().click();    
    SliderMenuPage.waitForSliderMenuHidden();
    TestUtils.saveScreenshot('inventory-item', 'item-menu-4-slider-menu-closed');
    expect(SliderMenuPage.isSliderMenuPresent()).toEqual(false);
  });

  it('should be able to navigate to item page shopping cart page', () => {
    InventoryListPage.getItemTitleLink(1).click();
    TestUtils.saveScreenshot('inventory-item', 'item-cart-1-item-link-click');

    expect(browser.getUrl()).toEqual(jasmine.stringMatching(/^http:\/\/localhost\/inventory-item\.html\?id=.$/));

    HeaderPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('inventory-item', 'item-cart-2-cart-click');
    expect(browser.getUrl()).toEqual('http://localhost/cart.html');
  });

  it('should be able to add items to cart and remove items from cart', () => {
    InventoryListPage.getItemTitleLink(1).click();
    TestUtils.saveScreenshot('inventory-item', 'add-cart-1-item-link-click');

    expect(browser.getUrl()).toEqual(jasmine.stringMatching(/^http:\/\/localhost\/inventory-item\.html\?id=.$/));

    InventoryItemPage.getAddToCartButton().click();
    TestUtils.saveScreenshot('inventory-item', 'add-cart-2-add-to-cart-click');
    
    expect(HeaderPage.getShoppingCartCount()).toEqual(1);

    InventoryItemPage.getRemoveFromCartButton().click();
    TestUtils.saveScreenshot('inventory-item', 'add-cart-3-remove-from-cart-click');
    
    expect(HeaderPage.getShoppingCartCount()).toEqual(0);
  });

  it('should be able to navigate back to item list page from item page', () => {
    InventoryListPage.getItemTitleLink(1).click();
    TestUtils.saveScreenshot('inventory-item', 'item-back-1-item-link-click');

    expect(browser.getUrl()).toEqual(jasmine.stringMatching(/^http:\/\/localhost\/inventory-item\.html\?id=.$/));

    InventoryItemPage.getBackButton().click();
    TestUtils.saveScreenshot('inventory-item', 'item-back-2-back-click');
    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');
  });

  it('should have the same title on the list and item pages', () => {
    // Before we switch pages, capture the current item's title
    const listItemTitle = InventoryListPage.getItemTitleText(1);
    
    InventoryListPage.getItemTitleLink(1).click();
    TestUtils.saveScreenshot('inventory-item', 'item-title-1-item-link-click');

    expect(browser.getUrl()).toEqual(jasmine.stringMatching(/^http:\/\/localhost\/inventory-item\.html\?id=.$/));

    // Now get the title on the current page and make sure it matches what we thought we clicked on
    TestUtils.saveScreenshot('inventory-item', 'item-title-2-item-title-compare');
    const itemTitle = InventoryItemPage.getItemTitleText();
    expect(itemTitle).toEqual(listItemTitle);
  });
});