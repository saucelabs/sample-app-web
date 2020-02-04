class CheckoutInfoPage {

  getCheckoutInfoPage() {
    return $('#checkout_info_container');
  }

  getFirstNameInput() {
    return $('#first-name');
  }

  getLastNameInput() {
    return $('#last-name');
  }

  getPostalCodeInput() {
    return $('#postal-code');
  }

  getContinueButton() {
    return $('.btn_primary.cart_button');
  }

  getCancelButton() {
    return $('.cart_cancel_link');
  }
}

module.exports = new CheckoutInfoPage();
