const { test, expect } = require('@playwright/test');


//For this feature it's necessary to turn ON video on playwright.config.js as showed below
/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer 
    trace: 'on-first-retry',
    screenshot:'on', 
    video: "on" // off on only-on-failure on-first-retry retry-with-video

/*
* `'on-first-retry'` – Record a trace only when retrying a test for the first time.
* `'on-all-retries'` – Record traces for all test retries.
* `'off'` – Do not record a trace.
* `'on'` – Record a trace for each test. (not recommended as it's performance heavy)
* `'retain-on-failure'` – Record a trace for each test, but remove it from successful test runs.

*/

test('Trace Viewer tests', async ({page})=>{

  await page.goto('https://demoblaze.com/');

    //Login
  await page.click('id=login2');
  await page.fill('#loginusername', 'anatoliy58');
  await page.fill('#loginpassword', 'strongpass123');
  await page.click("//button[normalize-space()='Log in']");
} )