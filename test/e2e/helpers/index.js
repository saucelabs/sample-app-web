/**
 * Trigger the onChange on an element
 *
 * @param {string} selector the selector
 */
export function triggerOnChange(selector) {
    if (browser.isIOS) {
        browser.execute((elementSelector) => {
            let input = document.querySelector(elementSelector);
            let lastValue = '';
            let event = new Event('input', {bubbles: true});
            let tracker = input._valueTracker;
            if (tracker) {
                tracker.setValue(lastValue);
            }
            input.dispatchEvent(event);
        }, selector);
    }
}

/**
 * Prepare the environment
 *
 * @param {string} path
 * @param {array} products
 */
export function prepareEnvironment(path, products = []) {
    const userStorage = `sessionStorage.setItem("session-username", "standard_user");`;
    const productStorage = products.length > 0 ? `sessionStorage.setItem("cart-contents", "[${products.toString()}]");` : '';

    // Go to the domain and set the storage
    browser.url('');
    browser.execute(`${userStorage} ${productStorage}`);

    // Now got to the page
    browser.url(path);
}
