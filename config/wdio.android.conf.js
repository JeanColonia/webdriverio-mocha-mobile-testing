const {config} = require('./wdio.shared.conf');
const path  = require('path');
const allure = require('allure-commandline')


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

config.onComplete = function(exitCode, config, capabilities, results){
 const reportError = new Error('Could not generate Allure report')
 const generation = allure(['generate', 'allure-results', '--clean'])
 return new Promise((resolve, reject) => {
     const generationTimeout = setTimeout(
         () => reject(reportError),
         5000)

     generation.on('exit', function(exitCode) {
         clearTimeout(generationTimeout)

         if (exitCode !== 0) {
             return reject(reportError)
         }

         console.log('Allure report successfully generated') 
         resolve()
     })
 })
}

exports.config = config;