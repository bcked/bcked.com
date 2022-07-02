<p align="center">
  <a href="https://github.com/Spenhouet/backed/actions/workflows/deploy.yml"><img src="https://github.com/Spenhouet/backed/actions/workflows/deploy.yml/badge.svg" alt="Build Status"></a><a href="https://github.com/Spenhouet/backed/actions/workflows/pages/pages-build-deployment"><img src="https://github.com/Spenhouet/backed/actions/workflows/pages/pages-build-deployment/badge.svg" alt="Deploy Status"></a>
</p>

<p align="center">Asset backing visualized.</p>

<p align="center"><em>Check it out at <a href="https://spenhouet.com/backed/">spenhouet.com/backed</a>.</em></p>

## Features

TBD

## Risk and Liability

By no means should the provided data be used to make financial decisions.
The shown data can be wrong, biased, or simply outdated.

## Contribution

Any contribution is welcome.

To avoid reliance on third party services, this project will require community support to extend and maintain the list of tracked token backings.

For the most part this only requires adding or updating data files.

If you want to contribute on the functionality of the webpage itself, you can fork the repository and propose changes through pull requests. The webpage is build using Jekyll and development is supported by the official Jekyll Docker container image.

For local development, Jekyll can be run in server mode inside the container. It will watch for changes, rebuild the site, and provide access through its included web server. You can then check the results of changes by reloading http://localhost:4000/ in a browser.

```bash
docker run --rm --volume="$PWD:/srv/jekyll:Z" -p 4000:4000 jekyll/jekyll:4.2.2 jekyll serve
```

If you provide a ``Gemfile`` and would like to update your ``Gemfile.lock`` you can run

```bash
docker run --rm --volume="$PWD:/srv/jekyll:Z" -it jekyll/jekyll:4.2.2 bundle update
```

## License

This tool is an open source community project released under the [GNU General Public License, Version 3](LICENSE).