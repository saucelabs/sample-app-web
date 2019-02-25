class SliderMenuPage {

  getSliderMenuOverlay() {
    return $('.bm-overlay');
  }

  getSliderMenuInventoryLink() {
    return $('#inventory_sidebar_link');
  }

  getSliderMenuAboutLink() {
    return $('#about_sidebar_link');
  }

  getSliderMenuLogoutLink() {
    return $('#logout_sidebar_link');
  }

  getSliderMenuResetLink() {
    return $('#reset_sidebar_link');
  }
  
  waitForSliderMenuVisible() {
    return this.getSliderMenuAboutLink().waitForDisplayed(5000);
  }

  waitForSliderMenuHidden() {
    // Second argument as true means wait for not displayed.
    // Not super-intuitive, but that's the API so that's what we're calling.
    return this.getSliderMenuAboutLink().waitForDisplayed(5000, true);
  }

  isSliderMenuPresent() {    
    return this.getSliderMenuAboutLink().isDisplayed();
  }
}

module.exports = new SliderMenuPage();