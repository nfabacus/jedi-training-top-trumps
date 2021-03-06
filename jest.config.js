module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '@/common/(.*)': '<rootDir>/src/common/$1',
    '@/pages/(.*)': '<rootDir>/src/pages/$1',
    '@/theme/(.*)': '<rootDir>/src/theme/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  coveragePathIgnorePatterns: [
    '<rootDir>/mocks/handlers.ts',
    '<rootDir>/src/common/utils/index.ts',
    '<rootDir>/src/common/apollo.ts'
  ]
}