# Example App

Download this app and replace our code any time you want to build an Cloudflare app.

_Looking to use the latest JavaScript and CSS features? Check out our [Webpack example app](https://github.com/cloudflare-apps/example-webpack-app)!_

# Ideas

Potential ideas for new Cloudflare apps.

**[View the list →](https://github.com/cloudflare-apps/example-app/issues?q=is%3Aopen+is%3Aissue+label%3A%22App+Idea%22+sort%3Areactions-%2B1-desc)**

**[Submit a new idea →](https://github.com/cloudflare-apps/example-app/issues/new)**

## Setup

Fork and clone the repo or [download the latest release](https://github.com/cloudflare-apps/example-app/releases/latest).

Install the optional developer dependencies with `yarn install` (or `npm install`)

## Usage

- `npm run lint` Checks JavaScript formatting and attempts to fix any errors.

## Details

#### `source/app.js`

This is where the magic happens. Your app starts here.

#### `source/app.css`

Styles for your app.

#### `install.json`

This is where all the [installer options](https://www.cloudflare.com/apps/developer/docs/install-json) are added for the app.

[Syntax can be tricky](http://install.json.is/), so be sure to double check it.

#### `media/**`

An directory for icons, tile images, and screenshots.

[Download `media-templates.sketch`](https://github.com/cloudflare-apps/media-templates/raw/master/media-templates.sketch)

### Troubleshooting

- Consult [the Cloudflare developer documentation](https://www.cloudflare.com/apps/developer/docs/getting-started) for examples and API usage.

### Install button snippet

```html
<a href="https://www.cloudflare.com/apps/[[YOUR APP ALIAS]]/install?source=button">
  <img
    src="https://install.cloudflareapps.com/install-button.png"
    alt="Install [[YOUR APP NAME]] with Cloudflare"
    border="0"
    width="150">
</a>
```

and in Markdown:

```md
[![Install YOUR_APP_NAME with Cloudflare](https://install.cloudflareapps.com/install-button.png)](https://www.cloudflare.com/apps/YOUR_APP_ALIAS/install?source=button)
```
