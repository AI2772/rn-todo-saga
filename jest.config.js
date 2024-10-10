module.exports = {
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['./jest-setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
    '^.+\\.svg$': 'jest-transform-stub',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-code-push|react-native-linear-gradient)/)',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/build/', '/dist/', '/*.css/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx|js|jsx)$',
  testEnvironment: 'node',
  watchman: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!*.css',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.tsx',
    '^react-native-code-push$': '<rootDir>/__mocks__/react-native-code-push.ts',
  },

};
