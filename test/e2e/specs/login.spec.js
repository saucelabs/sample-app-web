import { LOGIN_USERS } from '../configs/e2eConstants';
import LoginPage from '../page-objects/LoginPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';

describe('LoginPage', () => {
    beforeEach(() => {
        browser.url('');
        LoginPage.waitForIsDisplayed();
    });

    it('should be able to test loading of login page', () => {
        expect(LoginPage.waitForIsDisplayed()).toEqual(
            true,
            'LoginPage page was not shown',
        );
    });

    it('should be able to login with a standard user', () => {
        LoginPage.signIn(LOGIN_USERS.STANDARD);

        // Wait for the inventory screen and check it
        expect(SwagOverviewPage.waitForIsDisplayed()).toEqual(
            true,
            'Inventory List screen was not shown',
        );
    });

    it('should not be able to login with a locked user', () => {
        // LoginPage
        LoginPage.signIn(LOGIN_USERS.LOCKED);

        expect(LoginPage.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginPage.getErrorMessage()).toContain(
            'Epic sadface: Sorry, this user has been locked out.',
            'The error message is not as expected',
        );
    });

    it('should not be able to login with an invalid username', () => {
        // LoginPage
        LoginPage.signIn(LOGIN_USERS.NO_MATCH);

        expect(LoginPage.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginPage.getErrorMessage()).toContain(
            'Epic sadface: Username and password do not match any user in this service',
            'The error message is not as expected',
        );
    });

    it('should not be able to login with an invalid password', () => {
        // LoginPage
        LoginPage.signIn(LOGIN_USERS.NO_MATCH);

        expect(LoginPage.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginPage.getErrorMessage()).toContain(
            'Epic sadface: Username and password do not match any user in this service',
            'The error message is not as expected',
        );
    });
});
