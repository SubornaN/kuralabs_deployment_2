const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://url-shortner-dev.us-east-1.elasticbeanstalk.com/',
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'results/cypress-this.reporter.xml',
      toConsole: true
    }
  }
})