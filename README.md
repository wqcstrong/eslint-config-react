# eslint-config-react

> A set of lint config rules for React project.

## Installation

```bash
yarn add -D @blucass/eslint-config-react

# or

npm install -D @blucass/eslint-config-react
```

## Usage

It's easy to integrate if you're using typescript. In your eslint config file, set `extends`:

```js
module.exports = {
  extends: ['@blucass/react']
}

# or

module.exports = require('@blucass/eslint-config-react')
```

That's all!

### Just for JS

> **NOTE**：you must provide a babel config file such as `babel.config.js` in the root directory, since will not parse any experimental syntax when no configuration file is found. [See more](https://www.npmjs.com/package/@babel/eslint-parser).

If you are just using `js/jsx`, what means you don't need typescript lint rules. The package also support it with `@blucass/eslint-config-react/lib/eslint`.

```js
module.exports = {
  extends: [require.resolve('@blucass/eslint-config-react/lib/eslint')]
}
```
