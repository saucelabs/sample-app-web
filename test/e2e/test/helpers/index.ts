import fs from 'fs';
import path from 'path';

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
export async function setTestContext(data: { path?: string; products?: number[]; user?: { username: string; password: string; } }) {
  const {path, products = [], user} = data;
  const {username} = user;
  const userCookies = `document.cookie="session-username=${username}";`;
  const productStorage = products.length > 0 ? `localStorage.setItem("cart-contents", "[${products.toString()}]");` : '';

  // Go to the domain and set the storage
  await browser.url('');
  await browser.execute(`${userCookies} ${productStorage}`);

  // Now got to the page
  await browser.url(path);
}

/**
 * Poll a directory until a file matching `pattern` shows up (and isn't still
 * mid-download, e.g. Chrome's `.crdownload` temp file), then return its full path.
 */
export async function waitForDownloadedFile(directory: string, pattern: RegExp, timeout = 15000): Promise<string> {
  const start = Date.now();

  while (Date.now() - start < timeout) {
    if (fs.existsSync(directory)) {
      const match = fs
        .readdirSync(directory)
        .find((file) => pattern.test(file) && !file.endsWith('.crdownload'));

      if (match) {
        return path.join(directory, match);
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error(`Timed out waiting for a downloaded file matching ${pattern} in ${directory}`);
}

/**
 * Pull a file the browser downloaded on a remote Selenium Grid node (e.g. a Sauce
 * Labs VM) back to the local machine, via WebdriverIO's `getDownloadableFiles`/
 * `downloadFile` commands (https://webdriver.io/docs/api/browser/downloadFile).
 * Only supported on Chrome/Edge/Firefox sessions with the `se:downloadsEnabled`
 * capability set - not on Safari or Appium (real device) sessions.
 */
export async function downloadRemoteFile(pattern: RegExp, targetDirectory: string, timeout = 15000): Promise<string> {
  await browser.waitUntil(
    async () => {
      const {names} = await browser.getDownloadableFiles();
      return names.some((name) => pattern.test(name));
    },
    {timeout, timeoutMsg: `Timed out waiting for a remote downloadable file matching ${pattern}`},
  );

  const {names} = await browser.getDownloadableFiles();
  const fileName = names.find((name) => pattern.test(name));

  const {files} = await browser.downloadFile(fileName, targetDirectory);
  await browser.deleteDownloadableFiles();

  return files[0];
}
