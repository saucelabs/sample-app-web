import AppHeader from '../page-objects/AppHeader';
import SwagOverview from '../page-objects/SwagOverview';
import SwagDetails from '../page-objects/SwagDetails';
import {prepareEnvironment} from '../helpers';

describe('Inventory list', () => {
    beforeEach(() => {
        prepareEnvironment('/inventory.html');
        SwagOverview.waitForIsDisplayed();
    });

    it('should validate that all products are present', () => {
        expect(SwagOverview.getAmount()).toEqual(
            6,
            'Amount of items was not equal to 6',
        );
    });

    it('should validate that the details of a product can be opened', () => {
        const product = 'Sauce Labs Backpack';

        SwagOverview.openSwagDetails(product);

        expect(SwagDetails.waitForIsDisplayed()).toEqual(
            true,
            'Swag Item detail page was not shown',
        );

        expect(SwagDetails.getText()).toContain(
            product,
            'Swag Item detail page did not show the right text',
        );
    });

    it('should validate that a product can be added to a cart', () => {
        expect(AppHeader.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );

        // Add an swag to the cart
        SwagOverview.addSwagToCart(0);

        expect(AppHeader.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        );
    });
});
