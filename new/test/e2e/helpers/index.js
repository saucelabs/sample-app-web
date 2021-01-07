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
    // // Needed to add this to verify the storage. We initially used `sessionStorage` in the browsers but that one didn't
    // // work properly and got lost after a new `browser.url('{some-url}')`. `localStorage` is more stable
    // // Uncomment the below and the console logs to see the results
    // const getStorage = 'return { username:localStorage.getItem("session-username"), cart: localStorage.getItem("cart-contents")}';

    // Go to the domain and set the storage
    browser.url('');
    browser.execute(`${userStorage} ${productStorage}`);
    browser.pause(1000);

    // console.log('getStorage After setting =', browser.execute(getStorage));

    // Now got to the page
    browser.url(path);

    // console.log('getStorage After loading url =', browser.execute(getStorage));
}
