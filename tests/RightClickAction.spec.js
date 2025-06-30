import { test, expect } from '@playwright/test';

test('RightClickAction test', async ({ page }) => {
    //Open URL
  await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html');


  const rightClickSampleBtn = await page.locator("//span[normalize-space()='right click me']")

  await rightClickSampleBtn.click({button: 'right'}); //Perform right click

  
  await page.waitForTimeout(5000)

});