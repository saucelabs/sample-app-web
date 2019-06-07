import Base from './base';
import { DEFAULT_TIMEOUT } from '../configs/e2eConstants';

const SCREEN_SELECTOR = '#login_button_container';

class LoginScreen extends Base {
  constructor() {
    super(SCREEN_SELECTOR);
  }

  get screen() {
    return $(SCREEN_SELECTOR);
  }

  get username() {
    return $('#username');
  }

  get password() {
    return $('#password');
  }

  get loginButton() {
    return $('#loginButton');
  }

  get errorMessage() {
    return $('[data-test="error"]');
  }

  /**
   * Sign in
   *
   * @param {object} userDetails
   * @param {string} userDetails.username
   * @param {string} userDetails.password
   */
  signIn(userDetails) {
    const { password, username } = userDetails;

    this.waitForIsDisplayed();
    this.username.addValue(username);
    this.triggerOnChange('#username');
    this.password.addValue(password);
    this.triggerOnChange('#password');

    if (browser.isAndroid) {
      return browser.execute('document.querySelector(\'.btn_action\').click()', []);
    }

    return this.loginButton.click();
  }

  /**
   * Get the text or the error message container
   *
   * @return {string}
   */
  getErrorMessage() {
    this.errorMessage.waitForDisplayed(DEFAULT_TIMEOUT);

    return this.errorMessage.getText();
  }

  /**
   * Check if the error message is displayed
   *
   * @return {boolean}
   */
  isErrorMessageDisplayed() {
    return this.errorMessage.isDisplayed();
  }

  /**
   * Trigger the onChange on an element
   *
   * @param {string} selector the selector
   */
  triggerOnChange(selector) {
    if (browser.isIOS) {
      browser.execute((elementSelector) => {
        var input = document.querySelector(elementSelector);
        var lastValue = '';
        var event = new Event('input', { bubbles: true });
        var tracker = input._valueTracker;
        if (tracker) {
          tracker.setValue(lastValue);
        }
        input.dispatchEvent(event);
      }, selector);
    }
  }
}

export default new LoginScreen();
