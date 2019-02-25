class InventoryItemPage {

  // NOTE: when the remove-from-cart button is clicked, it becomes the add-to-cart button (and
  // vice versa for add-to-cart -> remove-from-cart)
  getRemoveFromCartButton() {
    return $('.remove-from-cart-button');
  }
  
  getAddToCartButton() {
    return $('.add-to-cart-button');
  }

  getItemTitleText() {
    return $('.inventory_details_name').getText();
  }

  getBackButton() {
    return $('.inventory_details_back_button');
  }
}

module.exports = new InventoryItemPage();