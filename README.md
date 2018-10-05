# What is this codebase?
This is the Sauce Labs Sample Application which is designed to be used from desktop web browsers

# Setup

To set up the development environment for this sample app:

1. Install [Vagrant](https://www.vagrantup.com/)
2. Install [VirtualBox](https://www.virtualbox.org/)
3. Run the `setup-env.sh` script in the root of the repository
4. There is no step 4, you're done!

# Build

To build the application:

1. `vagrant ssh` inside the project folder
2. On the VM: `cd /usr/local/saucelabs/sample-app-web`
3. On the VM: `./build-app.sh`
4. Again, no step 4. The build is complete!

# Run

To run the built application (which is a static website):

1. Open _[project-root]_`/bin/index.html` in a web browser
2. Click around - this is the app!