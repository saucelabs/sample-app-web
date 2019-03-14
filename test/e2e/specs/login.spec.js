const TestUtils = require('../test-utils');
const LoginPage = require('../pages/login.page');

describe('Login', () => {
  beforeEach(() => {
    browser.url('/');
  });

  it('should be able to login with the standard user', () => {
    LoginPage.getUsernameInputElement().addValue(LoginPage.STANDARD_USER);
    LoginPage.getPasswordInputElement().addValue(LoginPage.VALID_PASSWORD);
    TestUtils.saveScreenshot('login', 'standarduser-1-values-entered');

    LoginPage.getLoginButtonElement().click();
    TestUtils.saveScreenshot('login', 'standarduser-2-values-submitted');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');
  });

  it('should be able to login with the problem user', () => {
    LoginPage.getUsernameInputElement().addValue(LoginPage.PROBLEM_USER);
    LoginPage.getPasswordInputElement().addValue(LoginPage.VALID_PASSWORD);
    TestUtils.saveScreenshot('login', 'problemuser-1-values-entered');

    LoginPage.getLoginButtonElement().click();
    TestUtils.saveScreenshot('login', 'problemuser-2-values-submitted');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');
  });

  it('should be able to login with the performance issue user', () => {
    LoginPage.getUsernameInputElement().addValue(LoginPage.BAD_PERF_USER);
    LoginPage.getPasswordInputElement().addValue(LoginPage.VALID_PASSWORD);
    TestUtils.saveScreenshot('login', 'perfuser-1-values-entered');

    LoginPage.getLoginButtonElement().click();
    TestUtils.saveScreenshot('login', 'perfuser-2-values-submitted');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html');
  });

  it('should not be able to login with the locked out user', () => {
    LoginPage.getUsernameInputElement().addValue(LoginPage.LOCKED_OUT_USER);
    LoginPage.getPasswordInputElement().addValue(LoginPage.VALID_PASSWORD);
    TestUtils.saveScreenshot('login', 'lockedout-1-values-entered');

    // Make sure it's not there before we start, so we know it showed due to our action
    expect(LoginPage.isErrorMessagePresent()).toEqual(false);

    LoginPage.getLoginButtonElement().click();
    TestUtils.saveScreenshot('login', 'lockedout-2-values-submitted');

    expect(LoginPage.isErrorMessagePresent()).toEqual(true);
    expect(browser.getUrl()).toEqual('http://localhost/');
  });

  it('should not be able to login without a username', () => {
    // Leave out our username
    LoginPage.getPasswordInputElement().addValue(LoginPage.VALID_PASSWORD);
    TestUtils.saveScreenshot('login', 'blank-user-1-values-entered');

    // Make sure it's not there before we start, so we know it showed due to our action
    expect(LoginPage.isErrorMessagePresent()).toEqual(false);

    LoginPage.getLoginButtonElement().click();
    TestUtils.saveScreenshot('login', 'blank-user-2-values-submitted');

    expect(LoginPage.isErrorMessagePresent()).toEqual(true);
    expect(browser.getUrl()).toEqual('http://localhost/');
  });

  it('should not be able to login without a password', () => {
    LoginPage.getUsernameInputElement().addValue(LoginPage.STANDARD_USER);
    // Leave out our password
    TestUtils.saveScreenshot('login', 'blank-pass-1-values-entered');

    // Make sure it's not there before we start, so we know it showed due to our action
    expect(LoginPage.isErrorMessagePresent()).toEqual(false);

    LoginPage.getLoginButtonElement().click();
    TestUtils.saveScreenshot('login', 'blank-pass-2-values-submitted');

    expect(LoginPage.isErrorMessagePresent()).toEqual(true);
    expect(browser.getUrl()).toEqual('http://localhost/');
  });

  it('should not be able to login with the wrong password', () => {
    LoginPage.getUsernameInputElement().addValue(LoginPage.STANDARD_USER);
    LoginPage.getPasswordInputElement().addValue('ThouShaltNotPass!');
    TestUtils.saveScreenshot('login', 'wrong-pass-1-values-entered');

    // Make sure it's not there before we start, so we know it showed due to our action
    expect(LoginPage.isErrorMessagePresent()).toEqual(false);

    LoginPage.getLoginButtonElement().click();
    TestUtils.saveScreenshot('login', 'wrong-pass-2-values-submitted');

    expect(LoginPage.isErrorMessagePresent()).toEqual(true);
    expect(browser.getUrl()).toEqual('http://localhost/');
  });
});