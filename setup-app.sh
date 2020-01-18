#!/bin/bash

echo "Updating installed packages..."
sudo apt-get update -y
sudo apt-get upgrade -y

# Install NodeJS 10 (and try not to think too much about how scary it
# is to curl a random URL on the internet and pass it to a root shell).
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs nginx libnss3 default-jdk

echo "Updating NPM to latest..."

# Update NPM
sudo npm i npm@latest -g

# Point nginx at our dist directory, so it serves our build contents
sudo rm -rf /var/www/html
sudo ln -s /usr/local/saucelabs/sample-app-web/dist /var/www/html

# Enable and start nginx now that we're done
sudo systemctl enable nginx
sudo systemctl start nginx

wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb
rm google-chrome-stable_current_amd64.deb

# Need to do this to pull down all the dependencies needed by Chrome
sudo apt-get --fix-broken install -y

# Run a build of our app to pull down all of the dependencies
pushd /usr/local/saucelabs/sample-app-web
npm install