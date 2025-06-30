import { test, expect } from '@playwright/test';

test('Multi Select Dropdown test', async ({ page }) => {
    //Open URL
  await page.goto('https://testautomationpractice.blogspot.com');
 
  //Select multiple options from multi select dropdown
  await page.selectOption('#colors', ['Blue', 'Red', 'Yellow'])

  //Assertions
  //1) Check number of options in dropdown
  const options = await page.locator('#colors option')
  await expect(options).toHaveCount(7); // Total colors - 7

  //2) check number of options in dropdown using JS array
  const sameOptions = await page.$$('#colors option')
  console.log("Number of options: ", sameOptions.length)
  await expect(sameOptions.length).toBe(7);

  //3) check presence of value in the dropdown
  const content = await page.locator('#colors').textContent()
  await expect(content.includes('Blue')).toBeTruthy();
  await expect(content.includes('Black')).toBeFalsy();

  await page.waitForTimeout(5000);

});