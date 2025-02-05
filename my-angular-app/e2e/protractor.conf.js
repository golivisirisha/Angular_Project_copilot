exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./src/**/*.e2e-spec.ts'],
  capabilities: {
    browserName: 'chrome'
  },
  onPrepare: () => {
    browser.waitForAngularEnabled(true);
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  }
};