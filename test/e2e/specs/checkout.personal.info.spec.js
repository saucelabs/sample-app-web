import CartSummaryPage from '../page-objects/CartSummaryPage';
import CheckoutPersonalInfoPage from '../page-objects/CheckoutPersonalInfoPage';
import CheckoutSummaryPage from '../page-objects/CheckoutSummaryPage';
import {PERSONAL_INFO} from "../configs/e2eConstants";
import {prepareEnvironment} from '../helpers';

describe('Checkout - Personal info', () => {
    beforeEach(() => {
        prepareEnvironment('/checkout-step-one.html');
        CheckoutPersonalInfoPage.waitForIsDisplayed();
    });

    it('should validate that we can continue shopping', () => {
        // It doesn't matter which error we check here, all error states should have been tested in a UT
        // Reason for selecting this one is that it triggers multiple fields and thus triggers the state
        CheckoutPersonalInfoPage.submitPersonalInfo(PERSONAL_INFO.NO_POSTAL_CODE);

        expect(CheckoutPersonalInfoPage.waitForIsDisplayed()).toEqual(
            true,
            'Error message is shown, this is not correct',
        );

        // I'm not validating the error message here because that's content and should be a UT
    });

    it('should validate that we can cancel the first checkout', () => {
        expect(CartSummaryPage.isDisplayed()).toEqual(
            false,
            'Cart screen is already visible'
        );

        CheckoutPersonalInfoPage.cancelCheckout();

        expect(CartSummaryPage.waitForIsDisplayed()).toEqual(
            true,
            'Cart content screen is still not visible'
        );
    });

    it('should be able to continue the checkout', () => {
        CheckoutPersonalInfoPage.submitPersonalInfo(PERSONAL_INFO.STANDARD);

        expect(CheckoutSummaryPage.waitForIsDisplayed()).toEqual(
            true,
            'Checkout page two is still not visible'
        );
    });
});
