const fs = require('fs');

class TestUtils {
  
  static saveScreenshot(page, filePrefix) {
    const screenshotDir = 'screenshots';
    const screenshotLocation = `./${screenshotDir}/${page}/${filePrefix}.png`;
    const pageUrl = browser.getUrl();

    if (!browser.config.enableScreenshots) {
      console.log(`skipping screenshot [${screenshotLocation}] for url: [${pageUrl}], enableScreenshots property set to false`);
      return;
    }

    // Log out where we're going to write to in case something blows up - lets us debug more easily
    console.log(`Saving screenshot to [${screenshotLocation}] for url: [${pageUrl}]`);

    // Create our base directory if needed
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir);
    }

    // Create the page-specific subdirectory if needed
    if (!fs.existsSync(`${screenshotDir}/${page}`)) {
      fs.mkdirSync(`${screenshotDir}/${page}`);
    }

    browser.saveScreenshot(screenshotLocation);
  }
}

module.exports = TestUtils