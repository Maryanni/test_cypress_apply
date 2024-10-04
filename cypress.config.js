const { defineConfig } = require("cypress");
require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com/",
    specPattern: "cypress/integration/**/*.spec.js",
    supportFile: "cypress/support/index.js",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
