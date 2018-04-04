#! /bin/bash

set -e

echo "Reseting database..."

# Clears database, ignore errors
sequelize db:drop > /dev/null || true &&
yarn createdb > /dev/null || true &&
yarn migrate > /dev/null &&
yarn seed > /dev/null

echo "Reset complete!"
