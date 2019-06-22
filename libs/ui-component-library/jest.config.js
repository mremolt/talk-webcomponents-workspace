module.exports = {
  name: 'ui-component-library',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(lit-html|lit-element|my-project)/)'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/libs/ui-component-library',
  runner: '@jest-runner/electron',
  testEnvironment: '@jest-runner/electron/environment'
};
