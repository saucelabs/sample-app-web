class CartPage {

  getCartItemCount() {
    // We have one remove button per item, so counting the number of remove buttons tells
    // us the number of items in the shopping cart
    return $$('.remove-from-cart-button').length;
  }

  getRemoveFromCartButton(itemNumber) {
    return $$('.remove-from-cart-button')[itemNumber];
  }
  
  getCheckoutButton() {
    return $('.cart_checkout_link');
  }

  getCancelButton() {
    return $('.cart_cancel_link');
  }
}

module.exports = CartPage