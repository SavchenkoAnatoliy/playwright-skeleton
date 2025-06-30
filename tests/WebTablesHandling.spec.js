import { test, expect } from '@playwright/test';

test('Web Table Handling', async ({ page }) => {
    //Open URL
  await page.goto('http://testautomationpractice.blogspot.com/');
 
  const webTablePagination = await page.locator('#productTable')

  //1) total number of rows and columns
  const columns = await webTablePagination.locator('thead tr th')
  console.log('Number of columns: ', await columns.count())
  expect(await columns.count()).toBe(4) // it's important to place the expect statement here and now after other logic


  const rows = await webTablePagination.locator('tbody tr')
  console.log('Number of rows: ', await rows.count())
  expect(await rows.count()).toBe(5)// it's important to place the expect statement here and now after other logic

  //2) select checkbox for project 4

  /*
  const machedRow = rows.filter({
    has: page.locator('td'),
    hasText: 'Smartwatch'
  })
  await machedRow.locator('input').check();
  */



  //3) select multiple products by reusable function
  //await SelectProductFromTable(rows, page, 'Smartwatch')
  //await SelectProductFromTable(rows, page, 'Smartphone')
  //await SelectProductFromTable(rows, page, 'Wireless Earbuds')

  //4) print all product details using loop
  
  /*
  for(let i=0; i<await rows.count(); i++){

    const row = rows.nth(i);
    const tds = row.locator('td')
    for(let j=0; j<await tds.count()-1; j++){
      console.log(await tds.nth(j).textContent())
    }
  }
  */

  //5) read the product from all pages in the table

  // Locate all pagination links (e.g., page numbers at the bottom of a table)
  const pages = await page.locator('.pagination li a')

  // Print the total number of pages found
  console.log('Number of pages in the table: ', await pages.count())

  // Loop through each page
  for(let p=0; p<await pages.count(); p++){

    // If not on the first page, click the pagination link to navigate to the next page
    if(p>0){
      await pages.nth(p).click()
    }

     // Loop through each row in the current table page
    for(let i=0; i<await rows.count(); i++){
      const row = rows.nth(i);

    // Get all <td> elements (cells) in the current row
      const tds = row.locator('td')

      // Loop through each cell except the last one (possibly an action button column)
      for(let j=0; j<await tds.count()-1; j++){

        // Print the text content of the cell
        console.log(await tds.nth(j).textContent())
      }
    }
    await page.waitForTimeout(5000)
  }


  await page.waitForTimeout(5000)

});

async function SelectProductFromTable(rows, page, name){
  const machedRow = rows.filter({
    has: page.locator('td'),
    hasText: name
  })
  await machedRow.locator('input').check();

}