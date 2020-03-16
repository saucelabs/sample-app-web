import CartOverview from '../page-objects/CartOverview';
import CheckoutPersonalInfo from '../page-objects/CheckoutPersonalInfo';
import CheckoutOverview from '../page-objects/CheckoutOverview';
import {PERSONAL_INFO} from "../configs/e2eConstants";
import {prepareEnvironment} from '../helpers';

describe('Checkout - Personal info', () => {
    beforeEach(() => {
        prepareEnvironment('/checkout-step-one.html');
        CheckoutPersonalInfo.waitForIsDisplayed();
    });

    it('should validate that we can continue shopping', () => {
        // It doesn't matter which error we check here, all error states should have been tested in a UT
        // Reason for selecting this one is that it triggers multiple fields and thus triggers the state
        CheckoutPersonalInfo.submitPersonalInfo(PERSONAL_INFO.NO_POSTAL_CODE);

        expect(CheckoutPersonalInfo.waitForIsDisplayed()).toEqual(
            true,
            'Error message is shown, this is not correct',
        );

        // I'm not validating the error message here because that's content and should be a UT
    });

    it('should validate that we can cancel the first checkout', () => {
        expect(CartOverview.isDisplayed()).toEqual(
            false,
            'Cart screen is already visible'
        );

        CheckoutPersonalInfo.cancelCheckout();

        expect(CartOverview.waitForIsDisplayed()).toEqual(
            true,
            'Cart content screen is still not visible'
        );
    });

    it('should be able to continue the checkout', () => {
        CheckoutPersonalInfo.submitPersonalInfo(PERSONAL_INFO.STANDARD);

        expect(CheckoutOverview.waitForIsDisplayed()).toEqual(
            true,
            'Checkout page two is still not visible'
        );
    });
});
