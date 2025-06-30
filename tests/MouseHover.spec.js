import { test, expect } from '@playwright/test';

test('Mouse Hover example', async ({ page }) => {
    //Open URL
  await page.goto('https://testautomationpractice.blogspot.com/');


  const pointMeBtn = await page.locator("//button[normalize-space()='Point Me']")
  const mobilesBtn = await page.locator("//a[normalize-space()='Mobiles']")
  const laptopsBtn = await page.locator("//a[normalize-space()='Laptops']")

  //mouse hover
  await pointMeBtn.hover();
  await mobilesBtn.hover();

  expect(laptopsBtn).toBeVisible()
  
  await page.waitForTimeout(5000)

});