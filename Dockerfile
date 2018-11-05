# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json       /usr/src/app/package.json
COPY src                /usr/src/app/src
COPY webpack.config.js  /usr/src/app/webpack.config.js 
COPY .babelrc           /usr/src/app/.babelrc 
RUN npm install 
RUN npm run build
