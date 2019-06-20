module.exports = {
  name: 'demo-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/demo-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
