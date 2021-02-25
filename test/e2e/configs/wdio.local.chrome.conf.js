const {config} = require('./wdio.shared.conf');

// ============
// Capabilities
// ============
config.capabilities = [
    // Chrome example
    {
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--headless',
            ],
        },

    },
];

// ========
// Services
// ========
config.services = ['chromedriver'];

exports.config = config;





