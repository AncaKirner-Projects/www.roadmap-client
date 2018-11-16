module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}'],
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
    '^.+\\.js$': 'babel-jest'
  }
};
