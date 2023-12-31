# Installing dependencies:
FROM node:18-alpine AS install-dependencies
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
 
 
# Creating a build:
FROM node:18-alpine AS create-build
WORKDIR /app
COPY --from=install-dependencies /app ./
RUN yarn build
USER node
 
 
# Running the application:
FROM node:18-alpine AS run
WORKDIR /app
COPY --from=install-dependencies /app/node_modules ./node_modules
COPY --from=create-build /app/dist ./dist
COPY package.json ./
CMD ["yarn", "start:prod"]
EXPOSE 3000