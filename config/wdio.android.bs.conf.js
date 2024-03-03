const {config} = require('./wdio.shared.conf');


config.user = 'jeancolonia_5gfuSK';
config.key = '3qbmDPtGYV37bHkcruiX';

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
 'appium:app':'bs://d2dd62cdb8bf050a2c04ec8060286108dfa78ed6',
 'appium:autoGrantPermissions': true
}
]

config.services = ['browserstack'],
exports.config = config;