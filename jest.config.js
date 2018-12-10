module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: '<rootDir>/coverage',
  setupFiles: ['./lib/jest/shim.js', './lib/jest/polyfill.js'],
  testMatch: ['<rootDir>/test/**/*.test.js'],
};
