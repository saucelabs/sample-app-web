import SwagOverview from '../page-objects/SwagOverview';
import CheckoutComplete from '../page-objects/CheckoutComplete';
import CheckoutOverview from '../page-objects/CheckoutOverview';
import {prepareEnvironment} from '../helpers';

describe('Checkout - Overview', () => {
    beforeEach(() => {
        prepareEnvironment('/checkout-step-two.html', [4]);
        CheckoutOverview.waitForIsDisplayed();
    });

    it('should validate that we can continue shopping', () => {
        // It doesn't matter which error we check here, all error states should have been tested in a UT
        // Reason for selecting this one is that it triggers multiple fields and thus triggers the state
        CheckoutOverview.finishCheckout();

        expect(CheckoutComplete.waitForIsDisplayed()).toEqual(
            true,
            'The checkout complete page is still not shown',
        );
    });

    it('should validate that we can cancel checkout and go to the inventory page', () => {
        CheckoutOverview.cancelCheckout();

        expect(SwagOverview.waitForIsDisplayed()).toEqual(
            true,
            'Inventory screen is still not visible'
        );
    });

    it('should validate that we have 1 product in our checkout overview', () => {
        expect(CheckoutOverview.getSwagAmount()).toEqual(
            1,
            'Not the correct items are shown in the checkout overview page'
        );
    });
});
