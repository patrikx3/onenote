# Use an official Node base image with ARM64 support at LTS version
FROM arm64v8/node:lts

# Install snapcraft and other dependencies
RUN apt-get update && apt-get install -y snapcraft

# Set the working directory
WORKDIR /app

# Copy your project files into the Docker image
COPY . /app

# Install project dependencies
RUN npm install
