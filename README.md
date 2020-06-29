# What is this codebase?
This is the Sauce Labs Sample Application which is designed to be used from desktop web browsers

- [Setup](#Setup)
  - [Build](#Build)
  - [Run](#Run)
  - [Test](#Test)
- [Deploying](#Deploying)


# Setup
There are 2 ways to use this project. 

- use an existing Nodejs setup where you already have a Development/Test environment set up which has all dependencies installed, like Chrome, Java and all prerequisites for ReactJS, see [Node development environment](#node-development-environment)
- use [Vagrant](#vagrant) which gives you all the tools and dependencies out of the box

## Node development environment

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

## Vagrant
To set up the development environment for this sample app:

1. Install [Vagrant](https://www.vagrantup.com/)
2. Install [VirtualBox](https://www.virtualbox.org/)
3. Run the `setup-env.sh` script in the root of the repository

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
```

You have probably hit a dependency conflict issue. To resolve this, do the following in the root of the repository:

1. `npm cache clean --force`
2. `rm -rf node_modules`
3. `npm install`
4. `npm run build`

## Build

To build the application:

1. `vagrant ssh` inside the project folder
2. On the VM: `cd /usr/local/saucelabs/sample-app-web`
3. On the VM: `npm run build`

## Run

To run the built application (which is a static website):

1. Open _[project-root]_`/dist/index.html` in a web browser
2. Click around - this is the app!


## Test

### With Node in your development environment

To run the application test suite (which uses Webdriver.io, Selenium, and Chrome) make sure the application is running on [http://localhost:3000/](http://localhost:3000/) (see above steps)

1. `npm test`

This will run the application test suite

### With Vagrant

To run the application test suite (which uses Webdriver.io, Selenium, and Chrome):

1. `vagrant ssh` inside the project folder
2. On the VM: `cd /usr/local/saucelabs/sample-app-web`
3. On the VM: `npm test.vagrant`

This will run the application test suite.

# Deploying

Merges to master will automatically deploy to:
* https://www.saucedemo.com
* https://saucelabs.github.io/sample-app-web/

See: [.github/workflows/github-pages.yml GitHub Action](.github/workflows/github-pages.yml)