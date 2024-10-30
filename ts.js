import tseslint from 'typescript-eslint';
import nodePlugin from 'eslint-plugin-n';
import eslint from './eslint.js';

const nodeConfig = {
  rules: {
    'n/no-unsupported-features/es-syntax': ['error', { 'ignores': ['modules'] }],
    'n/no-missing-import': ['error', { 'tryExtensions': ['.js', '.ts'] }]
  },
}

export default [].concat(
  eslint,
  nodePlugin.configs["flat/mixed-esm-and-cjs"],
  ...tseslint.configs.recommended,
  nodeConfig,
);
