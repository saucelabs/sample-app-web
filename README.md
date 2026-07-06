# What is this codebase?
This is the Sauce Labs Sample Application which is designed to be used from desktop web browsers

![sample-app-web workflow](https://github.com/saucelabs/sample-app-web/actions/workflows/sample-app-web.yml/badge.svg)

- [Setup](#setup)
  - [Requirements](#requirements)
  - [Build](#build)
  - [Storybook](#storybook)
- [Test](#test)
- [Deploy](#deploy)

## Setup
### Requirements
To set up the development environment directly on your host computer:

1. You'll need [Node.js](http://nodejs.org) `>=24.9.0` installed (see `.nvmrc`/`package.json` `engines` — this is a hard requirement of the Sauce Visual Storybook integration, not just a preference). If you don't have Node installed,
we recommend installing [NVM](https://github.com/creationix/nvm) to assist managing multiple active Node.js versions (`nvm use` will pick up `.nvmrc` automatically).
1. Install [Google Chrome](https://www.google.com/chrome/) for running the end-to-end tests locally
1. Clone the project somewhere on your computer

        git clone git@github.com:<your-username>/sample-app-web.git

1. Install all dependencies by running this command from the **root of the project**

        npm install

### Error reporting with Backtrace
To set up error reporting with your Backtrace instance:

1. Open `src/index.jsx` file and find the `BacktraceClient.initialize` function call:
    ```tsx
    BacktraceClient.initialize({
        name: 'Swag Store',
        version: '3.0.0',
        url: 'https://submit.backtrace.io/UNIVERSE/TOKEN/json',
        userAttributes: () => ({
            user: currentUser(),
            shoppingCart: ShoppingCart.getCartContents()
        })
    })
    ```
1. Replace `UNIVERSE` and `TOKEN` in `url` with your universe and token. 

For more details, [see the docs about React integration with Backtrace](https://docs.saucelabs.com/error-reporting/language-integrations/react/).

### Build
1. Build the application with

        npm run start

    This starts the Vite dev server, opens Chrome, and loads the website on [http://localhost:3000/](http://localhost:3000/)

1. Click around - this is the app!

### Sourcemaps in error reporting with Backtrace
To enable additional insight in Backtrace, you can send built sourcemaps and sources to Backtrace:
1. Open `.backtracejsrc` file
1. Replace `UNIVERSE` and `TOKEN` in `upload.url` with your universe and token.
1. Build the application with

        npm run build

1. Run `backtrace-js`

        npm run backtrace.sourcemaps

1. Serve the production build (sourcemaps integration won't work with `npm run start`, which serves unbuilt source)

        npm run preview

1. New uploaded errors should display with sourcemaps attached!

For more details, [see the docs about sourcemap integration with Backtrace](https://docs.saucelabs.com/error-reporting/platform-integrations/source-map/).

### Storybook
This website uses components which can be tested with Storybook. To run Storybook execute the following command:

    npm run storybook 

This will open Storybook on [http://localhost:6006/](http://localhost:6006/). More information about Storybook can be 
found [here](https://storybook.js.org/docs/react/get-started/introduction).

## Test
### E2E
The E2E suite lives in `test/e2e` (a separate npm project using WebdriverIO 9 + Chrome, driven by the bundled `chromedriver` package — no separate Selenium server or Java install needed). Install its dependencies once:

    npm --prefix ./test/e2e install

#### Testing locally
Make sure the application is running on [http://localhost:3000/](http://localhost:3000/) (see above steps), then:

    npm --prefix ./test/e2e run test.local

This will run the application test suite against your local Chrome.

#### Testing on Sauce Labs
Running on Sauce Labs uses Environment Variables to authenticate credentials. You can find a guide on how to do this
[here.](https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Environment+Variables+for+Authentication+Credentials)

1. `npm --prefix ./test/e2e run test.saucelabs.us` to run tests on the Sauce Labs US Data Center
2. `npm --prefix ./test/e2e run test.saucelabs.eu` to run tests on the Sauce Labs EU Data Center

> Make sure you've added the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` variables to your environment variables.

### Visual Component Testing
Components are visually tested with [Sauce Visual's Storybook integration](https://docs.saucelabs.com/visual-testing/integrations/storybook/) (`@saucelabs/visual-storybook`):

    npm run test.storybook

This builds on Storybook's own [test runner](https://github.com/storybookjs/test-runner) to visit every story with Playwright (across `chromium`, `firefox`, and `webkit` — see `test-runner-jest.config.mjs`), take a snapshot, and upload it to Sauce Visual for review/diffing. Requires Node `>=24.9.0` (see Requirements above).

Each PR (any branch other than `main`) will also run this in CI.

> Make sure you've added the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` variables to your environment variables.

## Deploy

Merges to main need to manually be triggered in [Actions > github pages release](https://github.com/saucelabs/sample-app-web/actions/workflows/github-pages.yml) and will automatically deploy to:
* https://www.saucedemo.com
* https://saucelabs.github.io/sample-app-web/

See: [.github/workflows/github-pages.yml GitHub Action](.github/workflows/github-pages.yml)
