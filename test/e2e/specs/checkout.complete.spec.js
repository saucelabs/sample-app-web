import CheckoutComplete from '../page-objects/CheckoutComplete';
import {prepareEnvironment} from '../helpers';

describe('Checkout - Complete', () => {
    beforeEach(() => {
        prepareEnvironment('/checkout-complete.html');
        CheckoutComplete.waitForIsDisplayed();
    });

    it('should be able to test loading of login page', () => {
        expect(CheckoutComplete.waitForIsDisplayed()).toEqual(
            true,
            'Checkout complete page was not shown',
        );
    });
});
