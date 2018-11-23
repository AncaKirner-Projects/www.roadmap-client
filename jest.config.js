require('ignore-styles').default(['.css', '.sass', '.scss']);

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx}',
    '!<rootDir>/src/index.js',
    '!<rootDir>/src/serviceWorker.js'
  ],
  coveragePathIgnorePatterns: [
    'public',
    'node_modules',
    '<rootDir>/src/components/layers/styles'
  ],
  coverageDirectory: '__coverage__',
  coverageReporters: ['lcov'],
  testMatch: ['**/__tests__/**/*.test.js'],
  setupFiles: ['<rootDir>/__tests__/jest-setup.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform'
  }
};
