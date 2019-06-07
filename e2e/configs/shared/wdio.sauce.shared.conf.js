const { config } = require('./wdio.shared.conf');

// =================
// Service Providers
// =================
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY_EU;
config.region = 'eu';

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
  console.log(`SauceOnDemandSessionID=${ browser.sessionId } job-name=${ test.fullName.split(test.title)[ 0 ].trim() }`);
};

exports.config = config;





