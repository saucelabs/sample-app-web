/**
 * Set the test context
 *
 * @param {object} data
 * @param {object} data.user
 * @param {string} data.user.username
 * @param {string} data.user.password
 * @param {string} data.path
 * @param {array} data.products
 */
export function setTestContext(data = {}) {
    const isSauce = browser.config.hostname && browser.config.hostname.includes('saucelabs');
    const {path, products = [], user} = data;
    const {username} = user;
    const userCookies = `document.cookie="session-username=${username}";`;
    // We initially used `sessionStorage` in the browsers but that one didn't work properly and got lost after a new
    // `browser.url('{some-url}')`. `localStorage` is more stable
    const productStorage = products.length > 0 ? `localStorage.setItem("cart-contents", "[${products.toString()}]");` : '';

    if(isSauce) {
        // Log extra context in Sauce
        browser.execute('sauce:context=#### Start `setTestContext` ####');
    }

    // Go to the domain
    browser.url('');
    // Clear the cookies and storage
    browser.deleteAllCookies();
    browser.execute('localStorage.clear();');
    // Set the new cookies and storage
    browser.execute(`${userCookies} ${productStorage}`);
    browser.pause(1000);
    // Now got to the page
    browser.url(path);

    if(isSauce) {
        // Log extra context in Sauce
        browser.execute('sauce:context=#### End `setTestContext` ####');
    }
}
