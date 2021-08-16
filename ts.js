module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    './eslint.js',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'node/no-unsupported-features/es-syntax': ['error', { 'ignores': ['modules'] }],
    'node/no-missing-import': ['error', { 'tryExtensions': ['.js', '.ts'] }]
  }
};
