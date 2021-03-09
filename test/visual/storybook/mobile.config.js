module.exports = {
  projectRepo: 'saucelabs/sample-app-web',
  baseBranch: 'master',
  storybookConfigDir: '.storybook',
  apiKey: process.env.SCREENER_API_KEY,
  resolutions: [
    // Galaxy S8
    '360x740',
    // iPhone X
    '375x812',
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
      browserName: 'safari',
      version: '13.1',
    },
  ]
};
