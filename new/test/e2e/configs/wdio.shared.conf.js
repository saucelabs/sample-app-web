exports.config = {
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',
  // ==================
  // Specify Test Files
  // ==================
  specs: [
    './test/e2e/specs/**/*.js'
  ],
  // ============
  // Capabilities
  // ============
  maxInstances: 25,
  // capabilities can be found in the `wdio.local.chrome.conf.js` or `wdio.sauce.conf.js`
  // ===================
  // Test Configurations
  // ===================
  logLevel: 'silent',
  bail: 0,
  baseUrl: 'http://localhost:3000',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'jasmine',
  reporters: ['spec'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
    helpers: [require.resolve('@babel/register')],
  },
  services: [],
  before: () => {
    /**
     * This is temporary, when the url has been changed from `https://www.saucedemo.com/new` to
     * `https://www.saucedemo.com` we need to remove this command
     */
    browser.overwriteCommand('url', function (origUrlFunction, path) {
      const url = `/new${path}`;
      // console.log(`Opening '${browser.config.baseUrl}${url}'`);

      return origUrlFunction(url);
    })
  },
};
