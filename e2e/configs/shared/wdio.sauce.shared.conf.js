const { config } = require('./wdio.shared.conf');

// =================
// Service Providers
// =================
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
// WebdriverIO will automatically spin up a tunnel if this process is triggered locally
// because Jenkins will provide the `process.env.TUNNEL_IDENTIFIER`
config.sauceConnect = !process.env.TUNNEL_IDENTIFIER;

// ========
// Services
// ========
config.services = [ 'sauce' ];

// =======================================
// Hook to log data to the console so the
// Sauce OnDemand plugin can retrieve data
// from Jenkins
// =======================================
config.beforeTest = (test) => {
  if(process.env.TUNNEL_IDENTIFIER) {
    console.log(`SauceOnDemandSessionID=${ browser.sessionId } job-name=${ test.fullName.split(test.title)[ 0 ].trim() }`);
  }
};

exports.config = config;





