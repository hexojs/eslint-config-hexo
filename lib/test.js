const jsConfig = require('./eslint.js');
const globals = require('globals');
const mochaPlugin = require('eslint-plugin-mocha');

const testConfig = {
  ...mochaPlugin.configs.flat.recommended,
  languageOptions: {
    globals: {
      ...globals.mocha
    },
  },
  rules: {
    'no-unused-expressions': 0,
    "mocha/no-mocha-arrows": 0,
    "mocha/handle-done-callback": 0,
    "mocha/max-top-level-suites": 0,
  },
};

module.exports = [
  ...jsConfig,
  testConfig
];
