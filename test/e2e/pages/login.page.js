class LoginPage {
  get usernameField() {
    return $('#user-name');
  }
  get passwordField() {
    return $('#password');
  }
  usernameLocator() {
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
    this.usernameLocator().addValue(this.STANDARD_USER);
    this.getPasswordInputElement().addValue(this.VALID_PASSWORD);
    this.getLoginButtonElement().click();
  }
  login(userName, password){
    this.usernameField.addValue(userName);
    this.passwordField.addValue(password);
  }
}

module.exports = new LoginPage();