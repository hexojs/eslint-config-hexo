const { testConfig } = require('./test.js');
const tsConfig = require('./ts.js');

module.exports = [
  ...tsConfig,
  testConfig,
];
