import eslint from './eslint';

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
  eslint,
  testConfig,
];
