import { test, expect, chromium } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/Homepage';
import { CartPage } from './pages/CartPage';

test('Browser Context Multiple Pages/Windows Handling test', async ()=>{

  const browser = await chromium.launch()
  const context = await browser.newContext()

  const page1 = await context.newPage()
  const page2 = await context.newPage()

  const allPages = context.pages()
  console.log("No of Pages created: ", allPages.length)

  await page1.goto("https://demoblaze.com/");
  expect(page1).toHaveTitle("STORE")

  await page2.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'load' });
  await expect(page2).toHaveTitle("Automation Testing Practice")
 
} )

test.only('Browser Context Multiple Pages/Windows Handling test V2 with target _blank', async ()=>{

  const browser = await chromium.launch()
  const context = await browser.newContext()

  //I do not need to create another page because it will be handled after clicking on link with target _blank
  const page1 = await context.newPage()

  // Get all pages currently open in this context (should be 1 at this point)
  const allPages = context.pages()
  console.log("No of Pages created: ", allPages.length)

// Navigate the first page to the login URL
  await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  expect(page1).toHaveTitle("OrangeHRM")

  // Prepare to wait for a new page to open (triggered by a link with target="_blank")
  const pagePromise = context.waitForEvent('page')

  // Click the footer link that opens a new tab/window
  await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

  // Wait for the new page to be created and assign it
  const newPage = await pagePromise
  
  // Verify that the new page has the expected title
  await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ");
  
  const allPagesAfterClick = context.pages()
  console.log("No of Pages created after click on _blank link: ", allPagesAfterClick.length)

  // Pause for 3 seconds to visually confirm the result (for debugging/demo purposes)
  await page1.waitForTimeout(3000);
  await newPage.waitForTimeout(3000);

  // Close the browser (both pages and context are closed too)
  await browser.close();
 
} )