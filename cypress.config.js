const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");
const cucumber = require('cypress-cucumber-preprocessor').default;

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("cypress\\config", `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found");
    return {};
  }
  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: "apq2c4",
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());

      // implement node event listeners here
      const file = config.env.configFile || "";

      return getConfigurationByFile(file);
    },
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
    retries: {
      runMode: 0,
      openMode: 0,
    },
    "specPattern": [
      "cypress/e2e/**/*.feature",
      "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"
    ],
   
    //excludeSpecPattern: "cypress/e2e/2-advanced-examples/*.cy.js",
    screenshotOnRunFailure: true,
    video: false,
    trashAssetsBeforeRuns: true,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },

    experimentalModifyObstructiveThirdPartyCode: true,
    chromeWebSecurity: false,
    env: {
      first_name: "Sarah",
      webdriveruni_contactus: "https://webdriveruniversity.com/",
    },
  },
});
