/**
 * More information about the WebdriverIO configuration file can be found here:
 * https://webdriver.io/docs/configurationfile.html
 */
exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    enableScreenshots: true,

    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/e2e/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        "goog:chromeOptions": {
          args: ['--headless', '--disable-gpu']
        }
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'warn',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://localhost:3000',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000,
    },

    //
    // =====
    // Hooks
    // =====
    before: (capabilities, specs) => {
        require('@babel/register')
    },

};
