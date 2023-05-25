FROM node:14
WORKDIR /sample-app-web
COPY ./app/ .
WORKDIR /sample-app-web/app
RUN ls

RUN npm install
RUN npm run build
CMD ["npm", "run", "start"]
EXPOSE 3000