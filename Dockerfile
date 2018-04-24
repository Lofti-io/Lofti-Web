FROM node:latest

# Create working directory
WORKDIR /usr/app

# Install NPM packages
COPY ./package.json /usr/app/package.json
COPY ./yarn.lock /usr/app/yarn.lock
RUN yarn install --silent

# Add app code
COPY . /usr/app

# Use this port
EXPOSE 8000
