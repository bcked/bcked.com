# Contributing

Any contribution is welcome.

To avoid reliance on third party services, this project will require community support to extend and maintain the list of tracked token backings.

For the most part this only requires adding or updating data files.

If you want to contribute on the functionality of the webpage itself, you can fork the repository and propose changes through pull requests. The webpage is build using Svelte and development is done using NPM.

## How do I get set up?

### Install nvm

For the package management, we need to install Node. To install a specific version of Node, we will first install the [Node Version Management (nvm)](https://github.com/nvm-sh/nvm).

Download and install nvm:

```shell
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Reload the .bashrc:

```shell
source ~/.bashrc
```

### Install Node

You should now be able to list all available Node versions like this (``--lts`` for versions with long term support):

```shell
nvm list-remote --lts
```

You can find some information about the major versions and their long term support on the [release page of Node.js](https://nodejs.org/en/about/releases/).

You can install the latest v16 version with long term support with this command:

```shell
nvm install v16 --lts
```

Switch to the project folder and install the dependencies.

```shell
cd portal
npm install
```

## How to locally serve the page?

To see if everything is working you can start it up like that.

```shell
npm run dev -- --open
```

If everything worked correct, your browser should open `http://localhost:3000/`.

You can also use the VS code launch configuration `Debug Svelte App` via `F5` to debug the application.

## How do I run tests?

Execute:

```shell
npm test
```

## Building

To create a production version of your app:

```bash
npm run build
```
