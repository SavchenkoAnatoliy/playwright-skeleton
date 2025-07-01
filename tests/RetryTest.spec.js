import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/Homepage';
import { CartPage } from './pages/CartPage';

test('Retry feature with Page Object Model test', async ({page})=>{
  /**
   * To simulate Flaky tests need to manually corrupt the first test execution 
   * and playwright will relaunch it with if the retries variable was correctly set.
   */
  //Login
  const login = new LoginPage(page)
  await login.gotoLoginPage();
  await login.login('anatoliy58','strongpass123');
  await page.waitForTimeout(3000)

  //Home Page
  const home = new HomePage(page)
  await home.addProductToCart('Iphone 6 32gb');
  await page.waitForTimeout(3000)
  await home.gotoCart();

  //Cart page
  const cart = new CartPage(page)
  await page.waitForTimeout(3000)
  const status = await cart.checkProductInCart('Iphone 6 32gb')
  expect(status).toBe(true); //Need to be true to pass 

} )