import type { Linter } from 'eslint';
import nodePlugin from 'eslint-plugin-n';
import { configs } from 'typescript-eslint';
import jsConfig from './eslint';

export = [
  ...jsConfig,
  ...nodePlugin.configs['flat/mixed-esm-and-cjs'],
  ...configs.recommended,
  {
    rules: {
      'n/no-unsupported-features/es-syntax': [
        'error',
        {
          ignores: ['modules']
        }
      ],
      'n/no-missing-import': [
        'error',
        {
          tryExtensions: ['.js', '.ts']
        }
      ]
    }
  }
] satisfies Linter.Config[]
