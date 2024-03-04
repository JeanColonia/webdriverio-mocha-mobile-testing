const {config} = require('./wdio.shared.conf');

config.user = 'jeancolonia_5gfuSK';
config.key = '3qbmDPtGYV37bHkcruiX';
config.specs = [
 '../test/specs/android/purchase.spec.js'
]


config.capabilities = [
{
 platformName: "android",
 'appium:platformVersion': "9.0",
 'appium:deviceName': "Google Pixel 3",
 'appium:automationName': "UIAutomator2",
 'appium:app':"bs://b91ff8c47d569b3f6ddaacc82e2a8c218f85eb21",
 'appium:autoGrantPermissions': true
}
]

config.services = ['browserstack'];


exports.config = config;