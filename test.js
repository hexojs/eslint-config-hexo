const eslint = require('./eslint.js');
const globals = require('globals');

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

module.exports = [
  ...eslint,
  testConfig,
];
