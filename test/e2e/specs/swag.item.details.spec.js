import AppHeaderPage from '../page-objects/AppHeaderPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import SwagDetailsPage from '../page-objects/SwagDetailsPage';
import {prepareEnvironment} from '../helpers';

describe('Swag Item Details', () => {
    it('should validate that we can go back from the details to the inventory page', () => {
        // Need to start with the inventory url here to get the correct routing
        prepareEnvironment('/inventory.html');
        browser.url('/inventory-item.html?id=4');
        SwagDetailsPage.waitForIsDisplayed();

        // Actual test starts here
        expect(SwagOverviewPage.isDisplayed()).toEqual(
            false,
            'Inventory screen is already visible'
        );

        SwagDetailsPage.goBack();

        // Actual test starts here
        expect(SwagOverviewPage.waitForIsDisplayed()).toEqual(
            true,
            'Inventory screen is still not visible'
        );
    });

    it('should validate that a product can be added to a cart', () => {
        // Need to start with the inventory url here to get the correct routing
        prepareEnvironment('/inventory.html');
        browser.url('/inventory-item.html?id=4');
        SwagDetailsPage.waitForIsDisplayed();

        // Actual test starts here
        expect(AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );

        // Add an swag to the cart
        SwagDetailsPage.addToCart();

        expect(AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        );
    });

    it('should validate that a product can be removed from the cart', () => {
        // Need to start with the inventory url here to get the correct routing
        prepareEnvironment('/inventory.html', [4]);
        browser.url('/inventory-item.html?id=4');
        SwagDetailsPage.waitForIsDisplayed();

        // Actual test starts here
        expect(AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        );

        SwagDetailsPage.removeFromCart();

        expect(AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );
    });
});
