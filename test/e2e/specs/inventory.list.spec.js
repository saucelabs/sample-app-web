const TestUtils = require('../test-utils');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');
const SliderMenuPage = require('../pages/slider-menu.page');
const InventoryListPage = require('../pages/inventory.list.page');

describe('Inventory List', () => {
  it('should land on inventory list page after login', () => {
    browser.url('/');
    TestUtils.saveScreenshot('inventory-list', 'landing-list-1-initial-load');

    const loginPage = new LoginPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('inventory-list', 'landing-list-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');
  });

  it('should be able to open and close the slider menu', () => {
    browser.url('/');
    TestUtils.saveScreenshot('inventory-list', 'list-menu-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    const headerPage = new HeaderPage();
    const sliderPage = new SliderMenuPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('inventory-list', 'list-menu-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');
    expect(sliderPage.isSliderMenuPresent()).toEqual(false);

    headerPage.getSliderMenuButton().click();
    TestUtils.saveScreenshot('inventory-list', 'list-menu-3-slider-menu-click');

    sliderPage.waitForSliderMenuVisible();    
    TestUtils.saveScreenshot('inventory-list', 'list-menu-4-slider-menu-open');
    expect(sliderPage.isSliderMenuPresent()).toEqual(true);
    
    sliderPage.getSliderMenuOverlay().click();    
    sliderPage.waitForSliderMenuHidden();
    TestUtils.saveScreenshot('inventory-list', 'list-menu-5-slider-menu-closed');
    expect(sliderPage.isSliderMenuPresent()).toEqual(false);
  });

  it('should be able to navigate to shopping cart page', () => {
    browser.url('/');
    TestUtils.saveScreenshot('inventory-list', 'list-cart-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    const headerPage = new HeaderPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('inventory-list', 'list-cart-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    headerPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('inventory-list', 'list-cart-3-cart-click');
    expect(browser.getUrl()).toEqual('http://localhost/cart.html');
  });

  it('should be able to add items to cart and remove items from cart', () => {
    browser.url('/');
    // We manipulate the cart in this test, so make sure session storage is clear.
    // This has to happen AFTER a browser.url call, otherwise you will get:
    // Failed to read the 'sessionStorage' property from 'Window': Storage is disabled inside 'data:' URLs.
    browser.clearSessionStorage();
    TestUtils.saveScreenshot('inventory-list', 'add-cart-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    const headerPage = new HeaderPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('inventory-list', 'add-cart-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    listPage.getAddToCartButton(0).click();
    TestUtils.saveScreenshot('inventory-list', 'add-cart-3-add-to-cart-click');
    
    expect(headerPage.getShoppingCartCount()).toEqual('1');

    listPage.getAddToCartButton(0).click();
    TestUtils.saveScreenshot('inventory-list', 'add-cart-4-second-add-to-cart-click');

    expect(headerPage.getShoppingCartCount()).toEqual('2');

    listPage.getRemoveFromCartButton(0).click();
    TestUtils.saveScreenshot('inventory-list', 'add-cart-5-remove-from-cart-click');
    
    expect(headerPage.getShoppingCartCount()).toEqual('1');
  });

  it('should be able to navigate to item page via item title', () => {
    browser.url('/');
    TestUtils.saveScreenshot('inventory-list', 'item-title-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('inventory-list', 'item-title-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    listPage.getItemTitleLink(1).click();
    TestUtils.saveScreenshot('inventory-list', 'item-title-3-item-title-link-click');

    expect(browser.getUrl()).toEqual(jasmine.stringMatching(/^http:\/\/localhost\/inventory-item\.html\?id=.$/));
  });

  it('should be able to navigate to item page via item image', () => {
    browser.url('/');
    TestUtils.saveScreenshot('inventory-list', 'item-image-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('inventory-list', 'item-image-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    // Choose the second image in the list - if the image is broken, then the click lands on the 'peek'
    // element which is actually an improper failure (the link still works if the image is a 404)
    listPage.getItemImageLink(1).click();
    TestUtils.saveScreenshot('inventory-list', 'item-image-3-item-title-link-click');

    expect(browser.getUrl()).toEqual(jasmine.stringMatching(/^http:\/\/localhost\/inventory-item\.html\?id=.$/));
  });

  it('item images should not be broken', () => {
    browser.url('/');
    TestUtils.saveScreenshot('inventory-list', 'broken-image-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('inventory-list', 'broken-image-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    const itemImage = listPage.getItemImage(1);
    expect(itemImage.getAttribute('naturalWidth')).toBeGreaterThan(0);
  });

  it('sort should readjust item list order', () => {
    browser.url('/');
    TestUtils.saveScreenshot('inventory-list', 'list-sort-1-initial-load');

    const loginPage = new LoginPage();
    const listPage = new InventoryListPage();
    loginPage.loginWithStandardUser();
    TestUtils.saveScreenshot('inventory-list', 'list-sort-2-login-complete');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');

    const preSortArray = listPage.getItemPriceArray();

    // We make a copy of this array using concat() since sort() mutates in place
    const sortedPreSortArray = preSortArray.concat().sort(function(a,b) {
          return a - b;
    });

    // Make sure that our arrays differ before we sort by price
    expect(preSortArray).not.toEqual(sortedPreSortArray);

    const sortDropdown = listPage.getSortDropdown();
    sortDropdown.selectByAttribute('value', 'lohi');
    TestUtils.saveScreenshot('inventory-list', 'list-sort-3-sort-option-selected');

    // Now make sure we sorted by price, lowest to highest
    const postSortArray = listPage.getItemPriceArray();

    // We make a copy of this array using concat() since sort() mutates in place
    const sortedPostSortArray = postSortArray.concat().sort(function(a,b) {
          return a - b;
    });

    // Make sure that our arrays now match exactly (i.e. sorting by price changed nothing
    // because it was already sorted by price)
    expect(postSortArray).toEqual(sortedPostSortArray);
  });
});