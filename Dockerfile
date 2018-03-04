FROM node:alpine

# Install app dependencies
COPY package.json package.json
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

