const {Builder} = require('selenium-webdriver');
const { runA11ySelenium } = require('@a11ycore/selenium');
const { normaliseBuild } = require('@a11ycore/utils');
const { reporter } = require('@a11ycore/reporter');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://thewebuiguy.com');
    const results = await runA11ySelenium(driver, {});
    console.log(results);
  } finally {
    await driver.quit();
  }
})();