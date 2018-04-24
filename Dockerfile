FROM node:latest

# Create unprivileged user
RUN useradd --user-group --create-home --shell /bin/false app

# Home dir
ENV HOME=/home/app

# Copy yarn files and fix ownerships
COPY package.json yarn.lock $HOME/lofti/
RUN chown -R app:app $HOME/*

# Download dependencies
USER app
WORKDIR $HOME/lofti
RUN yarn install --silent

# Copy rest of files
USER root
COPY . $HOME/lofti
RUN chown -R app:app $HOME/*
USER app

# Use this port
EXPOSE 8000
