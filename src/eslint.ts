import eslintJs from '@eslint/js';
import type { Linter } from 'eslint';
import nodePlugin from 'eslint-plugin-n';
import globals from 'globals';

export = [
  eslintJs.configs.recommended,
  nodePlugin.configs['flat/recommended-script'],
  {
    languageOptions: {
      globals: globals.node
    },
    rules: {
      // override recommended
      'no-empty': [
        'error',
        {
          allowEmptyCatch: true
        }
      ],
      'no-unused-vars': [
        'error',
        {
          args: 'none'
        }
      ],
      // Possible Errors
      'no-extra-parens': [
        'error',
        'all',
        {
          conditionalAssign: false,
          returnAssign: false,
          nestedBinaryExpressions: false
        }
      ],
      // Best Practices
      'array-callback-return': 'error',
      'block-scoped-var': 'error',
      'curly': ['error', 'multi-line'],
      'dot-location': ['error', 'property'],
      'dot-notation': 'error',
      'eqeqeq': ['error', 'allow-null'],
      'no-else-return': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true
        }
      ],
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'no-proto': 'error',
      'no-return-assign': 'error',
      'no-void': 'error',
      'prefer-promise-reject-errors': 'error',
      'radix': 'error',
      'wrap-iife': 'error',
      'yoda': 'error',
      // Strict Mode
      'strict': 'error',
      // Variables
      'no-label-var': 'error',
      'no-undef-init': 'error',
      'no-use-before-define': ['error', 'nofunc'],
      // Node.js and CommonJS
      'handle-callback-err': 'error',
      'no-mixed-operators': 'error',
      'no-path-concat': 'error',
      // Stylistic Issues
      'array-bracket-spacing': 'error',
      'block-spacing': 'error',
      'brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: true
        }
      ],
      'comma-dangle': 'error',
      'comma-spacing': [
        'error',
        {
          before: false,
          after: true
        }
      ],
      'comma-style': ['error', 'last'],
      'computed-property-spacing': 'error',
      'eol-last': 'error',
      'func-call-spacing': 'error',
      'indent': [
        'error',
        2,
        {
          SwitchCase: 1
        }
      ],
      'key-spacing': [
        'error',
        {
          beforeColon: false,
          afterColon: true
        }
      ],
      'keyword-spacing': 'error',
      'linebreak-style': 'error',
      'lines-around-comment': [
        'error',
        {
          beforeBlockComment: true
        }
      ],
      'new-cap': 'error',
      'new-parens': 'error',
      'no-array-constructor': 'error',
      'no-extra-label': 'error',
      'no-multiple-empty-lines': 'error',
      'no-multi-assign': 'error',
      'no-nested-ternary': 'error',
      'no-new-object': 'error',
      'no-trailing-spaces': 'error',
      'no-unneeded-ternary': 'error',
      'no-whitespace-before-property': 'error',
      'one-var': ['error', 'never'],
      'operator-linebreak': ['error', 'before'],
      'quotes': ['error', 'single'],
      'semi': 'error',
      'semi-spacing': [
        'error',
        {
          before: false,
          after: true
        }
      ],
      'space-before-blocks': 'error',
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always'
        }
      ],
      'space-in-parens': 'error',
      'space-infix-ops': 'error',
      'space-unary-ops': [
        'error',
        {
          words: false,
          nonwords: false
        }
      ],
      'spaced-comment': 'error',
      'template-tag-spacing': 'error',
      'unicode-bom': 'error',
      // ECMAScript 6
      'arrow-parens': ['error', 'as-needed'],
      'arrow-spacing': 'error',
      'generator-star-spacing': ['error', 'after'],
      'no-confusing-arrow': [
        'error',
        {
          allowParens: true
        }
      ],
      'no-const-assign': 'error',
      'no-duplicate-imports': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'no-var': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': [
        'error',
        {
          ignoreReadBeforeAssign: true
        }
      ],
      'rest-spread-spacing': 'error',
      'template-curly-spacing': 'error',
      'yield-star-spacing': 'error'
    }
  }
] satisfies Linter.Config[]
