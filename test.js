import eslint from './eslint.js';
import globals from 'globals';

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

export default [
  ...eslint,
  testConfig,
];
