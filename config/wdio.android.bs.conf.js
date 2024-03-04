const {config} = require('./wdio.shared.conf');

config.user =process.env.BROWSERSTACKS_USERNAME;
config.key =process.env.BROWSERSTACKS_KEY;

config.specs = [
 '../test/specs/android/purchase.spec.js'
]


config.capabilities = [
{
 platformName: "android",
 'appium:platformVersion': "9.0",
 'appium:deviceName': "Google Pixel 3",
 'appium:automationName': "UIAutomator2",
 'appium:app':process.env.BROWSERSTACKS_APP_ID,
 'appium:autoGrantPermissions': true
}
]

config.services = ['browserstack'];


exports.config = config;