import { LOGIN_USERS } from '../configs/e2eConstants';
import Login from '../page-objects/Login';
import SwagOverview from '../page-objects/SwagOverview';

describe('Login', () => {
    beforeEach(() => {
        browser.url('');
        Login.waitForIsDisplayed();
    });

    it('should be able to test loading of login page', () => {
        expect(Login.waitForIsDisplayed()).toEqual(
            true,
            'Login page was not shown',
        );
    });

    it('should be able to login with a standard user', () => {
        Login.signIn(LOGIN_USERS.STANDARD);

        // Wait for the inventory screen and check it
        expect(SwagOverview.waitForIsDisplayed()).toEqual(
            true,
            'Inventory List screen was not shown',
        );
    });

    it('should not be able to login with a locked user', () => {
        // Login
        Login.signIn(LOGIN_USERS.LOCKED);

        expect(Login.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(Login.getErrorMessage()).toContain(
            'Epic sadface: Sorry, this user has been locked out.',
            'The error message is not as expected',
        );
    });

    it('should not be able to login with an invalid username', () => {
        // Login
        Login.signIn(LOGIN_USERS.NO_MATCH);

        expect(Login.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(Login.getErrorMessage()).toContain(
            'Epic sadface: Username and password do not match any user in this service',
            'The error message is not as expected',
        );
    });

    it('should not be able to login with an invalid password', () => {
        // Login
        Login.signIn(LOGIN_USERS.NO_MATCH);

        expect(Login.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(Login.getErrorMessage()).toContain(
            'Epic sadface: Username and password do not match any user in this service',
            'The error message is not as expected',
        );
    });
});
