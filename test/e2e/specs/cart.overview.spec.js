import AppHeader from '../page-objects/AppHeader';
import SwagOverview from '../page-objects/SwagOverview';
import CartOverview from '../page-objects/CartOverview';
import CheckoutPersonalInfo from '../page-objects/CheckoutPersonalInfo';
import {prepareEnvironment} from '../helpers';

describe('Cart', () => {
    it('should validate that we can continue shopping', () => {
        prepareEnvironment('/cart.html');

        CartOverview.waitForIsDisplayed();

        // Actual test starts here
        expect(SwagOverview.isDisplayed()).toEqual(
            false,
            'Inventory screen is already visible'
        );

        CartOverview.continueShopping();

        expect(SwagOverview.waitForIsDisplayed()).toEqual(
            true,
            'Inventory screen is still not visible'
        );
    });

    it('should validate that we can go from the cart to the checkout page', () => {
        // Prepare the environment
        browser.url('');
        browser.execute('sessionStorage.setItem("session-username", "standard_user");');
        browser.url('/cart.html');
        CartOverview.waitForIsDisplayed();

        // Actual test starts here
        expect(CheckoutPersonalInfo.isDisplayed()).toEqual(
            false,
            'Inventory screen is already visible'
        );

        CartOverview.goToCheckout();

        expect(CheckoutPersonalInfo.waitForIsDisplayed()).toEqual(
            true,
            'Inventory screen is still not visible'
        );
    });

    it('should validate that a product can be removed from the cart', () => {
        prepareEnvironment('/cart.html', [4]);
        CartOverview.waitForIsDisplayed();

        // Actual test starts here
        expect(AppHeader.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        );
        expect(CartOverview.getSwagAmount()).toEqual(
            1,
            'The amount of items in the cart overview is not equal to 1',
        );

        CartOverview.removeSwag(0);

        expect(AppHeader.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );

        expect(CartOverview.getSwagAmount()).toEqual(
            0,
            'The amount of items in the cart overview is not equal to 1',
        );
    });
});
