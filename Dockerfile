FROM node:latest

# Create unprivileged user
RUN useradd --user-group --create-home --shell /bin/false app

# Home dir
ENV HOME=/home/app
WORKDIR $HOME/lofti

# Copy rest of files
COPY . $HOME/lofti

# Use this port
EXPOSE 8000
