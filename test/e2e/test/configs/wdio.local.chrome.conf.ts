import {config} from './wdio.shared.conf';

// Excluding locally visual tests
config.exclude = ['../../test/specs/demo.visual.spec.ts', '../../test/specs/checkout.pdf.visual.spec.ts'];

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
              '--disable-features=SafeBrowsing,PasswordLeakToggleMove',
              '--headless',
          ],
          prefs: {
              'profile.password_manager_leak_detection': false,
          }
      },

  },
];

// ========
// Services
// ========
config.services = config.services.concat('chromedriver');

exports.config = config;
