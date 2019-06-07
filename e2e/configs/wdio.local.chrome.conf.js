const { config } = require('./shared/wdio.shared.conf');

// ============
// Capabilities
// ============
config.capabilities = [
  // Chrome example
  {
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: [ '--no-sandbox', 'disable-infobars' ],
      'w3c': true,
    },

  },
];

// ========
// Services
// ========
config.services = [ 'selenium-standalone' ];

exports.config = config;
