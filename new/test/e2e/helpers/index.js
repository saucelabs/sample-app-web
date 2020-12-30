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
    const {path, products = [], user} = data;
    const {username} = user;
    const userStorage = `localStorage.setItem("session-username", "${username}");`;
    const productStorage = products.length > 0 ? `localStorage.setItem("cart-contents", "[${products.toString()}]");` : '';
    const getStorage = 'return { username:localStorage.getItem("session-username"), cart: localStorage.getItem("cart-contents")}';

    // Go to the domain and set the storage
    browser.url('');
    browser.execute(`${userStorage} ${productStorage}`);
    browser.pause(1000);

    console.log('getStorage After setting =', browser.execute(getStorage));

    // Now got to the page
    browser.url(path);

    console.log('getStorage After loading url =', browser.execute(getStorage));
}
