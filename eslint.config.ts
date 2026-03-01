import type { Linter } from 'eslint';
import tsConfig from './src/ts';

export default [
  ...tsConfig,
  {
    ignores: ['lib']
  }
] satisfies Linter.Config[];
