const tsConfig = require('./ts.js');
const globals = require('globals');

const tsTestConfig = {
  languageOptions: {
    globals: {
      ...globals.mocha
    },
  },
  rules: {
    'no-unused-expressions': 'off'
  },
};

module.exports = [
  ...tsConfig,
  tsTestConfig,
];
