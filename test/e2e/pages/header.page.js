class HeaderPage {

  getShoppingCartButton() {
    return $('.shopping_cart_link');
  }

  getShoppingCartCount() {
    const cartBadge = $('.shopping_cart_badge');
    
    if (cartBadge.isExisting()) {
      return parseInt(cartBadge.getText());
    }

    return 0;
  }

  getSliderMenuButton() {
    return $('.bm-burger-button').$('button');
  }
}

module.exports = new HeaderPage();