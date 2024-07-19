FROM node:20.11.0-alpine3.19
RUN mkdir -p /botkeeperex/app
WORKDIR /botkeeperex/app
WORKDIR /
COPY package.json .
RUN npm install
COPY . .
CMD npm start