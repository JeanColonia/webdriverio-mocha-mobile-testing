const {config} = require('./wdio.shared.conf');
const path  = require('path');

config.specs = [
 '../test/specs/android/*.spec.js',
]

config.port = 4723;
config.capabilities = [
{
 'appium:platformName': 'Android',
 'appium:platformVersion': '9.0',
 'appium:deviceName': 'Google Pixel 3',
 'appium:automationName': 'UIAutomator2',
 'appium:app':path.join(process.cwd(),'app/android/zara.apk'),
 'appium:autoGrantPermissions': true
}
]
config.services = ['appium'],

config.specs=[
 path.join(process.cwd(),'./test/specs/android/*.spec.js'),
]


config.reporters=['allure'];
config.reporterOptions={
 allure: {
  outputDir: 'allure-result',
  disableWebdriverStepsReporting: true,
  disableWebdriverScreenshotsReporting: false,
  useCucumberStepReporter: false
}
}

exports.config = config;