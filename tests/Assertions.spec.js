import { test, expect } from '@playwright/test';

test('Assertions test', async ({ page }) => {
    //Open URL
  await page.goto('https://demo.nopcommerce.com/register');
 
  //1) expect Page has URL
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

  //2) expect Page has Title
  await expect(page).toHaveTitle('nopCommerce demo store. Register')

  //3) expect Page has Logo
  const logoElement = await page.locator('.header-logo')
  await expect(logoElement).toBeVisible()

  //4) expect element is ebabled
  const searchStoreBox = await page.locator('#small-searchterms')
  await expect(searchStoreBox).toBeEnabled()

  //5) expect checkbox or radio button is checked
  const maleRadioButton = await page.locator('#gender-male')
  await maleRadioButton.click()
  await expect(maleRadioButton).toBeChecked()

  //checkbox
  const newsletterCheckbox = await page.locator('#Newsletter')
  await expect(newsletterCheckbox).toBeChecked()

  //6) expect element has attribute
  const registerButton = await page.locator('#register-button')
  await expect(registerButton).toHaveAttribute('type','submit')

  //7) expect to have text
  const registerPageH1 = await page.locator("div[class='page-title'] h1")
  await expect(registerPageH1).toHaveText("Register")   //full text

  //8) expect to contain text
  await expect(registerPageH1).toContainText("Register")    //partial text

  //9) expect input has a value
  const emailInput = await page.locator("#Email")
  await emailInput.fill('test@gmail.com')
  await expect(emailInput).toHaveValue('test@gmail.com')

  //10) expect to have Count was removed from site
  /*
  const dropDownDaysOptions = await page.locator("select[name='DateofBirthMonth'] options")
  await expect(dropDownDaysOptions).toHaveCount(13)
  */



});