const { config } = require('./shared/wdio.sauce.shared.conf');

const screenResolution = '1600x1200';
const defaultBrowserSauceOptions = {
  screenResolution,
  seleniumVersion: '3.141.59',
  build: process.env.SAUCE_BUILD_NAME || `localBuild-${new Date().getTime()}`,
  ...(process.env.TUNNEL_IDENTIFIER ? { tunnelIdentifier: process.env.TUNNEL_IDENTIFIER } : {}),
};
const chromeOptions = {
  'goog:chromeOptions': {
    args: [ '--no-sandbox', 'disable-infobars' ],
    w3c: true,
  },
};

// ============
// Capabilities
// ============
config.capabilities = [
  {
    browserName: 'googlechrome',
    browserVersion: 'latest',
    platformName: 'Windows 10',
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
    ...chromeOptions,
  },
  {
    browserName: 'firefox',
    browserVersion: 'latest',
    platformName: 'Windows 10',
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
  },
  // // @TODO There are a lot of issues with ReactJS and IE11, see also
  // // @TODO: https://stackoverflow.com/questions/55653710/why-is-reacts-onchange-event-not-fired-on-selenium-webdrivers-sendkeys-in-ie-1
  // {
  //   browserName: 'internet explorer',
  //   browserVersion: 'latest',
  //   platformName: 'Windows 10',
  //   'sauce:options': {
  //     ...defaultBrowserSauceOptions,
  //     iedriverVersion: '3.141.59',
  //   },
  // },
  // //@TODO There is a Sauce issue with the response on not finding elements, that's  why it is disabled for now
  // {
  //   browserName: 'MicrosoftEdge',
  //   browserVersion: 'latest',
  //   platformName: 'Windows 10',
  //   'sauce:options': {
  //     ...defaultBrowserSauceOptions,
  //   },
  // },
  {
    browserName: 'googlechrome',
    browserVersion: 'latest',
    platformName: 'macOS 10.14',
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
    ...chromeOptions,
  },
  {
    browserName: 'firefox',
    browserVersion: 'latest',
    platformName: 'macOS 10.14',
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
  },
  {
    browserName: 'safari',
    browserVersion: 'latest',
    platformName: 'macOS 10.14',
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
  },
];

exports.config = config;





