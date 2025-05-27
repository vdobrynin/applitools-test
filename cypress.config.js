const { defineConfig } = require("cypress");
const eyesPlugin = require('@applitools/eyes-cypress')

module.exports = defineConfig({
  viewportHeight: 900, //1200,
  viewportWidth: 1440, //1920, 
  e2e: {
    baseUrl: "http://localhost:4200",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

require('@applitools/eyes-cypress')(module);