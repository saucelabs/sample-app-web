# What is this codebase?
This is the Sauce Labs Sample Application which is designed to be used from desktop web browsers

# Setup
There are 2 ways to use this project. 

- use a setup where you already have a Development/Test environment set up which has all dependencies installed, like Chrome, Java and all prerequisites for ReactJS, see [Already Set Up](./README.md#already-set-up)
- use Vagrant which gives you all the tools and dependencies out of the box, see [Vagrant](./README.md#vagrant).

## Already set up

In order to set up and use this project and start contributing follow this step by step guide:

1. You’ll need [Node.js](http://nodejs.org) installed (at least v10.x.x or higher). If you don't have Node installed, we recommend installing [NVM](https://github.com/creationix/nvm) to assist managing multiple active Node.js versions.
1. Fork the project. 
1. Clone the project somewhere on your computer
    
        git clone git@github.com:<your-username>/sample-app-web.git

1. Install all dependencies

        npm install

1. Build the application with

        npm run start
    
    This will build the application, start Chrome and load the website on [http://localhost:3000/](http://localhost:3000/)
 
1. Click around - this is the app!



### Test

To run the application test suite (which uses Webdriver.io, Selenium, and Chrome) make sure the application is running on [http://localhost:3000/](http://localhost:3000/), see above steps 

1. `npm test`

This will run the application test suite


## Vagrant
To set up the development environment for this sample app:

1. Install [Vagrant](https://www.vagrantup.com/)
2. Install [VirtualBox](https://www.virtualbox.org/)
3. Run the `setup-env.sh` script in the root of the repository
4. There is no step 4, you're done!

### Direct development environment setup

You can also choose to build the application directly on your host computer rather than via Vagrant/Virtualbox, however this is discouraged due to interdependency issues which frequently crop up when running multiple NPM projects in the same development environment. The usage of Vagrant/Virtualbox is intended to prevent this issue by giving this application a pristine build environment with only its dependencies present, however the usage of Vagrant/Virtualbox is not a strict requirement for building this application.

To set up the development environment directly on your host computer:

1. Install [NodeJS 10 LTS](https://nodejs.org/en/download/)
2. Update NPM to the latest version: `sudo npm i npm@latest -g`
3. Install the application dependencies - in the root of the repository: `npm install`
4. Install [Google Chrome](https://www.google.com/chrome/) for running the end-to-end tests
5. Install [OpenJDK 8](https://adoptopenjdk.net/) for running the end-to-end tests

### Setup issues

If you encounter any issues with this build process, e.g.:

```
$ npm run build
> sample-app-web@1.0.0 build /Users/unlucky-user/sample-app-web
> webpack --mode production

sh: webpack: command not found
npm ERR! file sh
npm ERR! code ELIFECYCLE
npm ERR! errno ENOENT
npm ERR! syscall spawn
npm ERR! sample-app-web@1.0.0 build: `webpack --mode production`
npm ERR! spawn ENOENT
npm ERR! 
npm ERR! Failed at the sample-app-web@1.0.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/unlucky-user/.npm/_logs/2019-06-19T02_09_09_082Z-debug.log
$
```

You have probably hit a dependency conflict issue. To resolve this, do the following in the root of the repository:

1. `npm cache clean --force`
2. `rm -rf node_modules`
3. `npm install`
4. `npm run build`

### Build

To build the application:

1. `vagrant ssh` inside the project folder
2. On the VM: `cd /usr/local/saucelabs/sample-app-web`
3. On the VM: `npm run build`
4. Again, no step 4. The build is complete!

#### Run

To run the built application (which is a static website):

1. Open _[project-root]_`/dist/index.html` in a web browser
2. Click around - this is the app!


#### Test

To run the application test suite (which uses Webdriver.io, Selenium, and Chrome):

1. `vagrant ssh` inside the project folder
2. On the VM: `cd /usr/local/saucelabs/sample-app-web`
3. On the VM: `npm test.vagrant`

This will run the application test suite.

## Test output

```
➜  sample-app-web git:(master) ✗ npm test

$ ./node_modules/.bin/wdio test/e2e/configs/wdio.local.chrome.conf.js

Execution of 7 spec files started at 2020-03-16T20:05:40.330Z

[0-6] RUNNING in chrome - /test/e2e/specs/login.spec.js
[0-5] RUNNING in chrome - /test/e2e/specs/item.list.spec.js
[0-4] RUNNING in chrome - /test/e2e/specs/item.details.spec.js
[0-1] RUNNING in chrome - /test/e2e/specs/checkout.complete.spec.js
[0-0] RUNNING in chrome - /test/e2e/specs/cart.summary.spec.js
[0-2] RUNNING in chrome - /test/e2e/specs/checkout.summary.spec.js
[0-3] RUNNING in chrome - /test/e2e/specs/checkout.personal.info.spec.js
[0-1] PASSED in chrome - /test/e2e/specs/checkout.complete.spec.js
[0-2] PASSED in chrome - /test/e2e/specs/checkout.summary.spec.js
[0-3] PASSED in chrome - /test/e2e/specs/checkout.personal.info.spec.js
[0-6] PASSED in chrome - /test/e2e/specs/login.spec.js
[0-5] PASSED in chrome - /test/e2e/specs/item.list.spec.js
[0-0] PASSED in chrome - /test/e2e/specs/cart.summary.spec.js
[0-4] PASSED in chrome - /test/e2e/specs/item.details.spec.js

 "spec" Reporter:
------------------------------------------------------------------
[chrome 80.0.3987.132 Mac OS X #0-1] Spec: /Users/Sauce/Git/sample-app-web/test/e2e/specs/checkout.complete.spec.js
[chrome 80.0.3987.132 Mac OS X #0-1] Running: chrome (v80.0.3987.132) on Mac OS X
[chrome 80.0.3987.132 Mac OS X #0-1] Session ID: 0bc0f8884f8d230cb354abd65af77b6d
[chrome 80.0.3987.132 Mac OS X #0-1]
[chrome 80.0.3987.132 Mac OS X #0-1] Checkout - Complete
[chrome 80.0.3987.132 Mac OS X #0-1]    ✓ should be able to test loading of login page
[chrome 80.0.3987.132 Mac OS X #0-1]
[chrome 80.0.3987.132 Mac OS X #0-1] 1 passing (2.7s)
------------------------------------------------------------------
[chrome 80.0.3987.132 Mac OS X #0-2] Spec: /Users/Sauce/Git/sample-app-web/test/e2e/specs/checkout.summary.spec.js
[chrome 80.0.3987.132 Mac OS X #0-2] Running: chrome (v80.0.3987.132) on Mac OS X
[chrome 80.0.3987.132 Mac OS X #0-2] Session ID: d4606de66ea107a7745f2b03eddde27b
[chrome 80.0.3987.132 Mac OS X #0-2]
[chrome 80.0.3987.132 Mac OS X #0-2] Checkout - Overview
[chrome 80.0.3987.132 Mac OS X #0-2]    ✓ should validate that we can continue shopping
[chrome 80.0.3987.132 Mac OS X #0-2]    ✓ should validate that we can cancel checkout and go to the inventory page
[chrome 80.0.3987.132 Mac OS X #0-2]    ✓ should validate that we have 1 product in our checkout overview
[chrome 80.0.3987.132 Mac OS X #0-2]
[chrome 80.0.3987.132 Mac OS X #0-2] 3 passing (4.3s)
------------------------------------------------------------------
[chrome 80.0.3987.132 Mac OS X #0-3] Spec: /Users/Sauce/Git/sample-app-web/test/e2e/specs/checkout.personal.info.spec.js
[chrome 80.0.3987.132 Mac OS X #0-3] Running: chrome (v80.0.3987.132) on Mac OS X
[chrome 80.0.3987.132 Mac OS X #0-3] Session ID: db4ef1abb5ad5d1059d9fdb0dc4654bd
[chrome 80.0.3987.132 Mac OS X #0-3]
[chrome 80.0.3987.132 Mac OS X #0-3] Checkout - Personal info
[chrome 80.0.3987.132 Mac OS X #0-3]    ✓ should validate that we can continue shopping
[chrome 80.0.3987.132 Mac OS X #0-3]    ✓ should validate that we can cancel the first checkout
[chrome 80.0.3987.132 Mac OS X #0-3]    ✓ should be able to continue the checkout
[chrome 80.0.3987.132 Mac OS X #0-3]
[chrome 80.0.3987.132 Mac OS X #0-3] 3 passing (4.6s)
------------------------------------------------------------------
[chrome 80.0.3987.132 Mac OS X #0-6] Spec: /Users/Sauce/Git/sample-app-web/test/e2e/specs/login.spec.js
[chrome 80.0.3987.132 Mac OS X #0-6] Running: chrome (v80.0.3987.132) on Mac OS X
[chrome 80.0.3987.132 Mac OS X #0-6] Session ID: 9f2fbc308744858da9800cc44c62fb87
[chrome 80.0.3987.132 Mac OS X #0-6]
[chrome 80.0.3987.132 Mac OS X #0-6] Login
[chrome 80.0.3987.132 Mac OS X #0-6]    ✓ should be able to test loading of login page
[chrome 80.0.3987.132 Mac OS X #0-6]    ✓ should be able to login with a standard user
[chrome 80.0.3987.132 Mac OS X #0-6]    ✓ should not be able to login with a locked user
[chrome 80.0.3987.132 Mac OS X #0-6]    ✓ should not be able to login with an invalid username
[chrome 80.0.3987.132 Mac OS X #0-6]    ✓ should not be able to login with an invalid password
[chrome 80.0.3987.132 Mac OS X #0-6]
[chrome 80.0.3987.132 Mac OS X #0-6] 5 passing (5s)
------------------------------------------------------------------
[chrome 80.0.3987.132 Mac OS X #0-5] Spec: /Users/Sauce/Git/sample-app-web/test/e2e/specs/item.list.spec.js
[chrome 80.0.3987.132 Mac OS X #0-5] Running: chrome (v80.0.3987.132) on Mac OS X
[chrome 80.0.3987.132 Mac OS X #0-5] Session ID: 434956e2aa60d20e0f9b6cbe4b37a261
[chrome 80.0.3987.132 Mac OS X #0-5]
[chrome 80.0.3987.132 Mac OS X #0-5] Inventory list
[chrome 80.0.3987.132 Mac OS X #0-5]    ✓ should validate that all products are present
[chrome 80.0.3987.132 Mac OS X #0-5]    ✓ should validate that the details of a product can be opened
[chrome 80.0.3987.132 Mac OS X #0-5]    ✓ should validate that a product can be added to a cart
[chrome 80.0.3987.132 Mac OS X #0-5]
[chrome 80.0.3987.132 Mac OS X #0-5] 3 passing (5.5s)
------------------------------------------------------------------
[chrome 80.0.3987.132 Mac OS X #0-0] Spec: /Users/Sauce/Git/sample-app-web/test/e2e/specs/cart.summary.spec.js
[chrome 80.0.3987.132 Mac OS X #0-0] Running: chrome (v80.0.3987.132) on Mac OS X
[chrome 80.0.3987.132 Mac OS X #0-0] Session ID: 32d2b2f5ce518b505f002b11bcecb6f1
[chrome 80.0.3987.132 Mac OS X #0-0]
[chrome 80.0.3987.132 Mac OS X #0-0] Cart
[chrome 80.0.3987.132 Mac OS X #0-0]    ✓ should validate that we can continue shopping
[chrome 80.0.3987.132 Mac OS X #0-0]    ✓ should validate that we can go from the cart to the checkout page
[chrome 80.0.3987.132 Mac OS X #0-0]    ✓ should validate that a product can be removed from the cart
[chrome 80.0.3987.132 Mac OS X #0-0]
[chrome 80.0.3987.132 Mac OS X #0-0] 3 passing (5.6s)
------------------------------------------------------------------
[chrome 80.0.3987.132 Mac OS X #0-4] Spec: /Users/Sauce/Git/sample-app-web/test/e2e/specs/item.details.spec.js
[chrome 80.0.3987.132 Mac OS X #0-4] Running: chrome (v80.0.3987.132) on Mac OS X
[chrome 80.0.3987.132 Mac OS X #0-4] Session ID: 4d25a80281a498b1e9aead254c2c56d0
[chrome 80.0.3987.132 Mac OS X #0-4]
[chrome 80.0.3987.132 Mac OS X #0-4] Swag Item Details
[chrome 80.0.3987.132 Mac OS X #0-4]    ✓ should validate that we can go back from the details to the inventory page
[chrome 80.0.3987.132 Mac OS X #0-4]    ✓ should validate that a product can be added to a cart
[chrome 80.0.3987.132 Mac OS X #0-4]    ✓ should validate that a product can be removed from the cart
[chrome 80.0.3987.132 Mac OS X #0-4]
[chrome 80.0.3987.132 Mac OS X #0-4] 3 passing (6.4s)


Spec Files:      7 passed, 7 total (100% completed) in 00:00:12 

✨  Done in 13.50s.
```
