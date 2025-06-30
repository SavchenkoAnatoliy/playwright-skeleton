//const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test'

test('Locators', async ({page})=>{

      await page.goto('https://demoblaze.com/');

      //click on login button  - property
      await page.click('id=login2')

      //provide username - css
      //await page.locator('#loginusername').fill("anatoliy")
      await page.fill('#loginusername', 'anatoliy58')

      //provide password - css
      await page.fill('#loginpassword', 'strongpass123')

      //click on login
      await page.click("//button[normalize-space()='Log in']")

      //verify logout link is present
      const logoutLink= await page.locator("//a[@id='logout2']")

      await expect(logoutLink).toBeVisible();

      await page.close();

})