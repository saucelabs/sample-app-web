import LoginPage from '../page-objects/LoginPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import AppHeaderPage from '../page-objects/AppHeaderPage';
import CartSummaryPage from '../page-objects/CartSummaryPage';
import CheckoutPersonalInfoPage from '../page-objects/CheckoutPersonalInfoPage';
import CheckoutSummaryPage from '../page-objects/CheckoutSummaryPage';
import CheckoutCompletePage from '../page-objects/CheckoutCompletePage';
import {LOGIN_USERS, PERSONAL_INFO} from '../configs/e2eConstants';

describe('Full checkout workflow with Sauce Visual (demo)', () => {
  before(function (this: Mocha.Context) {
    const capabilities = browser.capabilities as WebdriverIO.Capabilities & {testobject_device_name?: string};
    const deviceSuffix = capabilities.testobject_device_name ? ` (${capabilities.testobject_device_name})` : '';

    this.test.parent.title = `Full checkout workflow with Sauce Visual (demo) - ${capabilities.browserName} on ${capabilities.platformName}${deviceSuffix}`;
  });

  it('should be able to log in, add a product to the cart, and complete checkout', async () => {
    const product = 'Sauce Labs Backpack';

    // Log in
    await browser.url('');
    await LoginPage.waitForIsShown();
    await browser.sauceVisualCheck('Login page');

    await LoginPage.signIn(LOGIN_USERS.STANDARD);

    await SwagOverviewPage.waitForIsShown();
    await browser.sauceVisualCheck('Inventory page');

    // Add the product to the cart
    await SwagOverviewPage.addSwagToCart(product);
    await browser.sauceVisualCheck('Inventory page - product added to cart');

    // Go to the cart
    await AppHeaderPage.openCart();
    await CartSummaryPage.waitForIsShown();
    await browser.sauceVisualCheck('Cart page');

    // Go through checkout
    await CartSummaryPage.goToCheckout();
    await CheckoutPersonalInfoPage.waitForIsShown();
    await browser.sauceVisualCheck('Checkout - personal info page');

    await CheckoutPersonalInfoPage.submitPersonalInfo(PERSONAL_INFO.STANDARD);

    await CheckoutSummaryPage.waitForIsShown();
    await browser.sauceVisualCheck('Checkout - summary page');

    await CheckoutSummaryPage.finishCheckout();

    // Verify the order completed successfully
    await CheckoutCompletePage.waitForIsShown();
    await browser.sauceVisualCheck('Checkout complete page');

    const results = await browser.sauceVisualResults();
    await expect(results.REJECTED).toEqual(0);
    await expect(results.ERRORED).toEqual(0);
    await expect(results.UNAPPROVED).toEqual(0);
  });
});
