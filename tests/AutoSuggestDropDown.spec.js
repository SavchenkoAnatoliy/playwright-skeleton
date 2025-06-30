import { test, expect } from '@playwright/test';

test('Auto Suggest Dropdown test', async ({ page }) => {
    //Open URL
  await page.goto('https://www.redbus.in');
 
  await page.getByRole('button', { name: ' From' }).click();
  await page.getByRole('textbox', { name: 'From' }).fill('DELHI');
  await page.waitForSelector("//div[contains(@class, 'listItem')]/div/div/div");

  const fromCityOptions = await page.$$("//div[contains(@class, 'listItem')]/div/div/div")
  for(let option of fromCityOptions){
    const value = await option.textContent()
    console.log(value);
    if (value.includes('ISBT Kashmiri Gate, Delhi')){
      await option.click();
      break;
    }
  }

  await page.waitForTimeout(5000);

});


