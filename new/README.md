# What is this codebase?
This is the Sauce Labs Sample Application which is designed to be used from desktop web browsers

- [Setup](#setup)
  - [Requirements](#requirements)
  - [Build](#build)
- [Test](#test)
- [Deploy](#deploy)
- [More information about the Creat React App](#more-information-about-the-creat-react-app)

## Setup

### Requirements

To set up the development environment directly on your host computer:

1. You’ll need [Node.js](http://nodejs.org) installed (at least v10.x.x or higher). If you don't have Node installed, we
recommend installing [NVM](https://github.com/creationix/nvm) to assist managing multiple active Node.js versions.
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

### Setup issues

If you encounter any issues with this build process, e.g.:

```
$ npm run build
> sample-app-web@1.0.0 build /Users/unlucky-user/sample-app-web
> webpack --mode production

sh: webpack: command not found
```

You have probably hit a dependency conflict issue. To resolve this, do the following in the root of the repository:

1. `npm cache clean --force`
2. `rm -rf node_modules`
3. `npm install`
4. `npm run build`

## Test

### Testing locally

To run the application test suite (which uses Webdriver.io, Selenium, and Chrome) make sure the application is running 
on [http://localhost:3000](http://localhost:3000) (see above steps)

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
* https://saucelabs.github.io/sample-app-web

See: [.github/workflows/github-pages.yml GitHub Action](.github/workflows/github-pages.yml)
  
## More information about the Creat React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more 
information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Learn More

You can learn more in the 
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
  
