module.exports = {
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  plugins: ['node'],
  rules: {
    // override recomennded
    'no-console': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-unused-vars': ['error', { args: 'none' }],
    // Possible Errors
    'no-extra-parens': ['error', 'all', {
      conditionalAssign: false,
      returnAssign: false,
      nestedBinaryExpressions: false
    }],
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
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true
    }],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    'radix': 'error',
    'wrap-iife': 'error',
    'yoda': ['error', 'never'],
    // Strict Mode
    'strict': 'error',
    // Variables
    'no-shadow-restricted-names': 'error',
    'no-use-before-define': ['error', 'nofunc'],
    // Node.js and CommonJS
    'handle-callback-err': 'error',
    // Stylistic Issues
    'no-path-concat': 'error',
    // ECMAScript 6
    // other
    'indent': ['error', 2, {
      SwitchCase: 1
    }],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'brace-style': ['error', '1tbs', {
      allowSingleLine: true
    }],
    'no-multiple-empty-lines': 'error',
    'one-var': ['error', {
      uninitialized: 'always',
      initialized: 'never'
    }],
    'operator-linebreak': ['error', 'before'],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true
    }],
    'space-unary-ops': ['error', {
      words: false,
      nonwords: false
    }],
    'comma-spacing': ['error', {
      before: false,
      after: true
    }],
    'semi-spacing': ['error', {
      before: false,
      after: true
    }],
    'func-call-spacing': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'no-trailing-spaces': 'error',
    'comma-style': ['error', 'last'],
    'eol-last': 'error',
    'space-infix-ops': 'error',
    'keyword-spacing': ['error', {}],
    'space-before-blocks': ['error', 'always'],
    'no-extra-label': 'error',
    'no-label-var': 'error',
    'no-undef-init': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'lines-around-comment': ['error', {
      beforeBlockComment: true
    }],
    'new-cap': 'error',
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'spaced-comment': ['error', 'always'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'arrow-spacing': 'error',
    'generator-star-spacing': ['error', 'after'],
    'no-confusing-arrow': ['error', {
      allowParens: true
    }],
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', 'after'],
    'no-mixed-operators': 'error'
  },
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6
  }
};
