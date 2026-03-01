import type { Linter } from 'eslint';
import testConfig from './test';
import tsConfig from './ts';

export = [...tsConfig, testConfig.pop()] satisfies Linter.Config[]
