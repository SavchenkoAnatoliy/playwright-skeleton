const { test, expect } = require('@playwright/test');

  test('Test1', async ({ page }) => {
    console.log('this is test 1 running...')
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {waitUntil: 'load'});
    await expect(page).toHaveTitle("OrangeHRM");
  });
  
  test('Test2', async ({ page }) => {
    console.log('this is test 2 running...')
    await page.goto('https://www.orangehrm.com/', {waitUntil: 'load'});
    await expect(page).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ");
  });
  
  test('Test3', async ({ page }) => {
    console.log('this is test 3 running...')
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle("Automation Testing Practice");
  });
  
  test('Test4', async ({ page }) => {
    console.log('this is test 4 running...')
    await page.goto('http://demoblaze.com/', {waitUntil: 'load'});
    await expect(page).toHaveTitle("SHOP");
  });