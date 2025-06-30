import { test, expect } from '@playwright/test';

test('Handle Inputbox test', async ({ page }) => {
    //Open URL
  await page.goto('https://demo.nopcommerce.com/register');
 
  //1) expect Page has URL
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

  //2) expect Page has Title
  await expect(page).toHaveTitle('nopCommerce demo store. Register')

  //Inputbox - FirstName
  await expect(await page.locator("//input[@id='FirstName']")).toBeVisible();
  await expect(await page.locator("//input[@id='FirstName']")).toBeEmpty();
  await expect(await page.locator("//input[@id='FirstName']")).toBeEditable();
  await expect(await page.locator("//input[@id='FirstName']")).toBeEnabled();

  await page.fill("//input[@id='FirstName']", 'Anatoliy');
  await page.waitForTimeout(5000)// pausing code
  

});