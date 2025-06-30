import { test, expect } from '@playwright/test';

//By default all alerts are dismissed on Playwright
test.skip('Dialog Window Handler test with OK button', async ({ page }) => {
    //Open URL
  await page.goto('https://testautomationpractice.blogspot.com/');

  //Enable alert handling 
  page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alert box!')
    await dialog.accept();


  })

  await page.click('#alertBtn');

  await page.waitForTimeout(5000);

});

test.skip('Dialog Window Handler test with OK and CANCEL button', async ({ page }) => {
    //Open URL
  await page.goto('https://testautomationpractice.blogspot.com/');

  //Enable alert handling
  page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('confirm')
    expect(dialog.message()).toContain('Press a button!')
    await dialog.accept();
    //await dialog.dismiss();
  })

  await page.click('#confirmBtn');

  await expect(page.locator('#demo')).toHaveText('You pressed OK!');

  await page.waitForTimeout(5000);

});

test('Dialog Window Handler test with Promt Dialog', async ({ page }) => {
    //Open URL
  await page.goto('https://testautomationpractice.blogspot.com/');

  //Enable alert handling
  page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('prompt')
    expect(dialog.message()).toContain('Please enter your name:')
    expect(dialog.defaultValue()).toContain('Harry Potter')
    await dialog.accept('Anatoliy');
    //await dialog.dismiss();
  })

  await page.click('#promptBtn');

  await expect(page.locator('#demo')).toHaveText('Hello Anatoliy! How are you today?');

  await page.waitForTimeout(5000);

});


