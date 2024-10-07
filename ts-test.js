import tsJs from 'ts.js';
import globals from 'globals';

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

export default [
  tsJs,
  tsTestConfig,
];
