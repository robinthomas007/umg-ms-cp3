# Content Protection - V3 (CP3)

Created using [Vite](https://github.com/vitejs/vite)

## Pre-requisites

- Node version >=12.2.0
- Yarn

## Editor Integrations

I personally use [Visual Studio Code](https://code.visualstudio.com/) which comes handy for react development. Install tools in your own editor for better development.

- [ESLint](https://eslint.org) for linting.
- [Prettier](https://github.com/prettier/prettier) for formatting the code automatically.

Note: Git hooks are set in place to format & lint code. See `package.json`

## Installation

Note: SSO is enabled with Github. So cloning with HTTP(S) requeires authentication headers. Use SSH.

```bash
git clone <url>
cd cp3
yarn
```

### Vault setup

We use [Vault](https://www.vaultproject.io/) in development for used identification (i.e. for additional security)

- Make sure you are added to the Guardian Vault
- [Install](https://learn.hashicorp.com/tutorials/vault/getting-started-install) vault depending on your OS
- Set vault address `export VAULT_ADDR=https://vault.umusic.net` in terminal
- Only OIDC login in vault is enabled. So run `vault login -method=oidc -token-only`
- Open the link in your browser (if it doesn't open automatically in your default browser)
- Set value for `VAULT_TOKEN` (in .env) from the token you received from vault login.

## Development

Before starting development, please go through [GUIDELINES](/GUIDELINES.md)

```bash
yarn start
```

Note: See `scripts` in package.json for development in windows OS.
The development server opens the app at http://localhost:3000 in your default browser.

## Debugging

The browser's console is our best debugger. Yet download the developer tools for better debugging

- [React](https://github.com/facebook/react-devtools)
- If you use `redux`, see [Redux](https://github.com/gaearon/redux-devtools)

Also use devtools corresponding to any other packages you use in future.

For debugging in editor, go [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#debugging-in-the-editor)

## CI/CD

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
