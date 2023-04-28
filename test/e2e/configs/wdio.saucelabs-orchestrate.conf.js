const BUILD_PREFIX = process.env.BUILD_PREFIX ? `GitHub Actions-` : '';
const {config} = require('./wdio.shared.conf');
const defaultBrowserSauceOptions = {
    build: `${BUILD_PREFIX}Sauce Demo App build-${new Date().getTime()}`,
    screenResolution: '1600x1200',
};

// =========================
// Sauce RDC specific config
// =========================
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
// If you run your tests on Sauce Labs you can specify the region you want to run your tests
// in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
// These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
// If you don't provide the region, it defaults to `us`.
config.region = process.env.REGION || 'us';

// ============
// Capabilities
// ============
config.capabilities = [
    /**
     * Desktop browsers
     */
    {
        browserName: 'chrome',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
            tunnelIdentifier: "mdonovan2010_tunnel_name"
        },
    },
];

exports.config = config;
