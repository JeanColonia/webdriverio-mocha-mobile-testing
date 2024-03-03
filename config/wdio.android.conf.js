const {config} = require('./wdio.shared.conf');
const path  = require('path');

config.specs = [
 '../test/specs/android/*.spec.js',
]

config.port = 4723;
config.capabilities = [
{
 'appium:platformName': 'Android',
 'appium:platformVersion': '11.0',
 'appium:deviceName': 'Pixel 3',
 'appium:automationName': 'UIAutomator2',
 'appium:app':path.join(process.cwd(),'app/android/ApiDemos-debug.apk'),
 'appium:autoGrantPermissions': true
}
]
config.services = ['appium'],

exports.config = config;