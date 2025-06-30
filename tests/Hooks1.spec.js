import { test, expect } from '@playwright/test';

test('Home Page test', async ({ page }) => {
  //Open URL
  await page.goto('http://demoblaze.com/');

  //Login
  await page.click('id=login2');
  await page.fill('#loginusername', 'anatoliy58');
  await page.fill('#loginpassword', 'strongpass123');
  await page.click("//button[normalize-space()='Log in']");

  //Home Page
  const products = await page.$$(".hrefch");
  expect(products).toHaveLength(9)

  //Logout
  const logoutLink= await page.locator("//a[@id='logout2']")
  await logoutLink.click()
 

  await page.waitForTimeout(3000)

});

test('Add Product to cart test', async ({ page }) => {
  //Open URL
  await page.goto('http://demoblaze.com/');

  //Login
  await page.click('id=login2');
  await page.fill('#loginusername', 'anatoliy58');
  await page.fill('#loginpassword', 'strongpass123');
  await page.click("//button[normalize-space()='Log in']");

  //Add Product to cart
  //a[normalize-space()='Samsung galaxy s6']
  await page.click("//a[normalize-space()='Samsung galaxy s6']");
  await page.click("//a[normalize-space()='Add to cart']");

  page.on('dialog', async dialog=>{
    expect(dialog.message()).toContain('Product added')
    await dialog.accept();
  })


  //Logout
  await page.locator("//a[@id='logout2']").click()
 

  await page.waitForTimeout(3000)

});