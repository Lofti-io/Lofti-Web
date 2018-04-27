FROM node:latest

# Home dir
ENV HOME=/home/app
WORKDIR $HOME/lofti

# Copy rest of files
COPY . $HOME/lofti

# Use this port
EXPOSE 8000
