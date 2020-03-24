import CheckoutCompletePage from '../page-objects/CheckoutCompletePage';
import {prepareEnvironment} from '../helpers';

describe('Checkout - Complete', () => {
    beforeEach(() => {
        prepareEnvironment('/checkout-complete.html');
        CheckoutCompletePage.waitForIsDisplayed();
    });

    it('should be able to test loading of login page', () => {
        expect(CheckoutCompletePage.waitForIsDisplayed()).toEqual(
            true,
            'Checkout complete page was not shown',
        );
    });
});
