import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import CheckoutCompletePage from '../page-objects/CheckoutCompletePage';
import CheckoutSummaryPage from '../page-objects/CheckoutSummaryPage';
import {setTestContext} from '../helpers';
import {LOGIN_USERS, PAGES, PRODUCTS} from "../configs/e2eConstants";

describe('Checkout - Summary', () => {
    beforeEach(() => {
        setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CHECKOUT_SUMMARY,
            products: [PRODUCTS.BACKPACK],
        });
        CheckoutSummaryPage.waitForIsDisplayed();
    });

    it('should validate that we can continue shopping', () => {
        // It doesn't matter which error we check here, all error states should have been tested in a UT
        // Reason for selecting this one is that it triggers multiple fields and thus triggers the state
        CheckoutSummaryPage.finishCheckout();

        expect(CheckoutCompletePage.waitForIsDisplayed()).toEqual(
            true,
            'The checkout complete page is still not shown',
        );
    });

    it('should validate that we can cancel checkout and go to the inventory page', () => {
        CheckoutSummaryPage.cancelCheckout();

        expect(SwagOverviewPage.waitForIsDisplayed()).toEqual(
            true,
            'Inventory screen is still not visible'
        );
    });

    it('should validate that we have 1 product in our checkout overview', () => {
        expect(CheckoutSummaryPage.getSwagAmount()).toEqual(
            1,
            'Not the correct items are shown in the checkout overview page'
        );
    });
});
