import fs from 'fs';
import {execFileSync} from 'child_process';
import LoginPage from '../page-objects/LoginPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import AppHeaderPage from '../page-objects/AppHeaderPage';
import CartSummaryPage from '../page-objects/CartSummaryPage';
import CheckoutPersonalInfoPage from '../page-objects/CheckoutPersonalInfoPage';
import CheckoutSummaryPage from '../page-objects/CheckoutSummaryPage';
import CheckoutCompletePage from '../page-objects/CheckoutCompletePage';
import {waitForDownloadedFile, downloadRemoteFile} from '../helpers/index';
import {LOGIN_USERS, PERSONAL_INFO, DOWNLOAD_DIR} from '../configs/e2eConstants';

describe('Checkout order PDF - Sauce Visual PDF integration (demo)', () => {
  before(() => {
    // Start each run with a clean downloads folder so we know any .pdf found
    // afterwards is the one this test just generated
    fs.rmSync(DOWNLOAD_DIR, {recursive: true, force: true});
    fs.mkdirSync(DOWNLOAD_DIR, {recursive: true});
  });

  it('should download the order receipt PDF and visually check it with Sauce Visual', async () => {
    const product = 'Sauce Labs Backpack';

    // Log in
    await browser.url('');
    await LoginPage.waitForIsShown();
    await LoginPage.signIn(LOGIN_USERS.STANDARD);

    // Add a product and go through checkout
    await SwagOverviewPage.waitForIsShown();
    await SwagOverviewPage.addSwagToCart(product);

    await AppHeaderPage.openCart();
    await CartSummaryPage.waitForIsShown();
    await CartSummaryPage.goToCheckout();

    await CheckoutPersonalInfoPage.waitForIsShown();
    await CheckoutPersonalInfoPage.submitPersonalInfo(PERSONAL_INFO.STANDARD);

    await CheckoutSummaryPage.waitForIsShown();
    await CheckoutSummaryPage.finishCheckout();

    // Generate and download the order receipt PDF
    await CheckoutCompletePage.waitForIsShown();
    await CheckoutCompletePage.generatePdfOrder();

    // On Sauce Labs the PDF lands on the remote VM, not this machine - pull it
    // back first via WebdriverIO's Selenium Grid download commands (Chrome only,
    // see the 'se:downloadsEnabled' capability in wdio.saucelabs.conf.ts). Locally,
    // Chrome already saves straight to DOWNLOAD_DIR on this machine.
    const isSauceSession = Boolean((browser.capabilities as WebdriverIO.Capabilities)['se:downloadsEnabled']);
    const pdfPath = isSauceSession
      ? await downloadRemoteFile(/\.pdf$/, DOWNLOAD_DIR)
      : await waitForDownloadedFile(DOWNLOAD_DIR, /\.pdf$/);

    await expect(fs.existsSync(pdfPath)).toBe(true);

    // Hand the downloaded PDF to Sauce Visual's standalone PDF CLI - this is
    // independent from the browser session, see:
    // https://docs.saucelabs.com/visual-testing/integrations/pdf/
    // Credentials come from SAUCE_USERNAME / SAUCE_ACCESS_KEY in the environment.
    const output = execFileSync(
      'npx',
      [
        '@saucelabs/visual-snapshots',
        'pdf',
        pdfPath,
        '--build-name',
        'Sample App Web - Order PDF Demo',
        '--project',
        'sample-app-web',
      ],
      {encoding: 'utf-8'},
    );
    console.log(output);
  });
});
