module.exports = {
  preset: 'ts-jest',
  coverageDirectory: 'coverages',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};