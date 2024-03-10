const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "apq2c4",
  e2e: {
    baseUrl: "https://webdriveruniversity.com/",
    watchForFileChanges: false,
    defaultCommandTimeout: 3000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    pageLoadTimeout: 12000,
    viewportHeight: 1080,
    viewportWidth: 1900,
    execTimeout: 10000,
    testIsolation: false,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    excludeSpecPattern: "cypress/e2e/2-advanced-examples/*.cy.js",
    screenshotOnRunFailure: true,
    video: false,
    trashAssetsBeforeRuns: true,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalModifyObstructiveThirdPartyCode: true,
    chromeWebSecurity: false,
    env: {
      first_name: "Sarah",
      webdriveruni_contactus: "https://webdriveruniversity.com/",
    },
  },
});
