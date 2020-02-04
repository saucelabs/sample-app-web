class CartPage {

  getCartContentPage() {
    return $('#cart_contents_container');
  }

  getCartItemCount() {
    // We have one remove button per item, so counting the number of remove buttons tells
    // us the number of items in the shopping cart
    return $$('.cart_button').length;
  }

  getRemoveFromCartButton(itemNumber) {
    return $$('.cart_button')[itemNumber];
  }

  getCheckoutButton() {
    return $('.cart_footer .checkout_button');
  }

  getCancelButton() {
    return $('.cart_footer .btn_secondary');
  }
}

module.exports = new CartPage();
