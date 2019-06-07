# What is this codebase?
This is the Sauce Labs Sample Application which is designed to be used from desktop web browsers

# Setup
1. Clone the repository with `git clone https://github.com/saucelabs/sample-app-web.git`
2. Install all dependencies with `npm install`

# Available Scripts

In the project directory, you can run:

## `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## `npm test`

Launches the test runner.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## `npm test:watch`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## `npm run serve`

Builds the app for production to the `build` folder and starts a server so the site can be tested against a production build.<br>
The site will be hosted on [http://localhost:5000/](http://localhost:5000/)

## `npm run build-storybook`

Builds storybook<br>
It correctly bundles Storybook in the `storybook-static`-folder.

## `npm run storybook`

Starts storybook<br>

See the [https://storybook.js.org/](https://storybook.js.org/) for more information.

## `test.e2e.local.chrome`

Will run all E2E tests against a local hosted version of Chrome. Make sure you first run `npm run serve` to build and serve the app

## `test.e2e.sauce.all`

Will run all E2E tests against a lot of browsers on Sauce Labs on the EU DC. It needs to have a local Sauce Connect tunnel and `npm run serve` need to have been ran so there is a build server running.  
