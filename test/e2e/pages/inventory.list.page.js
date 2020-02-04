class InventoryListPage {

  // NOTE: when a remove-from-cart button is clicked, it becomes an add-to-cart button (and
  // vice versa for add-to-cart -> remove-from-cart) - this means that, on every button click,
  // the number of buttons of each type on the page changes. So, for example, if you have:
  //
  // * 2 items in the cart (which means 2 remove-from-cart buttons)
  // * 6 items total in the list (4 of which are not in the cart, so 4 add-to-cart buttons)
  //
  // Then when you click add-to-cart on some item you will then have:
  //
  // * 3 remove-from-cart buttons
  // * 3 add-to-cart buttons
  //
  // So getAddToCartButton(0) is always guaranteed to choose the first not-in-cart item in
  // the list

  getInventoryListPage() {
    return $('#inventory_container');
  }

  getRemoveFromCartButton(itemNumber) {
    return $$('.btn_secondary.btn_inventory')[itemNumber];
  }

  getAddToCartButton(itemNumber) {
    return $$('.btn_primary.btn_inventory')[itemNumber];
  }

  getItemTitleLink(itemNumber) {
    return $$('.inventory_item_label a')[itemNumber];
  }

  getItemTitleText(itemNumber) {
    return $$('.inventory_item_name')[itemNumber].getText();
  }

  getItemImageLink(itemNumber) {
    return $$('div.inventory_item_img')[itemNumber];
  }

  getItemImage(itemNumber) {
    return $$('img.inventory_item_img')[itemNumber];
  }

  getSortDropdown() {
    // The item link is the parent <a> around the img with this classname
    return $('.product_sort_container');
  }

  getItemPriceArray() {
    // First, get all of the prices in the list
    const allPrices = $$('div.inventory_item_price');
    var retArray = [];

    allPrices.forEach(function(curElem) {
        var curPrice = curElem.getText();
        curPrice = curPrice.substring(1);

        // Our price string always starts with $ - trim it off and make this a number
        retArray.push(parseFloat(curPrice));
    });

    return retArray;
  }

  addFirstUnaddedItemToCart() {
    this.getAddToCartButton(0).click();
  }
}

module.exports = new InventoryListPage();
