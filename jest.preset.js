const nxPreset = require('@nx/jest/preset').default;

const globalCoverageConfiguration = {
  collectCoverage: true,
  coverageDirectory: `${process.env.NX_WORKSPACE_ROOT}/coverage/${process.env['NX_TASK_TARGET_PROJECT']}`,
  coverageReporters: ['cobertura']
};

module.exports = {
  ...nxPreset,
  ...globalCoverageConfiguration
};
