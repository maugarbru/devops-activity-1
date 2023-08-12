FROM node:18-alpine

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

VOLUME /app/src/core/db/

CMD [ "node", "dist/main.js" ]
