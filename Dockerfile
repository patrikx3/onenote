# Use an official Node base image with ARM64 support at LTS version
FROM arm64v8/node:lts

# Install software-properties-common and add the Snapcraft repository
RUN apt-get update && \
    apt-get install -y software-properties-common && \
    apt-add-repository ppa:snappy-dev/snapcraft && \
    apt-get update

# Install snapcraft
RUN apt-get install -y snapcraft

# Set the working directory
WORKDIR /app

# Copy your project files into the Docker image
COPY . /app

# Install project dependencies
RUN npm install
