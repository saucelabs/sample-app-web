class CheckoutInfoPage {

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
    return $('.cart_checkout_link');
  }

  getCancelButton() {
    return $('.cart_cancel_link');
  }
}

module.exports = CheckoutInfoPage