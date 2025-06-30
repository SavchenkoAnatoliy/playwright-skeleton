const { test, expect } = require('@playwright/test');


//For this feature it's necessary to turn ON auto-screenshots on playwright.config.js as showed below
/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer 
    trace: 'on-first-retry',
    screenshot:'on'*/

/*It will allow us to capture the screenshot at the end of each test automatically*/

test('Screenshot at the end of test', async ({page})=>{

  await page.goto('https://demoblaze.com/');

    //Login
  await page.click('id=login2');
  await page.fill('#loginusername', 'anatoliy58');
  await page.fill('#loginpassword', 'strongpass123');
  await page.click("//button[normalize-space()='Log in']");
} )