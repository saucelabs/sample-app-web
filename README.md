# What is this codebase?
This is the Sauce Labs Sample Application which is designed to be used from desktop web browsers

![sample-app-web workflow](https://github.com/saucelabs/sample-app-web/actions/workflows/sample-app-web.yml/badge.svg)
[![codecov](https://codecov.io/gh/saucelabs/sample-app-web/branch/master/graph/badge.svg?token=Q4UsgDSRd3)](https://codecov.io/gh/saucelabs/sample-app-web)

- [Setup](#setup)
  - [Requirements](#requirements)
  - [Build](#build)
  - [Storybook](#storybook)
- [Test](#test)
- [Deploy](#deploy)

## Setup
### Requirements
To set up the development environment directly on your host computer:

1. You’ll need [Node.js](http://nodejs.org) installed (at least v12.x.x or higher). If you don't have Node installed,
we recommend installing [NVM](https://github.com/creationix/nvm) to assist managing multiple active Node.js versions.
1. Install [OpenJDK 8](https://adoptopenjdk.net/) for running the end-to-end tests
1. Install [Google Chrome](https://www.google.com/chrome/) for running the end-to-end tests
1. Clone the project somewhere on your computer

        git clone git@github.com:<your-username>/sample-app-web.git

1. Install all dependencies by running this command from the **root of the project**

        npm install

### Build
1. Build the application with

        npm run start

    This will build the application, start Chrome and load the website on [http://localhost:3000/](http://localhost:3000/)

1. Click around - this is the app!

### Storybook
This website uses components which can be tested with Storybook. To run Storybook execute the following command:

    npm run storybook 

This will open Storybook on [http://localhost:6006/](http://localhost:6006/). More information about Storybook can be 
found [here](https://storybook.js.org/docs/react/get-started/introduction).

## Test
### E2E
#### Testing locally
To run the application test suite (which uses Webdriver.io, Selenium, and Chrome) make sure the application is running
on [http://localhost:3000/](http://localhost:3000/) (see above steps)

    npm run test.e2e.local

This will run the application test suite

#### Testing on Sauce Labs
Running on Sauce Labs uses Environment Variables to authenticate credentials. You can find a guide on how to do this
[here.](https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Environment+Variables+for+Authentication+Credentials)

1. `npm run test.e2e.sauce.us` to run tests on the Sauce Labs in the US Data Center
2. `npm run test.e2e.sauce.eu` to run tests in the EU Data Center

> Make sure you've added the `SCREENER_API_KEY` variable to your environment variables.

### Visual Component Testing
You can test the components with Screener Component testing by running the following commands

    # This will test all components on Chrome only
    npm run test.storybook.ci
    
    # This will test all components on Chrome and Safari in mobile viewports
    npm run test.storybook.mobile
    
    # This will test all componentes on Chrome, Safari, Firefox and Safari
    # with different desktop resolutions
    npm run test.storybook.desktop

Each PR to master will also test the components with the `test.storybook.ci`-command.

> Make sure you've added the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` variables to your environment variables.

## Deploy

Merges to master will automatically deploy to:
* https://www.saucedemo.com
* https://saucelabs.github.io/sample-app-web/

See: [.github/workflows/github-pages.yml GitHub Action](.github/workflows/github-pages.yml)
