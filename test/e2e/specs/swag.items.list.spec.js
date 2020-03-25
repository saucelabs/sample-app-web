import AppHeaderPage from '../page-objects/AppHeaderPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import SwagDetailsPage from '../page-objects/SwagDetailsPage';
import {setTestContext} from '../helpers';
import {LOGIN_USERS, PAGES} from "../configs/e2eConstants";

describe('Swag items list', () => {
    beforeEach(() => {
        setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
        SwagOverviewPage.waitForIsDisplayed();
    });

    it('should validate that all products are present', () => {
        expect(SwagOverviewPage.getAmount()).toEqual(
            6,
            'Amount of items was not equal to 6',
        );
    });

    it('should validate that the details of a product can be opened', () => {
        const product = 'Sauce Labs Backpack';

        SwagOverviewPage.openSwagDetails(product);

        expect(SwagDetailsPage.waitForIsDisplayed()).toEqual(
            true,
            'Swag Item detail page was not shown',
        );

        expect(SwagDetailsPage.getText()).toContain(
            product,
            'Swag Item detail page did not show the right text',
        );
    });

    it('should validate that a product can be added to a cart', () => {
        expect(AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );

        // Add an swag to the cart
        SwagOverviewPage.addSwagToCart(0);

        expect(AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        );
    });
});
