## How to run the server

### Installing dependencies

To install dependencies you need to have `node` and `npm` installed.

You can check the installation with

    node --version
    npm --version

If any of the commands report version number you have that one installed.


### Install dependencies

    npm install

### Running the dev server

For running the development server you should be able to run `npm run dev` which should start the server to localhost.

To make it reachable from other devices on your network, run `npm run dev -- --host`.

### Building

If you want to build the project for deployment to different website you should use `npm run build` command that makes `dist` folder with files for external server.