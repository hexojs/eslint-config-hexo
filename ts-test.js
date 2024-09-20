import tsJs from './tsts';

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
