import BasePage from './BasePage';

class CheckoutCompletePage extends BasePage {
    constructor() {
        super('#checkout_complete_container');
    }

    private get completeHeader() {
        return $('.complete-header');
    }

    private get completeText() {
        return $('.complete-text');
    }

    /**
     * Get the completion header text
     */
    async getHeaderText(): Promise<string> {
        return this.completeHeader.getText();
    }

    /**
     * Get the completion body text
     */
    async getCompleteText(): Promise<string> {
        return this.completeText.getText();
    }
}

export default new CheckoutCompletePage();
