const tseslint = require('typescript-eslint');
const nodePlugin = require('eslint-plugin-n');
const eslint = require('./eslint.js');

const nodeConfig = {
  rules: {
    'n/no-unsupported-features/es-syntax': ['error', { 'ignores': ['modules'] }],
    'n/no-missing-import': ['error', { 'tryExtensions': ['.js', '.ts'] }]
  },
}

module.exports = [].concat(
  eslint,
  nodePlugin.configs["flat/mixed-esm-and-cjs"],
  ...tseslint.configs.recommended,
  nodeConfig,
);
