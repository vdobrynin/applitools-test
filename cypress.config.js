const { defineConfig } = require("cypress");
const eyesPlugin = require('@applitools/eyes-cypress')

module.exports = defineConfig({
  viewportHeight: 1329,
  viewportWidth: 2065,
  e2e: {
    baseUrl: "http://localhost:4200",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

require('@applitools/eyes-cypress')(module);