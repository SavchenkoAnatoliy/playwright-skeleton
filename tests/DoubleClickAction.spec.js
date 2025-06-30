import { test, expect } from '@playwright/test';
import { ECDH } from 'crypto';

test('Double Click test', async ({ page }) => {
    //Open URL
  await page.goto('https://testautomationpractice.blogspot.com/');

  const buttonCopy = await page.locator("//button[normalize-space()='Copy Text']")

  //double click
  await buttonCopy.dblclick();

  await expect(await page.locator('#field2')).toHaveValue('Hello World!')

  await page.waitForTimeout(2000);

});


