import { test, expect } from '@playwright/test';

test('Keyboard Actions', async ({ page }) => {
  //Open URL
  await page.goto('https://gotranscript.com/text-compare');
 
  const textAreaToWrite = await page.locator("//textarea[@placeholder='Paste one version of the text here.']")

  await textAreaToWrite.fill('Hi from Anatoliy=)');

  //Ctrl + A
  await page.keyboard.press('Control+A');

  //Ctrl + C
  await page.keyboard.press('Control+C');

  //Tab
  await page.keyboard.press('Tab');

  //Ctrl + V
  await page.keyboard.press('Control+V');

  await page.waitForTimeout(5000)

});