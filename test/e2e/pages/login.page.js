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
    
    getUsernameInputElement().addValue(LoginPage.STANDARD_USER);
    getPasswordInputElement().addValue(LoginPage.VALID_PASSWORD);
    getLoginButtonElement().click();
  }
}

// Assign our users and passwords to static fields now
LoginPage.STANDARD_USER = "standard_user";
LoginPage.PROBLEM_USER = "problem_user";
LoginPage.LOCKED_OUT_USER = "locked_out_user";
LoginPage.BAD_PERF_USER = "performance_glitch_user";

LoginPage.VALID_PASSWORD = "secret_sauce";

module.exports = LoginPage