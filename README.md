<p align="center">
  <a href="https://github.com/Spenhouet/svelte-gh-pages-quickstart/actions/workflows/deploy.yml"><img src="https://github.com/Spenhouet/svelte-gh-pages-quickstart/actions/workflows/deploy.yml/badge.svg" alt="Build Status"></a><a href="https://github.com/Spenhouet/svelte-gh-pages-quickstart/actions/workflows/pages/pages-build-deployment"><img src="https://github.com/Spenhouet/svelte-gh-pages-quickstart/actions/workflows/pages/pages-build-deployment/badge.svg" alt="Deploy Status"></a>
</p>

<p align="center">Template for Svelte with GitHub pages.</p>

<p align="center"><em>Check the result of this basic version out at <a href="https://spenhouet.com/svelte-gh-pages-quickstart/">spenhouet.com/svelte-gh-pages-quickstart</a>.</em></p>

Quickstart project to develop and deploy a static Svelte page to GitHub pages.

## Features

* Static page builds
* GitHub pages support
* Playwright for e2e testing
* Tailwind for styling
* Headless UI for basic UI components
* PostCSS support
* Typed Javascript

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

You can preview the production build with `npm run preview`.
Note: Because of absolute path resolution of assets, the static page does not work on local execution.
