const TestUtils = require('../test-utils');
const LoginPage = require('../pages/login.page');

describe('Login', () => {
  it('should be able to login with the standard user', () => {
    browser.url('/');
    TestUtils.saveScreenshot('login', 'standarduser-1-initial-load');
    
    const loginPage = new LoginPage();
    loginPage.getUsernameInputElement().addValue(LoginPage.STANDARD_USER);
    loginPage.getPasswordInputElement().addValue(LoginPage.VALID_PASSWORD);
    TestUtils.saveScreenshot('login', 'standarduser-2-values-entered');

    loginPage.getLoginButtonElement().click();
    TestUtils.saveScreenshot('login', 'standarduser-3-values-submitted');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html', 'expected URL mismatch!');
  });

  it('should be able to login with the problem user', () => {
    browser.url('/');
    TestUtils.saveScreenshot('login', 'problemuser-1-initial-load');
    
    const loginPage = new LoginPage();
    loginPage.getUsernameInputElement().addValue(LoginPage.PROBLEM_USER);
    loginPage.getPasswordInputElement().addValue(LoginPage.VALID_PASSWORD);
    TestUtils.saveScreenshot('login', 'problemuser-2-values-entered');

    loginPage.getLoginButtonElement().click();
    TestUtils.saveScreenshot('login', 'problemuser-3-values-submitted');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html', 'expected URL mismatch!');
  });

  it('should be able to login with the performance issue user', () => {
    browser.url('/');
    TestUtils.saveScreenshot('login', 'perfuser-1-initial-load');
    
    const loginPage = new LoginPage();
    loginPage.getUsernameInputElement().addValue(LoginPage.BAD_PERF_USER);
    loginPage.getPasswordInputElement().addValue(LoginPage.VALID_PASSWORD);
    TestUtils.saveScreenshot('login', 'perfuser-2-values-entered');

    loginPage.getLoginButtonElement().click();
    TestUtils.saveScreenshot('login', 'perfuser-3-values-submitted');

    expect(browser.getUrl()).toEqual('http://localhost/inventory.html', 'expected URL mismatch!');
  });

  it('should not be able to login with the locked out user', () => {
    browser.url('/');
    TestUtils.saveScreenshot('login', 'lockedout-1-initial-load');
    
    const loginPage = new LoginPage();
    loginPage.getUsernameInputElement().addValue(LoginPage.LOCKED_OUT_USER);
    loginPage.getPasswordInputElement().addValue(LoginPage.VALID_PASSWORD);
    TestUtils.saveScreenshot('login', 'lockedout-2-values-entered');

    // Make sure it's not there before we start, so we know it showed due to our action
    expect(loginPage.isErrorMessagePresent()).toEqual(false, 'expected error message to be hidden!');

    loginPage.getLoginButtonElement().click();
    TestUtils.saveScreenshot('login', 'lockedout-3-values-submitted');

    expect(loginPage.isErrorMessagePresent()).toEqual(true, 'expected error message to be displayed!');
    expect(browser.getUrl()).toEqual('http://localhost/', 'expected URL mismatch!');
  });

  it('should not be able to login without a username', () => {
    browser.url('/');
    TestUtils.saveScreenshot('login', 'blank-user-1-initial-load');
    
    const loginPage = new LoginPage();
    // Leave out our username
    loginPage.getPasswordInputElement().addValue(LoginPage.VALID_PASSWORD);
    TestUtils.saveScreenshot('login', 'blank-user-2-values-entered');

    // Make sure it's not there before we start, so we know it showed due to our action
    expect(loginPage.isErrorMessagePresent()).toEqual(false, 'expected error message to be hidden!');

    loginPage.getLoginButtonElement().click();
    TestUtils.saveScreenshot('login', 'blank-user-3-values-submitted');

    expect(loginPage.isErrorMessagePresent()).toEqual(true, 'expected error message to be displayed!');
    expect(browser.getUrl()).toEqual('http://localhost/', 'expected URL mismatch!');
  });

  it('should not be able to login without a password', () => {
    browser.url('/');
    TestUtils.saveScreenshot('login', 'blank-pass-1-initial-load');

    const loginPage = new LoginPage();
    loginPage.getUsernameInputElement().addValue(LoginPage.STANDARD_USER);
    // Leave out our password
    TestUtils.saveScreenshot('login', 'blank-pass-2-values-entered');

    // Make sure it's not there before we start, so we know it showed due to our action
    expect(loginPage.isErrorMessagePresent()).toEqual(false, 'expected error message to be hidden!');

    loginPage.getLoginButtonElement().click();
    TestUtils.saveScreenshot('login', 'blank-pass-3-values-submitted');

    expect(loginPage.isErrorMessagePresent()).toEqual(true, 'expected error message to be displayed!');
    expect(browser.getUrl()).toEqual('http://localhost/', 'expected URL mismatch!');
  });

  it('should not be able to login with the wrong password', () => {
    browser.url('/');
    TestUtils.saveScreenshot('login', 'wrong-pass-1-initial-load');

    const loginPage = new LoginPage();
    loginPage.getUsernameInputElement().addValue(LoginPage.STANDARD_USER);
    loginPage.getPasswordInputElement().addValue('ThouShaltNotPass!');
    TestUtils.saveScreenshot('login', 'wrong-pass-2-values-entered');

    // Make sure it's not there before we start, so we know it showed due to our action
    expect(loginPage.isErrorMessagePresent()).toEqual(false, 'expected error message to be hidden!');

    loginPage.getLoginButtonElement().click();
    TestUtils.saveScreenshot('login', 'wrong-pass-3-values-submitted');

    expect(loginPage.isErrorMessagePresent()).toEqual(true, 'expected error message to be displayed!');
    expect(browser.getUrl()).toEqual('http://localhost/', 'expected URL mismatch!');
  });
});