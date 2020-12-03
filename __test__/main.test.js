const {Builder} = require('selenium-webdriver');
const { runA11ySelenium } = require('@a11ycore/selenium');
const { normaliseBuild } = require('@a11ycore/utils');
const { reporter } = require('@a11ycore/reporter');

(async function checkA11yTheWebUiGuy() {
  const args = process.argv.reverse();
  const apiKey = args[0];
  const projectId = args[1];
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://thewebuiguy.com');
    const results = await runA11ySelenium(driver, {});
    const normalResults = normaliseBuild(projectId, results);
    await reporter(projectId, apiKey, normalResults);
  } catch(error) {
    console.error(error)
  } finally {
    await driver.quit();
  }
})();