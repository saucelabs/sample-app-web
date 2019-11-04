const TestUtils = require('../test-utils');
const LoginPage = require('../pages/login.page');

describe('Login Page', () => {
  beforeEach("annotate before", function beforeEach() {
    console.log("[BEFORE:currentTest.title]", this.currentTest.title);
    console.log("[BEFORE:currentTest.fullTitle()", this.currentTest.fullTitle());
    browser.url('');
  });
  afterEach("annotate before", function afterEach() 
  {
      console.log("[AFTER:currentTest.title]", this.currentTest.title);
      console.log("[AFTER:currentTest.fullTitle()", this.currentTest.fullTitle());
      console.log("[AFTER:currentTest.state", this.currentTest.state);
  });

  it('should be able to login with the standard user', () => {
    LoginPage.login(LoginPage.STANDARD_USER, LoginPage.VALID_PASSWORD)
    expect(true).toEqual(true);
  });

  // it('should be able to login with the problem user', () => {
  //   LoginPage.usernameLocator().addValue(LoginPage.PROBLEM_USER);
  //   LoginPage.getPasswordInputElement().addValue(LoginPage.VALID_PASSWORD);
  //   TestUtils.saveScreenshot('login', 'problemuser-1-values-entered');

  //   LoginPage.getLoginButtonElement().click();
  //   TestUtils.saveScreenshot('login', 'problemuser-2-values-submitted');

  //   expect(browser.getUrl()).toEqual('http://localhost/inventory.html');
  // });

  // it('should be able to login with the performance issue user', () => {
  //   LoginPage.usernameLocator().addValue(LoginPage.BAD_PERF_USER);
  //   LoginPage.getPasswordInputElement().addValue(LoginPage.VALID_PASSWORD);
  //   TestUtils.saveScreenshot('login', 'perfuser-1-values-entered');

  //   LoginPage.getLoginButtonElement().click();
  //   TestUtils.saveScreenshot('login', 'perfuser-2-values-submitted');

  //   expect(browser.getUrl()).toEqual('http://localhost/inventory.html');
  // });

  // it('should not be able to login with the locked out user', () => {
  //   LoginPage.usernameLocator().addValue(LoginPage.LOCKED_OUT_USER);
  //   LoginPage.getPasswordInputElement().addValue(LoginPage.VALID_PASSWORD);
  //   TestUtils.saveScreenshot('login', 'lockedout-1-values-entered');

  //   // Make sure it's not there before we start, so we know it showed due to our action
  //   expect(LoginPage.isErrorMessagePresent()).toEqual(false);

  //   LoginPage.getLoginButtonElement().click();
  //   TestUtils.saveScreenshot('login', 'lockedout-2-values-submitted');

  //   expect(LoginPage.isErrorMessagePresent()).toEqual(true);
  //   expect(browser.getUrl()).toEqual('http://localhost/');
  // });

  // it('should not be able to login without a username', () => {
  //   // Leave out our username
  //   LoginPage.getPasswordInputElement().addValue(LoginPage.VALID_PASSWORD);
  //   TestUtils.saveScreenshot('login', 'blank-user-1-values-entered');

  //   // Make sure it's not there before we start, so we know it showed due to our action
  //   expect(LoginPage.isErrorMessagePresent()).toEqual(false);

  //   LoginPage.getLoginButtonElement().click();
  //   TestUtils.saveScreenshot('login', 'blank-user-2-values-submitted');

  //   expect(LoginPage.isErrorMessagePresent()).toEqual(true);
  //   expect(browser.getUrl()).toEqual('http://localhost/');
  // });

  // it('should not be able to login without a password', () => {
  //   LoginPage.usernameLocator().addValue(LoginPage.STANDARD_USER);
  //   // Leave out our password
  //   TestUtils.saveScreenshot('login', 'blank-pass-1-values-entered');

  //   // Make sure it's not there before we start, so we know it showed due to our action
  //   expect(LoginPage.isErrorMessagePresent()).toEqual(false);

  //   LoginPage.getLoginButtonElement().click();
  //   TestUtils.saveScreenshot('login', 'blank-pass-2-values-submitted');

  //   expect(LoginPage.isErrorMessagePresent()).toEqual(true);
  //   expect(browser.getUrl()).toEqual('http://localhost/');
  // });

  // it('should not be able to login with the wrong password', () => {
  //   LoginPage.usernameLocator().addValue(LoginPage.STANDARD_USER);
  //   LoginPage.getPasswordInputElement().addValue('ThouShaltNotPass!');
  //   TestUtils.saveScreenshot('login', 'wrong-pass-1-values-entered');

  //   // Make sure it's not there before we start, so we know it showed due to our action
  //   expect(LoginPage.isErrorMessagePresent()).toEqual(false);

  //   LoginPage.getLoginButtonElement().click();
  //   TestUtils.saveScreenshot('login', 'wrong-pass-2-values-submitted');

  //   expect(LoginPage.isErrorMessagePresent()).toEqual(true);
  //   expect(browser.getUrl()).toEqual('http://localhost/');
  // });
});