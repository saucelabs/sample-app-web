import {DEFAULT_TIMEOUT} from '../configs/e2eConstants';

export default class BasePage {
    constructor(selector) {
        this.selector = selector;
    }

    /**
     * Wait for the element to be displayed
     *
     * @return {boolean}
     */
    waitForIsDisplayed(isShown = true) {
        return $(this.selector).waitForDisplayed(DEFAULT_TIMEOUT, !isShown);
    }

    /**
     * Give back if the element is displayed
     *
     * @return {boolean}
     */
    isDisplayed() {
        return $(this.selector).isDisplayed();
    }
}
