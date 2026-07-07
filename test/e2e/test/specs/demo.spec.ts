import LoginPage from '../page-objects/LoginPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import AppHeaderPage from '../page-objects/AppHeaderPage';
import CartSummaryPage from '../page-objects/CartSummaryPage';
import CheckoutPersonalInfoPage from '../page-objects/CheckoutPersonalInfoPage';
import CheckoutSummaryPage from '../page-objects/CheckoutSummaryPage';
import CheckoutCompletePage from '../page-objects/CheckoutCompletePage';
import {LOGIN_USERS, PERSONAL_INFO} from '../configs/e2eConstants';

describe('Full checkout workflow (demo)', () => {
  it('should be able to log in, add a product to the cart, and complete checkout', async () => {
    const product = 'Sauce Labs Backpack';

    // Log in
    await browser.url('');
    await expect(await LoginPage.waitForIsShown()).toBeTruthy();

    await LoginPage.signIn(LOGIN_USERS.STANDARD);

    await expect(await SwagOverviewPage.waitForIsShown()).toBeTruthy();
    await expect(await SwagOverviewPage.getAmount()).toEqual(6);

    // Inspect the product before adding it, so we can compare it later on
    const overviewText = await SwagOverviewPage.getSwagText(product);
    await expect(overviewText).toContain(product);
    await expect(overviewText).toContain('carry.allTheThings()');
    await expect(overviewText).toContain('$29.99');

    // Add the product to the cart
    await expect(await AppHeaderPage.getCartAmount()).toEqual('');

    await SwagOverviewPage.addSwagToCart(product);

    await expect(await AppHeaderPage.getCartAmount()).toEqual('1');

    // Go to the cart
    await AppHeaderPage.openCart();

    await expect(await CartSummaryPage.waitForIsShown()).toBeTruthy();
    await expect(await CartSummaryPage.getSwagAmount()).toEqual(1);

    const cartText = await CartSummaryPage.getSwagText(product);
    await expect(cartText).toContain(product);
    await expect(cartText).toContain('$29.99');

    // Go through checkout
    await CartSummaryPage.goToCheckout();

    await expect(await CheckoutPersonalInfoPage.waitForIsShown()).toBeTruthy();

    await CheckoutPersonalInfoPage.submitPersonalInfo(PERSONAL_INFO.STANDARD);

    await expect(await CheckoutSummaryPage.waitForIsShown()).toBeTruthy();
    await expect(await CheckoutSummaryPage.getSwagAmount()).toEqual(1);

    await expect(await (await CheckoutSummaryPage.title(product)).getText()).toEqual(product);
    await expect(await (await CheckoutSummaryPage.description(product)).getText()).toContain('carry.allTheThings()');
    await expect(await (await CheckoutSummaryPage.price(product)).getText()).toEqual('$29.99');

    await CheckoutSummaryPage.finishCheckout();

    // Verify the order completed successfully
    await expect(await CheckoutCompletePage.waitForIsShown()).toBeTruthy();
    await expect(await CheckoutCompletePage.getHeaderText()).toEqual('Thank you for your order!');
    await expect(await CheckoutCompletePage.getCompleteText()).toContain('Your order has been dispatched');
  });
});
