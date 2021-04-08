module.exports = {
  projectRepo: 'saucelabs/sample-app-web',
  baseBranch: 'master',
  storybookConfigDir: '.storybook',
  apiKey: process.env.SCREENER_API_KEY,
  resolutions: [
    // These are all the breakpoints in the code
    '1200x900',
    '980x735',
    '900x680',
    '640x480',
    '480x640',
  ],
  sauce: {
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY,
    maxConcurrent: 30,
  },
  browsers: [
    {
      browserName: 'chrome',
      version: '89.0',
    },
    {
      browserName: 'firefox',
      version: '86.0',
    },
    // IE doesn't seem to work with Storybook 6+
    // {
    //   browserName: 'internet explorer',
    //   version: '11.285'
    // },
    {
      browserName: 'microsoftedge',
      version: '88.0',
    },
    {
      browserName: 'safari',
      version: '13.1',
    },
  ]
};
