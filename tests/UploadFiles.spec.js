import { test, expect } from '@playwright/test';

test('Upload File or Files test', async ({ page }) => {
  //Open URL
  await page.goto('https://testautomationpractice.blogspot.com/');
 

  //Upload Single File
  const uploadSingleFileBtn = await page.locator('#singleFileInput')
  await page.waitForSelector('#singleFileInput');
  await uploadSingleFileBtn.setInputFiles('tests/uploadFiles/AnatoliySavchenko_CV.pdf');

  //Upload Multiple Files
  const uploadMultipleFilesBtn = await page.locator('#multipleFilesInput')
  await page.waitForSelector('#multipleFilesInput');
  await uploadMultipleFilesBtn.setInputFiles([
    'tests/uploadFiles/AnatoliySavchenko_CV.pdf',
    'tests/uploadFiles/MODULO ISCRIZIONE ADULTI.pdf',
    'tests/uploadFiles/image_2024-05-11_21-33-29.png'
  ]);

  //Removing files
  await uploadMultipleFilesBtn.setInputFiles([]);

  //Normaly some assertion need to be done, but on this website there are no ancors to make any check
  //expect(uploadSingleFileBtn).toHaveText('No File Selected')

  await page.waitForTimeout(5000)

});