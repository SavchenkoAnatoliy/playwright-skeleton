import { test, expect } from '@playwright/test';


//To start to record use this command - npx playwright codegen  
test('CodeGen Recorded test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('anatoliy58');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('strongpass123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});