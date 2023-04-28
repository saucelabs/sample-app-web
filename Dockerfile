FROM node:14

# install sauce connect
RUN curl -LO https://saucelabs.com/downloads/sc-4.8.2-linux.tar.gz
RUN tar xvf ./sc-4.8.2-linux.tar.gz
ENV PATH="$HOME/sc-4.8.2-linux/bin:$PATH"

# web app
WORKDIR /sample-app-web
COPY . .
RUN npm install