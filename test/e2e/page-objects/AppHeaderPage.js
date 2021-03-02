class AppHeaderPage {
    // Make it private so people can't mess with it
    // Source: https://github.com/tc39/proposal-class-fields#private-fields
    get #cart() {
        return $('.shopping_cart_link');
    }

    get #productFilter() {
        return $('.product_sort_container');
    }

    /**
     * Get the cart amount
     *
     * @return {string}
     */
    getCartAmount() {
        browser.pause(500)

        return this.#cart.getText();
    }

    /**
     * Open the cart
     */
    openCart() {
        this.#cart.click();
    }

    /**
     * Select the order based on visible text
     *
     * @param {string} text
     */
    selectProductOrder(text){
        this.#productFilter.selectByVisibleText(text)
    }
}

export default new AppHeaderPage();
