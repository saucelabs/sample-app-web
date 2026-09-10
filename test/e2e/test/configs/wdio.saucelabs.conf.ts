const BUILD_PREFIX = process.env.BUILD_PREFIX ? `GitHub Actions-` : '';

import { config } from './wdio.shared.conf';
import { SauceRegions } from '@wdio/types/build/Options';
import SauceLabs, { Job } from 'saucelabs';

const BUILD_NAME = `${BUILD_PREFIX}Sauce Demo App build-${new Date().getTime()}`;

const defaultBrowserSauceOptions = {
    build: BUILD_NAME,
    screenResolution: '1600x1200',
    seleniumVersion: '4.40.0',
};

const defaultRealDeviceSauceOptions = {
    build: BUILD_NAME,
    phoneOnly: true,
    appiumVersion: 'latest',
};

// =====================
// Sauce specific config
// =====================
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
// If you run your tests on Sauce Labs you can specify the region you want to run your tests
// in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
// These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
// If you don't provide the region, it defaults to `us`.
config.region = (process.env.REGION || 'us') as SauceRegions;

// ============
// Capabilities
// ============
config.capabilities = [
  /**
   * Desktop browsers
   */
  {
    browserName: 'chrome',
    platformName: 'Windows 11',
    browserVersion: 'latest',
    // Needed for checkout.pdf.visual.spec.ts to pull the downloaded PDF back from
    // the remote VM via browser.getDownloadableFiles()/downloadFile() - only
    // supported on Selenium Grid sessions (Chrome/Edge/Firefox), not Safari or
    // Appium (real device) sessions.
    'se:downloadsEnabled': true,
    'goog:chromeOptions': {
      args: [
        '--no-sandbox',
        '--disable-infobars',
        '--disable-features=SafeBrowsing,PasswordLeakToggleMove',
      ],
      prefs: {
        'profile.password_manager_leak_detection': false,
      }
    },
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
  },
  {
    browserName: 'firefox',
    platformName: 'Windows 11',
    browserVersion: 'latest',
    // checkout.pdf.visual.spec.ts only runs on Chrome - see the note there
    'wdio:exclude': ['../../test/specs/checkout.pdf.visual.spec.ts'],
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
  },
  {
    browserName: 'MicrosoftEdge',
    platformName: 'Windows 11',
    browserVersion: 'latest',
    'wdio:enforceWebDriverClassic': true,
    // checkout.pdf.visual.spec.ts only runs on Chrome - see the note there
    'wdio:exclude': ['../../test/specs/checkout.pdf.visual.spec.ts'],
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
  },
  {
    browserName: 'safari',
    platformName: 'macOS 15',
    browserVersion: 'latest',
    'wdio:enforceWebDriverClassic': true,
    // checkout.pdf.visual.spec.ts only runs on Chrome - see the note there
    'wdio:exclude': ['../../test/specs/checkout.pdf.visual.spec.ts'],
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
  },
  /**
   * Real devices (Sauce Labs Real Device Cloud)
   * Enable this section if your account has RDC concurrency
   */
  // {
  //   platformName: 'iOS',
  //   browserName: 'Safari',
  //   'appium:deviceName': 'iPhone.*',
  //   'appium:platformVersion': '18',
  //   'appium:automationName': 'XCUITest',
  //   'wdio:enforceWebDriverClassic': true,
  //   // checkout.pdf.visual.spec.ts only runs on Chrome - see the note there
  //   'wdio:exclude': ['../../test/specs/checkout.pdf.visual.spec.ts'],
  //   'sauce:options': {
  //     ...defaultRealDeviceSauceOptions,
  //   },
  // },
  // {
  //   platformName: 'Android',
  //   browserName: 'Chrome',
  //   'appium:deviceName': '.*Pixel.*',
  //   'appium:platformVersion': '14',
  //   'appium:automationName': 'UiAutomator2',
  //   'wdio:enforceWebDriverClassic': true,
  //   // checkout.pdf.visual.spec.ts only runs on Chrome - see the note there
  //   'wdio:exclude': ['../../test/specs/checkout.pdf.visual.spec.ts'],
  //   'sauce:options': {
  //     ...defaultRealDeviceSauceOptions,
  //   },
  // },
];

