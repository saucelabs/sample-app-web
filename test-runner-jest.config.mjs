import { getJestConfig } from "@storybook/test-runner";
import { getVisualTestConfig } from "@saucelabs/visual-storybook";

const testRunnerConfig = getJestConfig();

export default {
  ...testRunnerConfig,
  ...getVisualTestConfig(),
  testEnvironmentOptions: {
    ...testRunnerConfig.testEnvironmentOptions,
    // Covers the browser engines the old screener-storybook desktop config used
    // (chrome/edge -> chromium, firefox -> firefox, safari -> webkit).
    browsers: ["chromium", "firefox", "webkit"],
  },
};
