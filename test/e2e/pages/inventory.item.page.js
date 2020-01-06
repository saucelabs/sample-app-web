class InventoryItemPage {

  getItemDetailsPage() {
    return $('#inventory_item_container');
  }

  // NOTE: when the remove-from-cart button is clicked, it becomes the add-to-cart button (and
  // vice versa for add-to-cart -> remove-from-cart)
  getRemoveFromCartButton() {
    return $('.btn_secondary.btn_inventory');
  }

  getAddToCartButton() {
    return $('.btn_primary.btn_inventory');
  }

  getItemTitleText() {
    return $('.inventory_details_name').getText();
  }

  getBackButton() {
    return $('.inventory_details_back_button');
  }
}

module.exports = new InventoryItemPage();