// ========
// Services
// ========
config.services = config.services.concat([
    ['sauce', {
        sauceConnect: true,
        sauceConnectOpts: {
            logFile: './sc.log',
            logLevel: 'debug',
            proxyLocalhost: 'allow'
        }
    }],
    'shared-store',
    ['@saucelabs/wdio-sauce-visual-service', {
        buildName: 'Sample App Web - Demo Visual Checks',
        project: 'sample-app-web',
        region: 'us-west-1',
    }],
]);
// =====
// Hooks
// =====

// Retry a spec once if it fails, this could be a WebdriverIO or Driver error
config.specFileRetries = 1;

// If a test fails the first time and succeeds the second them, then our build would still be marked as failed.
// That's why we've implemented an after-hook that will
// - check after each spec file if the test failed (result === 1)
// - store it in a global scope
// - check if the test has been executed for the second time (the retry) and if so, it will check if the status is
//   passed (result === 0), then it will update the the previous failed status to passed and change the name
config.after = async (result, capabilities, specs) => {
  type RetriedSpecsType = {
    sessionId: string;
    specFileNamePath: string;
  }[];
  // Get the spec name path
  const specFileNamePath = specs[0];
  const RETRIED_SPECS_KEY = 'retriedSpecs';

  // Helper to safely read/normalize the retried specs from sharedStore
  const getRetriedSpecs = async (): Promise<RetriedSpecsType> => {
    const maybe = await browser.sharedStore.get(RETRIED_SPECS_KEY) as unknown;
    // If it's already an array, return it
    if (Array.isArray(maybe)) return maybe as RetriedSpecsType;
    // If it's falsy, initialize and return empty array
    if (!maybe) {
      await browser.sharedStore.set(RETRIED_SPECS_KEY, []);
      return [] as RetriedSpecsType;
    }
    // If it's an object that looks like a numeric-indexed map or values container, coerce to array
    if (typeof maybe === 'object') {
      try {
        const vals = Object.values(maybe) as RetriedSpecsType;
        if (Array.isArray(vals)) {
          // Persist normalized array back to the store for future callers
          await browser.sharedStore.set(RETRIED_SPECS_KEY, vals);
          return vals;
        }
      } catch (e) {
        // fall through to reset
      }
    }
    // Fallback: reset to an empty array to avoid runtime issues
    await browser.sharedStore.set(RETRIED_SPECS_KEY, []);
    return [] as RetriedSpecsType;
  };

  // The test failed and should be retried
  // Store the retry spec on the global scope
  {
    const cfg = config as any;
    // Use a safe check rather than `"specFileRetries" in cfg` because `cfg` may be undefined
    if (cfg?.specFileRetries > 0 && result === 1) {
      const retriedSpecs = await getRetriedSpecs();
      retriedSpecs.push({
        sessionId: browser.sessionId,
        specFileNamePath,
      });
      await browser.sharedStore.set(RETRIED_SPECS_KEY, retriedSpecs);
    }
  }

  // When the test succeeds
  if (result === 0) {
    // Find the test that failed before
    const retriedSpecs = await getRetriedSpecs();
    const matchingSession = retriedSpecs.find((retriedSpec) => retriedSpec.specFileNamePath === specFileNamePath);
    // If there is a matching session
    if (matchingSession) {
      // Then update the test in Sauce Labs with the API
      const api = new SauceLabs({
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        region: (config as any).region,
      });
      // We need to get the name of the job to be able to pre and post fix it
      const jobData = await api.getJob(
        process.env.SAUCE_USERNAME,
        matchingSession.sessionId
      );

      // Only update the job name and status if it hasn't been updated previously
      // The change that this will happen is very small, but this is a fail save
      if (jobData.name && !jobData.name.includes('Succeeded after retry')) {
        // Pre and post fix the job name
        const body = {
          name: `❌ - ${jobData.name} - Succeeded after retry`,
          passed: true,
        } as Job;
        // Now update the job
        await api.updateJob(
          process.env.SAUCE_USERNAME,
          matchingSession.sessionId,
          body
        );
      }
    }
  }
};

exports.config = config;
