#!/bin/bash

echo "Updating installed packages..."
sudo apt-get update -y
sudo apt-get upgrade -y

# Install NodeJS 10 (and try not to think too much about how scary it
# is to curl a random URL on the internet and pass it to a root shell).
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs nginx

echo "Updating NPM to latest..."

# Update NPM
sudo npm i npm@latest -g

# Generate an SSL Certificate for Nginx
sudo openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout /etc/ssl/private/nginx.key -out /etc/ssl/certs/nginx.crt  -subj "/C=US/ST=CA/L=SanFrancisco/O=AWS/CN=sample-app.saucelabs.com"

# Enable and start nginx now that we're done
sudo systemctl enable nginx
sudo systemctl start nginx

# Run a build of our app to pull down all of the dependencies
pushd /usr/local/saucelabs/sample-app-web
npm install