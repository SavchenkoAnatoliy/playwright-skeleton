import { test, expect } from '@playwright/test';

//Qui possiamo rimuovere la variabile page dalla firma di ogni metodo perché abbiamo dichiarato una globale
let page;

test.beforeEach(async ({browser})=>{
  page = await browser.newPage();

  //Open URL
  await page.goto('http://demoblaze.com/');

  //Login
  await page.click('id=login2');
  await page.fill('#loginusername', 'anatoliy58');
  await page.fill('#loginpassword', 'strongpass123');
  await page.click("//button[normalize-space()='Log in']");

});

test.afterEach(async()=>{
  //Logout
  await page.locator("//a[@id='logout2']").click();
});

test('Home Page test', async () => {

  //Home Page
  const products = await page.$$(".hrefch")
  expect(products).toHaveLength(9) 

  await page.waitForTimeout(3000)

});

test('Add Product to cart test', async () => {
  //Add Product to cart
  //a[normalize-space()='Samsung galaxy s6']
  await page.click("//a[normalize-space()='Samsung galaxy s6']");
  await page.click("//a[normalize-space()='Add to cart']");

  page.on('dialog', async dialog=>{
    expect(dialog.message()).toContain('Product added')
    await dialog.accept();
  })

  await page.waitForTimeout(3000)

});