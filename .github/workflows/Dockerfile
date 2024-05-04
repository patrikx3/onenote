FROM arm64v8/ubuntu:latest

# Setup environment and install necessary packages
RUN apt-get update && apt-get install -y \
    curl \
    software-properties-common \
    gnupg

# Add the NodeSource repository for the latest Node.js LTS version
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -

# Install Node.js LTS and Snapcraft
RUN apt-get update && apt-get install -y \
    nodejs \
    snapcraft

# Set the working directory
WORKDIR /app

# Copy your project files into the Docker image
COPY . /app

# Install project dependencies
RUN yarn install

# Build your Electron app (assuming npm script is correctly set)
ENV NODE_ENV=production

RUN node ./scripts/fix-packages-publish.js before
RUN npm run publish-electron-arm64 --verbose
RUN node ./scripts/fix-packages-publish.js after

# Optional: specify where the snap file should be stored (if you want to copy it out)
# VOLUME [ "/output" ]
# RUN cp *.snap /output/
