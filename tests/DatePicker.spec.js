import { test, expect } from '@playwright/test';

test('Date Picker', async ({ page }) => {
    //Open URL
  await page.goto('http://testautomationpractice.blogspot.com/');
 
  //1) By providing date directly
  //await page.fill('#datepicker', '30/06/2025');

  //2) Date Picker
  const year = "2025"
  const month = "December"
  const day = "12"

  await page.click('#datepicker'); //open calendar 

  while(true){
    const currentYear = await page.locator('.ui-datepicker-year').textContent()
    const currentMonth = await page.locator('.ui-datepicker-month').textContent()

    if(currentYear == year && currentMonth == month){
      break;
    }

    await page.locator('[title="Next"]').click(); //Click Next button till found correct year and month 
    //await page.locator('[title="Prev"]').click(); //Click Previous button till found correct year and month 

  }

  const dates = await page.$$("//a[@class='ui-state-default']")

  for(const dt of dates){
    if(await dt.textContent()==day){
      await dt.click();
      break;
    }
  }

  await page.waitForTimeout(5000)

});


test('Date Picker - without loop', async ({ page }) => {
    //Open URL
  await page.goto('http://testautomationpractice.blogspot.com/');
 
  //1) By providing date directly
  //await page.fill('#datepicker', '30/06/2025');

  //2) Date Picker
  const year = "2026"
  const month = "December"
  const day = "31"

  await page.click('#datepicker'); //open calendar 

  while(true){
    const currentYear = await page.locator('.ui-datepicker-year').textContent()
    const currentMonth = await page.locator('.ui-datepicker-month').textContent()

    if(currentYear == year && currentMonth == month){
      break;
    }

    await page.locator('[title="Next"]').click(); //Click Next button till found correct year and month 

  }

  const dates = await page.$$("//a[@class='ui-state-default']")

  await page.click(`//a[@class='ui-state-default'][text()='${day}']`)

  await page.waitForTimeout(5000)

});