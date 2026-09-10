/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jsdom",

  // Only run unit tests under src/ — ignore the Selenium e2e specs in test/
  testMatch: ["<rootDir>/src/**/*.{test,tests}.{js,jsx,ts,tsx}"],

  // Run setup files after the test framework is installed
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],

  // Transform JS/JSX with babel-jest (uses babel.config.js)
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },

  moduleNameMapper: {
    // Static asset mocks
    "\\.(jpg|png|svg)$": "<rootDir>/src/utils/__mocks__/fileMock.js",
    // CSS imports are irrelevant in unit tests
    "\\.css$": "<rootDir>/src/utils/__mocks__/fileMock.js",
    // imageLoader uses import.meta.glob (Vite-only); return undefined in Jest
    "utils/imageLoader(\\.js)?$":
      "<rootDir>/src/utils/__mocks__/imageLoaderMock.js",
  },

  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.stories.{js,jsx,ts,tsx}",
    "!src/index.{js,jsx,ts,tsx}",
    "!src/service-worker.{js,jsx,ts,tsx}",
    "!src/serviceWorkerRegistration.{js,jsx,ts,tsx}",
    "!src/utils/withRouter.jsx",
  ],

  coveragePathIgnorePatterns: [
    "<rootDir>/src/jest.setupTextEncoder.js",
    "<rootDir>/src/setupTests.js",
    "<rootDir>/src/utils/imageLoader.js",
  ],

  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};




