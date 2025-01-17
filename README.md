# eslint-config-hexo

[![npm version](https://badge.fury.io/js/eslint-config-hexo.svg)](https://www.npmjs.com/package/eslint-config-hexo)

ESLint config for Hexo projects

## Installation

``` bash
$ npm install eslint-config-hexo --save-dev
```

## Usage

In `eslint.config.js`

``` js
const hexoTsLintConfig = require('eslint-config-hexo/ts');

module.exports = [
  ...hexoTsLintConfig,
  {
    languageOptions: {
      ecmaVersion: 2020,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/ban-ts-comment": 0,
      "@typescript-eslint/no-this-alias": 0
    }
  }
];
```

## License

MIT
