import AppHeaderPage from '../page-objects/AppHeaderPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import CartSummaryPage from '../page-objects/CartSummaryPage';
import CheckoutPersonalInfoPage from '../page-objects/CheckoutPersonalInfoPage';
import {prepareEnvironment} from '../helpers';

describe('Cart', () => {
    it('should validate that we can continue shopping', () => {
        prepareEnvironment('/cart.html');

        CartSummaryPage.waitForIsDisplayed();

        // Actual test starts here
        expect(SwagOverviewPage.isDisplayed()).toEqual(
            false,
            'Inventory screen is already visible'
        );

        CartSummaryPage.continueShopping();

        expect(SwagOverviewPage.waitForIsDisplayed()).toEqual(
            true,
            'Inventory screen is still not visible'
        );
    });

    it('should validate that we can go from the cart to the checkout page', () => {
        // Prepare the environment
        browser.url('');
        browser.execute('sessionStorage.setItem("session-username", "standard_user");');
        browser.url('/cart.html');
        CartSummaryPage.waitForIsDisplayed();

        // Actual test starts here
        expect(CheckoutPersonalInfoPage.isDisplayed()).toEqual(
            false,
            'Inventory screen is already visible'
        );

        CartSummaryPage.goToCheckout();

        expect(CheckoutPersonalInfoPage.waitForIsDisplayed()).toEqual(
            true,
            'Inventory screen is still not visible'
        );
    });

    it('should validate that a product can be removed from the cart', () => {
        prepareEnvironment('/cart.html', [4]);
        CartSummaryPage.waitForIsDisplayed();

        // Actual test starts here
        expect(AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        );
        expect(CartSummaryPage.getSwagAmount()).toEqual(
            1,
            'The amount of items in the cart overview is not equal to 1',
        );

        CartSummaryPage.removeSwag(0);

        expect(AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );

        expect(CartSummaryPage.getSwagAmount()).toEqual(
            0,
            'The amount of items in the cart overview is not equal to 1',
        );
    });
});
