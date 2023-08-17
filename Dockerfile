#
# Multi stage container build
#

# Get base container from dockerhub
FROM node:18-alpine as base

#
# Stage 1
# Set the stage for building the application
#

# Declare the build container
FROM base as stage
# Set build directory
WORKDIR /build
# Copy only package files
COPY package*.json ./
# Install dependancies
RUN npm install

#
# Stage 2
# Us the staged container to build the application components
#

FROM stage as build
WORKDIR /build

# Copy files from project
COPY . .
# Build components
RUN npm build:server
RUN npm build:app

#
# Stage 3
# Create a new container with only the build artifact
#

FROM base as final
WORKDIR /app
COPY --from=build /build/dist .
CMD ["node", "."]






