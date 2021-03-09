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
    {
      deviceName: 'iPhone X'
    },
    {
      deviceName: 'Galaxy S8'
    },
  ],
  failureExitCode: 0,
};
