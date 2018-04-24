## Lofti-Web

The web app for Lofti

## Building

1. Clone this repo
2. Make sure you have [Docker & Docker-compose](https://docs.docker.com/install/)
3. Ask an admin for the `docker-compose.yml` file, required to build this project
4. In the cloned directory  run: `docker-compose up`

## Adding dependencies

To add dependencies you can install it on the docker instance which
will modify both the `yarn.lock` and `package.json` files which can
then be committed.

1. Run `docker-compose run --rm lofti /bin/bash` to login into a container
2. Once logged in, run `yarn add [PACKAGE]` or any other commands you need
3. Commit your work!
