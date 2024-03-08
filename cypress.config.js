const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://webdriveruniversity.com/",
    watchForFileChanges: true,
    defaultCommandTimeout: 30000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    pageLoadTimeout: 12000,
    viewportHeight: 800,
    viewportWidth: 1400,
    testIsolation: false,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    excludeSpecPattern: "cypress/e2e/2-advanced-examples/*.cy.js",
    excludeSpecPattern: "cypress/e2e/1-getting-started/*.cy.js",
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
