# Stage 1: Build the Electron app with Node.js on an ARM64 architecture
FROM node:lts as builder

# Set the working directory
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Here, ensure all environment variables needed are set
ENV NODE_ENV=production

RUN npm run publish-electron-arm64 --verbose

# Stage 2: Use an ARM64 Ubuntu image to install and use Snapcraft
FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y software-properties-common && \
    add-apt-repository universe && \
    apt-get update && \
    apt-get install -y snapcraft

# Continue with your setup

# Copy the built app from the first stage
COPY --from=builder /app /app

# Set the working directory
WORKDIR /app

# Build the snap (assuming snapcraft.yaml is configured)
# Uncomment the next line if you need to build the snap as part of the Docker build
# RUN snapcraft
