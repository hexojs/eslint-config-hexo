const tsEslint = require('typescript-eslint');
const nodePlugin = require('eslint-plugin-n');
const jsConfig = require('./eslint.js');

const nodeConfig = {
  rules: {
    'n/no-unsupported-features/es-syntax': ['error', { 'ignores': ['modules'] }],
    'n/no-missing-import': ['error', { 'tryExtensions': ['.js', '.ts'] }]
  },
}

module.exports = [].concat(
  jsConfig,
  nodePlugin.configs["flat/mixed-esm-and-cjs"],
  ...tsEslint.configs.recommended,
  nodeConfig,
);
