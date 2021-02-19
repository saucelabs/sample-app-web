# What is this codebase?
This is the Sauce Labs Sample Application which is designed to be used from desktop web browsers

- [Setup](#setup)
  - [Requirements](#requirements)
  - [Build](#build)
  - [Storybook](#storybook)
- [Test](#test)
- [Deploy](#deploy)

## Setup
### Requirements
To set up the development environment directly on your host computer:

1. You’ll need [Node.js](http://nodejs.org) installed (at least v10.x.x or higher). If you don't have Node installed,
we recommend installing [NVM](https://github.com/creationix/nvm) to assist managing multiple active Node.js versions.
1. Fork the project.
1. Clone the project somewhere on your computer

        git clone git@github.com:<your-username>/sample-app-web.git

1. Install all dependencies

        npm install

### Build
1. Build the application with

        npm run start

    This will build the application, start Chrome and load the website on [http://localhost:3000/](http://localhost:3000/)

1. Click around - this is the app!
1. Install [OpenJDK 8](https://adoptopenjdk.net/) for running the end-to-end tests
1. Install [Google Chrome](https://www.google.com/chrome/) for running the end-to-end tests

### Storybook
This website uses components which can be tested with Storybook. To run Storybook execute the following command

    npm run storybook 

This will open Storybook on [http://localhost:6006/](http://localhost:6006/). More information about Storybook can be 
found [here](https://storybook.js.org/docs/react/get-started/introduction).

## Test
### Testing locally
To run the application test suite (which uses Webdriver.io, Selenium, and Chrome) make sure the application is running
on [http://localhost:3000/](http://localhost:3000/) (see above steps)

1. `npm run test.e2e.local`

This will run the application test suite

### Testing on Saucelabs

Running on Sauce Labs uses Environment Variables to authenticate credentials. You can find a guide on how to do this
[here.](https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Environment+Variables+for+Authentication+Credentials)

1. `npm run test.e2e.sauce.us` to run tests on the Sauce Labs in the US Data Center
2. `npm run test.e2e.sayce.edu` to run tests in the EU Data Center


## Deploy

Merges to master will automatically deploy to:
* https://www.saucedemo.com
* https://saucelabs.github.io/sample-app-web/

See: [.github/workflows/github-pages.yml GitHub Action](.github/workflows/github-pages.yml)
