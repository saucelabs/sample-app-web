class HeaderPage {

  getShoppingCartButton() {
    return $('.shopping_cart_link');
  }

  getShoppingCartCount() {
    const cartBadge = $('.shopping_cart_badge');
    
    if (cartBadge.isExisting()) {
      return cartBadge.getText();
    }

    return '';
  }

  getSliderMenuButton() {
    return $('.bm-burger-button').$('button');
  }
}

module.exports = HeaderPage