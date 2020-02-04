const TestUtils = require('../test-utils');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');
const SliderMenuPage = require('../pages/slider-menu.page');
const InventoryListPage = require('../pages/inventory.list.page');
const InventoryItemPage = require('../pages/inventory.item.page');

describe('Inventory List', () => {

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

  it('should land on inventory list page after login', () => {
    TestUtils.saveScreenshot('inventory-list', 'landing-list-1-initial-load');
    expect(InventoryListPage.getInventoryListPage().waitForDisplayed(15000)).toEqual(true);
  });

  it('should be able to open and close the slider menu', () => {
    expect(SliderMenuPage.isSliderMenuPresent()).toEqual(false);

    HeaderPage.getSliderMenuButton().click();
    TestUtils.saveScreenshot('inventory-list', 'list-menu-1-slider-menu-click');

    SliderMenuPage.waitForSliderMenuVisible();
    TestUtils.saveScreenshot('inventory-list', 'list-menu-2-slider-menu-open');
    expect(SliderMenuPage.isSliderMenuPresent()).toEqual(true);

    SliderMenuPage.getSliderMenuOverlay().click();
    SliderMenuPage.waitForSliderMenuHidden();
    TestUtils.saveScreenshot('inventory-list', 'list-menu-3-slider-menu-closed');
    expect(SliderMenuPage.isSliderMenuPresent()).toEqual(false);
  });

  it('should be able to navigate to shopping cart page', () => {
    HeaderPage.getShoppingCartButton().click();
    TestUtils.saveScreenshot('inventory-list', 'list-cart-1-cart-click');
    expect(browser.getUrl()).toEqual('http://localhost:3000/cart.html');
  });

  it('should be able to add items to cart and remove items from cart', () => {
    InventoryListPage.addFirstUnaddedItemToCart();
    TestUtils.saveScreenshot('inventory-list', 'add-cart-1-add-to-cart-click');

    expect(HeaderPage.getShoppingCartCount()).toEqual(1);

    InventoryListPage.addFirstUnaddedItemToCart();
    TestUtils.saveScreenshot('inventory-list', 'add-cart-2-second-add-to-cart-click');

    expect(HeaderPage.getShoppingCartCount()).toEqual(2);

    InventoryListPage.getRemoveFromCartButton(0).click();
    TestUtils.saveScreenshot('inventory-list', 'add-cart-3-remove-from-cart-click');

    expect(HeaderPage.getShoppingCartCount()).toEqual(1);
  });

  it('should be able to navigate to item page via item title', () => {
    InventoryListPage.getItemTitleLink(1).click();
    TestUtils.saveScreenshot('inventory-list', 'item-title-1-item-title-link-click');

    expect(InventoryItemPage.getItemDetailsPage().waitForDisplayed(15000)).toEqual(true);
  });

  it('should be able to navigate to item page via item image', () => {
    // Choose the second image in the list - if the image is broken, then the click lands on the 'peek'
    // element which is actually an improper failure (the link still works if the image is a 404)
    InventoryListPage.getItemImageLink(1).click();
    TestUtils.saveScreenshot('inventory-list', 'item-image-1-item-title-link-click');

    expect(InventoryItemPage.getItemDetailsPage().waitForDisplayed(15000)).toEqual(true);
  });

  it('item images should not be broken', () => {
    TestUtils.saveScreenshot('inventory-list', 'broken-image-1-initial-load');
    const itemImage = InventoryListPage.getItemImage(1);
    expect(itemImage.getAttribute('naturalWidth')).toBeGreaterThan(0);
  });

  it('sort should readjust item list order', () => {
    const preSortArray = InventoryListPage.getItemPriceArray();

    // We make a copy of this array using concat() since sort() mutates in place
    const sortedPreSortArray = preSortArray.concat().sort(function(a,b) {
          return a - b;
    });

    // Make sure that our arrays differ before we sort by price
    expect(preSortArray).not.toEqual(sortedPreSortArray);

    const sortDropdown = InventoryListPage.getSortDropdown();
    sortDropdown.selectByAttribute('value', 'lohi');
    TestUtils.saveScreenshot('inventory-list', 'list-sort-1-sort-option-selected');

    // Now make sure we sorted by price, lowest to highest
    const postSortArray = InventoryListPage.getItemPriceArray();

    // We make a copy of this array using concat() since sort() mutates in place
    const sortedPostSortArray = postSortArray.concat().sort(function(a,b) {
          return a - b;
    });

    // Make sure that our arrays now match exactly (i.e. sorting by price changed nothing
    // because it was already sorted by price)
    expect(postSortArray).toEqual(sortedPostSortArray);
  });
});
