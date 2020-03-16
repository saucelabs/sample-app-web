import AppHeader from '../page-objects/AppHeader';
import SwagOverview from '../page-objects/SwagOverview';
import SwagDetails from '../page-objects/SwagDetails';
import {prepareEnvironment} from '../helpers';

describe('Swag Item Details', () => {
    it('should validate that we can go back from the details to the inventory page', () => {
        // Need to start with the inventory url here to get the correct routing
        prepareEnvironment('/inventory.html');
        browser.url('/inventory-item.html?id=4');
        SwagDetails.waitForIsDisplayed();

        // Actual test starts here
        expect(SwagOverview.isDisplayed()).toEqual(
            false,
            'Inventory screen is already visible'
        );

        SwagDetails.goBack();

        // Actual test starts here
        expect(SwagOverview.waitForIsDisplayed()).toEqual(
            true,
            'Inventory screen is still not visible'
        );
    });

    it('should validate that a product can be added to a cart', () => {
        // Need to start with the inventory url here to get the correct routing
        prepareEnvironment('/inventory.html');
        browser.url('/inventory-item.html?id=4');
        SwagDetails.waitForIsDisplayed();

        // Actual test starts here
        expect(AppHeader.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );

        // Add an swag to the cart
        SwagDetails.addToCart();

        expect(AppHeader.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        );
    });

    it('should validate that a product can be removed from the cart', () => {
        // Need to start with the inventory url here to get the correct routing
        prepareEnvironment('/inventory.html', [4]);
        browser.url('/inventory-item.html?id=4');
        SwagDetails.waitForIsDisplayed();

        // Actual test starts here
        expect(AppHeader.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        );

        SwagDetails.removeFromCart();

        expect(AppHeader.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );
    });
});
