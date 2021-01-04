# What is this codebase?
This is the Sauce Labs Sample Application which is designed to be used from desktop web browsers

- [Setup](#setup)
    - [Requirements](#requirements)
    - [Build](#build)
- [Developing](#developing)
    - [Create React App](#create-react-app)
        - [Available Scripts](#available-scripts)
            - [`yarn start`](#yarn-start) 
            - [`yarn test`](#yarn-test) 
            - [`yarn build`](#yarn-build)
        - [Learn more](#learn-more)
    - [Linting](#linting)
- [Testing](#testing)
    - [Unit tests](#unit-tests)
    - [E2E tests](#e2e-tests)
        - [Local](#local-machine)
        - [Sauce Labs](#sauce-labs)
- [Deploy](#deploy)

## Setup
### Requirements

To set up the development environment directly on your host computer:

1. You’ll need [Node.js](http://nodejs.org) installed (at least v12.x.x or higher). If you don't have Node installed, we
recommend installing [NVM](https://github.com/creationix/nvm) to assist managing multiple active Node.js versions.
1. Use `yarn` instead of npm, see [this link](https://classic.yarnpkg.com/en/docs/install/#mac-stable) on how to install
1. Fork the project.
1. Clone the project somewhere on your computer

        git clone git@github.com:<your-username>/sample-app-web.git

1. Install all dependencies

        npm install

### Build
1. Build the application with

        yarn start

    This will build the application, start Chrome and load the website on [http://localhost:3000/](http://localhost:3000/)

1. Click around - this is the app!
1. Install [OpenJDK 8](https://adoptopenjdk.net/) for running the end-to-end tests
1. Install [Google Chrome](https://www.google.com/chrome/) for running the [local end-to-end tests](#local-machine)

## Developing
### Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Please read the
documentation to understand what it can do.

#### Available Scripts
In the project directory, you can run:

##### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##### `yarn test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more 
information.

##### `yarn build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### Learn More
You can learn more in the 
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Linting
Linting will be done with Prettier which is included in Create React App. To configure Prettier in your editor please 
check [this](https://prettier.io/docs/en/editors.html) link.

## Testing
### Unit tests
Every file in the [`src`](./src)-folder needs to have a unit test. The goal is to get 100% coverage. Every commit will\
be unit tested before pushed. How to run unit tests can be found [here](#yarn-test). Running them with coverage can be
done with `yarn test.coverage`.

### E2E tests

#### Local machine
To run the application test suite (which uses Webdriver.io, Selenium, and Chrome) make sure the application is running 
on [http://localhost:3000](http://localhost:3000) (see [above steps](#yarn-start)). Then run:

    `yarn test.e2e.local`

This will run the application test suite

#### Sauce Labs
Running on Sauce Labs uses Environment Variables to authenticate credentials. You can find a guide on how to do this 
[here.](https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Environment+Variables+for+Authentication+Credentials).
Make sure you have the application running on [http://localhost:3000](http://localhost:3000) 
(see [above steps](#yarn-start)). Then run:

1. `yarn test.e2e.sauce.eu` to run tests on the Sauce Labs in the EU Data Center
2. `yarn test.e2e.sauce.us` to run tests in the US Data Center

## Deploy
Merges to master will automatically deploy to:
* https://www.saucedemo.com
* https://saucelabs.github.io/sample-app-web

See: [.github/workflows/github-pages.yml GitHub Action](.github/workflows/github-pages.yml)
