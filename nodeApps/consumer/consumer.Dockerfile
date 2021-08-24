FROM node:alpine3.14
WORKDIR /usr/src/app
RUN npm install -g nodemon
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install \
  && npm cache clean --force \
  && mv /usr/src/app/node_modules /node_modules
COPY . .