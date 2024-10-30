const eslint = require('./eslint.js');
const globals = require('globals');
const mochaPlugin = require('eslint-plugin-mocha');

const testConfig = {
  languageOptions: {
    globals: {
      ...globals.mocha
    },
  },
  rules: {
    'no-unused-expressions': 'off'
  },
};

const mochaConfig = {
  ...mochaPlugin.configs.flat.recommended,
  rules: {
    "mocha/no-mocha-arrows": 0,
    "mocha/handle-done-callback": 0,
    "mocha/max-top-level-suites": 0,
  }
};

module.exports = [
  ...eslint,
  testConfig,
  mochaConfig,
];
