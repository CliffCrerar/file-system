# FileSystem

TODO: Introduction

# Prerequisites

TODO:

# Run in dev

### Steps:

1. Clone this repo:

	- `git clone https://github.com/CliffCrerar/file-system.git file-system`

2. Change to the file system directory:

	- `cd file-system`

3. Run the `npm` command to start the app:

	- `npm run dev`

> The `npm run dev` command builds both the `api` (express server) and the `app` (angular front end) to the `dist` directory in the root of the project and runs both components in `watch` mode. 

4. Now all the components are running in watch mode and code changes will rebuild each of the two components (api & app). To start the application and view it in the browser run:

	- `npm start`

> default port is 3000

# Containerization

Container image is created using a multi stage approach as per the below graph.

![Multi Stage Container Build Diagram](/src/assets/mscb.png)

1. The base container pulled from [Docker hub](https://hub.docker.com/_/node/).
2. The staging container is created from the base container.
3. The build container is created from the build container.
4. Only the build artifact is taken from the build container, leaving behind all the fluff and keeping the container to be published to the registry with only the files needed to run the app.
5. The container is published to the container registry in duplicate. Replacing the existing container with latest tag and the duplicate carrying the build number for redundancy and history.


