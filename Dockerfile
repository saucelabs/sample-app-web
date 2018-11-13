# base image
FROM node:10-alpine
# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json       /usr/src/app/package.json
COPY package-lock.json       /usr/src/app/package-lock.json
COPY src                /usr/src/app/src
COPY webpack.config.js      /usr/src/app/webpack.config.js 
COPY .babelrc           /usr/src/app/.babelrc 
RUN npm install 
RUN npm run build
