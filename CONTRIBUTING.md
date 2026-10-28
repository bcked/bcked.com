# Contributing

Any contribution is welcome.

To avoid reliance on third party services, this project will require community support to extend and maintain the list of tracked token backings.

Data about assets, issuers and chains is collected in [bcked-adapters](https://github.com/bcked/bcked-adapters) and published through the [bcked API](https://api.bcked.com/docs/). To add or update an asset, contribute there.

This repository contains the website. It is built with [SvelteKit](https://svelte.dev/docs/kit) and [Bun](https://bun.sh/). If you want to contribute to the website itself, fork the repository and propose changes through pull requests.

## How do I get set up?

Install Bun:

```shell
curl -fsSL https://bun.sh/install | bash
```

Install the dependencies:

```shell
bun install
```

## How to locally serve the page?

By default the page loads its data from https://api.bcked.com:

```shell
bun run dev
```

To develop against a local API build from bcked-adapters (`bun run api` in that repository), serve it and point the page to it:

```shell
bun scripts/serve-api.ts ../bcked-adapters/api
API_URL=http://localhost:5174 bun run dev
```

## How do I run tests and checks?

```shell
bun run check
bun run lint
bun run test
```

## Building

The site is prerendered into static files in `./build`:

```shell
bun run build
bun run preview
```

## License of contributions

The project is licensed for non-commercial use, and commercial licenses are sold separately (see the
[README](README.md#license)). By submitting a contribution you confirm that you have the right to
submit it, and you grant Sebastian Penhouet a perpetual, worldwide, royalty-free license to use,
modify and relicense your contribution, including under commercial licenses.
