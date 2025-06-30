const { test, expect } = require('@playwright/test');

test('Screenshot HomePage test', async ({page})=>{

  await page.goto('https://demoblaze.com/');
  await page.screenshot({path: 'tests/screenshots/'+Date.now()+'_HomePage.png'});
} )

test('Screenshot of Full HomePage test', async ({page})=>{

  await page.goto('https://demoblaze.com/');
  await page.screenshot({path: 'tests/screenshots/'+Date.now()+'_FullHomePage.png', fullPage:true});
} )

test.only('Screenshot of Element on HomePage test', async ({page})=>{

  await page.goto('https://demoblaze.com/');
  const sliderOne = await page.locator("//img[@alt='First slide']")
  expect(sliderOne).toBeVisible()
  await page.locator("//img[@alt='First slide']").screenshot({path: 'tests/screenshots/'+Date.now()+'_SliderHomePage.png'});
} )