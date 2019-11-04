exports.config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',

    // ============
    // Capabilities
    // ============
    maxInstances: 100,
    // For the rest see the specific configs

    // ===================
    // Test Configurations
    // ===================
    logLevel: 'silent',
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 15000,
    waitforInterval: 5000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000,
    },

    suites:{
        demoSite:[
            './test/web/specs/demo-site/parallelization/checkout.spec.js',
            './test/web/specs/demo-site/parallelization/itemlist.spec.js',
            './e2e/specs/**/*.spec.js',
        ]
    },
    // ========
    // Services
    // ========
    services: [],

    // =====
    // Hooks
    // =====
    beforeSession: function() {
        require('@babel/register');
    },
}
