import BasePage from './BasePage';
import {DEFAULT_TIMEOUT} from '../configs/e2eConstants';

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

    private get generatePdfButton() {
        return $('[data-test="generate-pdf-order"]');
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

    /**
     * Click the "Generate PDF order" button to download the order receipt
     */
    async generatePdfOrder(): Promise<void> {
        await this.generatePdfButton.waitForClickable({timeout: DEFAULT_TIMEOUT});
        await this.generatePdfButton.click();
    }
}

export default new CheckoutCompletePage();
