import { test, expect } from '@playwright/test';

test('Assertions test', async ({ page }) => {
    //Open URL
  await page.goto('https://demo.nopcommerce.com/register');
 
  //HARD ASSERTIONS
  //1) expect Page has URL
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

  //2) expect Page has Title
  await expect(page).toHaveTitle('nopCommerce demo store. Register')

  //5) expect checkbox or radio button is checked
  const maleRadioButton = await page.locator('#gender-male')
  await maleRadioButton.click()
  await expect(maleRadioButton).toBeChecked()

  //SOFT ASSERTIONS
  //1) expect Page has URL
  await expect.soft(page).toHaveURL('demo.nopcommerce.com/register')

  //2) expect Page has Title
  await expect.soft(page).toHaveTitle('demo store. Register')

  //5) expect checkbox or radio button is checked
  await maleRadioButton.click()
  await expect.soft(maleRadioButton).toBeChecked()


});