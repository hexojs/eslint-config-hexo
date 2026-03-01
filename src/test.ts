import type { Linter } from 'eslint';
import mochaPlugin from 'eslint-plugin-mocha';
import globals from 'globals';
import jsConfig from './eslint';

export = [
  ...jsConfig,
  {
    ...mochaPlugin.configs.recommended,
    languageOptions: {
      globals: globals.mocha
    },
    rules: {
      'no-unused-expressions': 0,
      'mocha/no-mocha-arrows': 0,
      'mocha/handle-done-callback': 0,
      'mocha/max-top-level-suites': 0
    }
  }
] satisfies Linter.Config[]
