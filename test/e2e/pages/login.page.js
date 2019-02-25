class LoginPage {

  getUsernameInputElement() {
    return $('#user-name');
  }

  getPasswordInputElement() {
    return $('#password');
  }

  getLoginButtonElement() {
    return $('input[type=submit]');
  }

  getErrorMessageElement() {
    return $('h3[data-test=error]');
  }

  get STANDARD_USER() {
    return "standard_user";
  }

  get PROBLEM_USER() {
    return "problem_user";
  }

  get LOCKED_OUT_USER() {
    return "locked_out_user";
  }

  get BAD_PERF_USER() {
    return "performance_glitch_user";
  }

  get VALID_PASSWORD() {
    return "secret_sauce";
  }

  /**
   * Check if the error message is displayed
   *
   * @return {boolean}
   */
  isErrorMessagePresent() {
    return this.getErrorMessageElement().isDisplayed();
  }

  loginWithStandardUser() {
    
    // Pull our input fields and plug in the correct values
    
    this.getUsernameInputElement().addValue(this.STANDARD_USER);
    this.getPasswordInputElement().addValue(this.VALID_PASSWORD);
    this.getLoginButtonElement().click();
  }
}

module.exports = new LoginPage();